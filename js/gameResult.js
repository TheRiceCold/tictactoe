import { getMainBoard } from './gameBoard.js'
import { isAgaintAi } from './startMenu/chooseType.js'

let winningCombo
const winCombos = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  
  // Diagonal
  [0, 4, 8],
  [6, 4, 2]
]

export function gameWon(player) {  
  const plays = getPlaysFromBoard(player)
  
  if(!isAgaintAi()) 
    console.log(`${player} Plays: [${plays}]`)
  
  return getWin(plays)
}

function getWin(plays) {
  for (let combo of winCombos) {
    winningCombo = combo
    if (combo.every(num => plays.indexOf(num) > -1))
      return true
  }
}

function getPlaysFromBoard(player) {
  const boardInputs = [].concat(...getMainBoard())

  const playsToIndex = boardInputs
    .reduce((init, element, index) =>
      (element === player) ?
        init.concat(index) : init,
      []
    )

  return playsToIndex
} 

export const getWinningCombo = () => winningCombo

export function gameDraw() {
  const boardBoxes = [].concat(...getMainBoard())
  const boxesFilled = boardBoxes.filter(box => !box) 
  return !boxesFilled.length
}