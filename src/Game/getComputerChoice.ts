export const getComputerChoice = (): string => {
  const math = Math.random();

  if (math >= 0 && math < 1 / 3) {
    return "rock";
  } else if (math >= 1 / 3 && math < 2 / 3) {
    return "paper";
  } else if (math >= 2 / 3 && math < 1) {
    return "scissors";
  }
  return "";
};
