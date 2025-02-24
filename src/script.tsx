export const Game = () => {
  console.log("Hello World!");

  let computerScore = 0;
  let humanScore = 0;

  function getComputerChoice(max: number) {
    const math = Math.floor(Math.random() * Number(max)) + 1;
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    if (math === 1) {
      return (
        console.log(`Computer's choice %c${rock}`, "font-weight: bold"), rock
      );
    } else if (math === 2) {
      return (
        console.log(`Computer's choice %c${paper}`, "font-weight: bold"), paper
      );
    } else if (math === 3) {
      return (
        console.log(`Computer's choice %c${scissors}`, "font-weight: bold"),
        scissors
      );
    }
  }

  function getWinner() {
    let winner = "";

    if (humanScore === 5) {
      let humanScore = "Player";
      return alert(`The winner is ${(winner += humanScore)}!!!`);
    } else if (computerScore === 5) {
      let computerScore = "Computer";
      return alert(`The winner is ${(winner += computerScore)}!!!`);
    }
  }

  function playGame() {
    function playRound(humanChoice: string, computerChoice: string) {
      const playerPoints = document.querySelector(".playerPoints");
      const computerPoints = document.querySelector(".computerPoints");

      if (
        playerPoints instanceof HTMLElement &&
        computerPoints instanceof HTMLElement
      ) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
          return (playerPoints.innerText = String(++humanScore));
        } else if (humanChoice === "rock" && computerChoice === "rock") {
          return console.log("Tie!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
          return (computerPoints.innerText = String(++computerScore));
        } else if (humanChoice === "paper" && computerChoice === "rock") {
          return (playerPoints.innerText = String(++humanScore));
        } else if (humanChoice === "paper" && computerChoice === "paper") {
          return console.log("Tie!");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
          return (computerPoints.innerText = String(++computerScore));
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
          return (playerPoints.innerText = String(++humanScore));
        } else if (
          humanChoice === "scissors" &&
          computerChoice === "scissors"
        ) {
          return console.log("Tie!");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
          return (computerPoints.innerText = String(++computerScore));
        }
      }
    }
    const btn = document.querySelectorAll(".btn") as NodeListOf<HTMLElement>;

    btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const humanChoice = btn.innerText.toLowerCase();
        playRound(humanChoice, getComputerChoice(3)!);
        getWinner();
      });
    });
  }

  playGame();

  return (
    <>
      <div>
        <button className="btn">rock</button>
        <button className="btn">paper</button>
        <button className="btn">scissors</button>
      </div>
      <div>
        <h2>Results</h2>
        <p>
          Player Points: <span className="playerPoints"></span>
        </p>
        <p>
          Computer Points: <span className="computerPoints"></span>
        </p>
      </div>
    </>
  );
};
