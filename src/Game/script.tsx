import { useEffect, useState } from "react";
import { getComputerChoice } from "./getComputerChoice";
import {
  BigButton,
  BigWrapper,
  Button,
  ButtonWrapper,
  Header,
  PointsParagraph,
  ResultsWrapper,
  Span,
  TieParagraph,
  Wrapper,
} from "./styled";
import { WinnerScreen } from "../WinnerScreen";
import { LoserScreen } from "../LoserScreen";

export const Game = () => {
  const [humanChoice, setHumanChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("waiting");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [playerWins, setPlayerWins] = useState<number>(2);
  const [computerWins, setComputerWins] = useState<number>(0);

  useEffect(() => {
    if (playerWins === 3) {
      return;
    } else if (computerWins === 3) {
      return;
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
  };

  const resetGame = () => {
    setPlayerWins(0);
    setComputerWins(0);
  };

  return (
    <BigWrapper>
      {playerWins === 3 ? (
        <WinnerScreen />
      ) : computerWins === 3 ? (
        <LoserScreen />
      ) : (
        <>
          <Header>Results:</Header>
          <ResultsWrapper>
            <Span> Player</Span>
            <Span>{playerWins}</Span> <Span>:</Span> <Span>{computerWins}</Span>
            <Span> CPU</Span>
          </ResultsWrapper>
          <Wrapper>
            <PointsParagraph>Player Points: {playerScore}</PointsParagraph>
            <PointsParagraph>Computer Points: {computerScore}</PointsParagraph>
            <PointsParagraph>Computer Choice: {computerChoice}</PointsParagraph>
          </Wrapper>
          <TieParagraph>
            {humanChoice === computerChoice ? "Tie" : ""}
          </TieParagraph>
          <ButtonWrapper>
            <Button onClick={() => playRound("rock")}>Rock</Button>
            <Button onClick={() => playRound("paper")}>Paper</Button>
            <Button onClick={() => playRound("scissors")}>Scissors</Button>
          </ButtonWrapper>
        </>
      )}
      <ButtonWrapper>
        <BigButton
          onClick={() => {
            resetRound();
            resetGame();
          }}
        >
          Play Again
        </BigButton>
      </ButtonWrapper>
    </BigWrapper>
  );
};
