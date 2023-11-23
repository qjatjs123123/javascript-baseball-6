import OuputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';
import UserBaseballNumber from '../Domain/UserBaseballNumber.js';
import Computer from '../Domain/Computer.js';
import { GAME } from '../Util/Constants.js';

class BaseballGameController {
  #computer;

  gameInitalSetting() {
    this.#computer = new Computer();
  }

  async handleInputBaseballNumber() {
    const userNumber = await InputView.inputBaseBallNumber();
    const userBaseballNumber = new UserBaseballNumber(userNumber);
    const gameResult = this.#computer.compareNumber(userBaseballNumber.userNumber);
    this.handleGameResult(gameResult);
  }

  async handleGameResult(gameResult) {
    OuputView.printGameResultMessage(gameResult);

    switch (gameResult) {
      case GAME.gameEnd:
        OuputView.printGameEndMessage();
        break;
      default:
        await this.handleInputBaseballNumber();
        break;
    }
  }

  async gameStart() {
    this.gameInitalSetting();
    OuputView.printGameStartMessage();
    await this.handleInputBaseballNumber();
  }
}

export default BaseballGameController;
