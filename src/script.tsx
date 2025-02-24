export const Game = () => {
  console.log("Hello World!");
  console.log("Hello World!");

  let computerScore = 0;
  let humanScore = 0;

  function getComputerChoice(): string {
    const math = Math.random();

    if (math >= 0 && math < 1 / 3) {
      return "rock";
    } else if (math >= 1 / 3 && math < 2 / 3) {
      return "paper";
    } else if (math >= 2 / 3 && math < 1) {
      return "scissors";
    }
    return ""
  }

  function getWinner() {
    if (humanScore === 5) {
      return alert(`The winner is Player!!!`);
    } else if (computerScore === 5) {
      return alert(`The winner is Computer!!!`);
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
          return console.log((playerPoints.innerText = String(++humanScore)));
        } else if (humanChoice === "rock" && computerChoice === "rock") {
          return console.log("Tie!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
          return console.log(
            (computerPoints.innerText = String(++computerScore))
          );
        } else if (humanChoice === "paper" && computerChoice === "rock") {
          return console.log((playerPoints.innerText = String(++humanScore)));
        } else if (humanChoice === "paper" && computerChoice === "paper") {
          return console.log("Tie!");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
          return console.log(
            (computerPoints.innerText = String(++computerScore))
          );
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
          return console.log((playerPoints.innerText = String(++humanScore)));
        } else if (
          humanChoice === "scissors" &&
          computerChoice === "scissors"
        ) {
          return console.log("Tie!");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
          return console.log(
            (computerPoints.innerText = String(++computerScore))
          );
        }
      }
    }
    const btn = document.querySelectorAll(".btn") as NodeListOf<HTMLElement>;

    btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const humanChoice = btn.innerText.toLowerCase();
        playRound(humanChoice, getComputerChoice());
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
