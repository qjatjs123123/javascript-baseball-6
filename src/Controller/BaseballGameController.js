import OuputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';
import UserBaseballNumber from '../Domain/UserBaseballNumber.js';
import ComputerBaseballNumber from '../Domain/ComputerBaseballNumber.js';

class BaseballGameController {
  #computerBaseballNumber;

  gameInitalSetting() {
    this.#computerBaseballNumber = new ComputerBaseballNumber();
    console.log(this.#computerBaseballNumber.getComputerNumber());
  }

  async gameStart() {
    this.gameInitalSetting();
    OuputView.printGameStartMessage();
    const userNumber = await InputView.inputBaseBallNumber();
    const userBaseballNumber = new UserBaseballNumber(userNumber);
  }
}

export default BaseballGameController;
