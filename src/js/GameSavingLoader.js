import readGameSaving from './readGameSaving';
import GameSavingData from './GameSavingData';

export default class GameSavingLoader {
  static load() {
    return readGameSaving()
      .catch(err => new TypeError(err))
      .then(res => new GameSavingData(res))
      .then(res => res.json());
  }
}
