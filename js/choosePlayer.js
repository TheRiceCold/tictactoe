
import { playerChoices } from './utils/domElements.js'

let huPlayer
let aiPlayer

export function choosePlayer() {
  for (const choice of playerChoices) {
    if(choice.checked) {
      huPlayer = choice.value
      break
    }
  }
  aiPlayer = huPlayer === 'X' ? 'O' : 'X'
}

export const getHuPlayer = () => huPlayer
export const getAiPlayer = () => aiPlayer
