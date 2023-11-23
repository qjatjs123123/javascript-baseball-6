import OuputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';
import UserBaseballNumber from '../Domain/UserBaseballNumber.js';

class BaseballGameController {
  async gameStart() {
    OuputView.printGameStartMessage();
    const userNumber = await InputView.inputBaseBallNumber();
    const userBaseballNumber = new UserBaseballNumber(userNumber);
  }
}

export default BaseballGameController;
