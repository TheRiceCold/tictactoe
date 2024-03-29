import { playerChoices } from '../domVariables.js'

let huPlayer, aiPlayer

export function choosePlayer() {
  for (const choice of playerChoices) {
    if(choice.checked) {
      huPlayer = choice.value
      break
    }
  }
  aiPlayer = (huPlayer === 'X') ? 'O' : 'X'
} 

export const getPlayer = () => huPlayer
export const getAiPlayer = () => aiPlayer