import { useEffect, useState } from "react";
import { getComputerChoice } from "./getComputerChoice";
import { Button, ButtonWrapper, Wrapper } from "./styled";

export const Game = () => {
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  useEffect(() => {
    if (playerScore === 5) {
      alert("YOU WON!");
    } else if (computerScore === 5) {
      alert("COMPUTER WON!");
    }
  }, [playerScore, computerScore]);

  const playRound = (humanChoice: string) => {
    const computerPick = getComputerChoice();
    setComputerChoice(computerPick);

    const winningMoves: Record<string, string> = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (humanChoice === computerPick) {
      return console.log("Tie!");
    } else if (winningMoves[humanChoice] === computerPick) {
      setPlayerScore((playerScore) => playerScore + 1);
    } else {
      setComputerScore((computerScore) => computerScore + 1);
    }
  };

  return (
    <>
      <Wrapper>
        <h2>Results</h2>
        <p>Player Points: {playerScore}</p>
        <p>Computer Points: {computerScore}</p>
        <p>Computer Choice: {computerChoice}</p>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={() => playRound("rock")}>Rock</Button>
        <Button onClick={() => playRound("paper")}>Paper</Button>
        <Button onClick={() => playRound("scissors")}>Scissors</Button>
      </ButtonWrapper>
<ButtonWrapper>
<Button
          onClick={() => {
            setPlayerScore(0);
            setComputerScore(0);
          }}
        >
          Play Again
        </Button>
</ButtonWrapper>
    </>
  );
};
