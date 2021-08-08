export const SHOW_GAME = 1,
  SHOW_SCORE = 2,
  SHOW_RULES = 3,
  HOUSE = "House",
  PLAYER = "Player",
  DRAW = "DRAW",
  SPOCK='spock',
  LIZARD='lizard',
  SCISSORS='scissors',
  PAPER = 'paper',
  ROCK='rock';


  export const playerBeatsHouse = {
    lizard: [SPOCK, PAPER],
    spock: [SCISSORS, ROCK],
    scissors: [PAPER, LIZARD],
    paper: [ROCK, SPOCK],
    rock: [LIZARD, SCISSORS],
  };