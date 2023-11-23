import BaseballGameController from './Controller/BaseballGameController.js';

class App {
  #baseBallGameController;

  constructor() {
    this.#baseBallGameController = new BaseballGameController();
  }

  async play() {
    this.#baseBallGameController.gameStart();
  }
}
const app = new App();
app.play();

export default App;
