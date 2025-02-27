import { useEffect, useState } from "react";
import { getComputerChoice } from "./getComputerChoice";
import {
  Button,
  ButtonWrapper,
  Header,
  ResultsWrapper,
  Span,
  TieParagraph,
  Wrapper,
} from "./styled";

export const Game = () => {
  const [humanChoice, setHumanChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("waiting");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [playerWins, setPlayerWins] = useState<number>(0);
  const [computerWins, setComputerWins] = useState<number>(0);

  useEffect(() => {
    if (playerWins === 3) {
      alert("GAME WON BY PLAYER!");
    } else if (computerWins === 3) {
      alert("GAME WON BY CPU!");
    }
  }, [playerWins, computerWins]);

  useEffect(() => {
    if (playerScore === 5) {
      setPlayerWins((playerScore) => playerScore + 1);
      alert("YOU WON!");
      resetRound();
    } else if (computerScore === 5) {
      setComputerWins((computerScore) => computerScore + 1);
      alert("COMPUTER WON!");
      resetRound();
    }
  }, [playerScore, computerScore]);

  const playRound = (humanChoice: string) => {
    setHumanChoice(humanChoice);
    const computerPick = getComputerChoice();
    setComputerChoice(computerPick);

    const winningMoves: Record<string, string> = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (humanChoice === computerPick) {
      return "";
    } else if (winningMoves[humanChoice] === computerPick) {
      setPlayerScore((playerScore) => playerScore + 1);
    } else {
      setComputerScore((computerScore) => computerScore + 1);
    }
  };

  const resetRound = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setComputerChoice("");
  };

  const resetGame = () => {
    setPlayerWins(0);
    setComputerWins(0);
  };

  return (
    <>
      <Header>Results:</Header>
      <ResultsWrapper>
        <p>
          Player {playerWins}:{computerWins}
          <Span>CPU</Span>
        </p>
      </ResultsWrapper>
      <Wrapper>
        <p>Player Points: {playerScore}</p>
        <p>Computer Points: {computerScore}</p>
        <p>Computer Choice: {computerChoice}</p>
      </Wrapper>
      <TieParagraph>
        {humanChoice === computerChoice ? "Tie" : ""}
      </TieParagraph>
      <ButtonWrapper>
        <Button onClick={() => playRound("rock")}>Rock</Button>
        <Button onClick={() => playRound("paper")}>Paper</Button>
        <Button onClick={() => playRound("scissors")}>Scissors</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            resetRound();
            resetGame();
          }}
        >
          Play Again
        </Button>
      </ButtonWrapper>
    </>
  );
};
