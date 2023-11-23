import OuputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';
import UserBaseballNumber from '../Domain/UserBaseballNumber.js';
import Computer from '../Domain/Computer.js';
import { GAME } from '../Util/Constants.js';
import { ERROR_MESSAGE } from '../Util/Message.js';

class BaseballGameController {
  #computer;

  gameInitalSetting() {
    this.#computer = new Computer();
  }

  async handleInputBaseballNumber() {
    const userNumber = await InputView.inputBaseBallNumber();
    const userBaseballNumber = new UserBaseballNumber(userNumber);
    const gameResult = this.#computer.compareNumber(userBaseballNumber.userNumber);
    await this.handleGameResult(gameResult);
  }

  async handleGameResult(gameResult) {
    OuputView.printGameResultMessage(gameResult);

    switch (gameResult) {
      case GAME.gameEnd:
        OuputView.printGameEndMessage();
        await this.handleRestartOrQuit();
        break;

      default:
        await this.handleInputBaseballNumber();
    }
  }

  async handleRestartOrQuit() {
    const restartOrQuit = await InputView.inputRestartOrQuit();

    switch (restartOrQuit) {
      case GAME.restart:
        await this.gameStart();
        break;

      case GAME.quit:
        break;

      default:
        throw new Error(ERROR_MESSAGE.restartError);
    }
  }

  async gameStart() {
    this.gameInitalSetting();
    await this.handleInputBaseballNumber();
  }
}

export default BaseballGameController;
