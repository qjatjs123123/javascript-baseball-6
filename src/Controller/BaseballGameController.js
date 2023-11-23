import OuputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';
import UserBaseballNumber from '../Domain/UserBaseballNumber.js';
import Computer from '../Domain/Computer.js';

class BaseballGameController {
  #computer;

  gameInitalSetting() {
    this.#computer = new Computer();
  }

  async handleInputBaseballNumber() {
    const userNumber = await InputView.inputBaseBallNumber();
    const userBaseballNumber = new UserBaseballNumber(userNumber);
    this.#computer.compareNumber(userBaseballNumber.userNumber);
    await this.handleInputBaseballNumber();
  }

  async gameStart() {
    this.gameInitalSetting();
    OuputView.printGameStartMessage();
    await this.handleInputBaseballNumber();
  }
}

export default BaseballGameController;
