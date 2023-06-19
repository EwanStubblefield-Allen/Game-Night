import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js";

class PlayersService {
  changeScore(playerName, isPlus) {
    const players = AppState.players

    let foundPlayer = players.find(player => player.name == playerName)

    if (isPlus) {
      foundPlayer.score++
      console.log('plus', foundPlayer);
    } else {
      foundPlayer.score--
      console.log('minus', foundPlayer);
    }
  }

  createPlayer(formData) {
    const newPlayer = new Player(formData.name, formData.imgUrl)

    AppState.players.push(newPlayer)
  }
}

export const playersService = new PlayersService()