import BaseballGameController from './Controller/BaseballGameController.js';
import OuputView from './View/OutputView.js';

class App {
  #baseBallGameController;

  constructor() {
    this.#baseBallGameController = new BaseballGameController();
  }

  async play() {
    OuputView.printGameStartMessage();
    await this.#baseBallGameController.gameStart();
  }
}
const app = new App();
app.play();

export default App;
