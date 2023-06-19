import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

function _draw() {
  let players = AppState.players
  let template = ''
  players.forEach(player => template += player.PlayerTemplate);

  setHTML('players', template)
}

export class PlayerController {
  constructor() {
    console.log('success');
    _draw()
  }

  changeScore(playerName, isPlus) {
    playersService.changeScore(playerName, isPlus)
    _draw()
  }

  addPlayer(event) {
    event.preventDefault()
    const form = event.target

    const formData = getFormData(form)
    playersService.createPlayer(formData)

    _draw()
    form.reset()
  }
}