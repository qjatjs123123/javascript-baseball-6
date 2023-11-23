import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Util/Message.js';

class InputView {
  static async inputBaseBallNumber() {
    const baseBallNumber = await Console.readLineAsync(INPUT_MESSAGE.baseBallNumberMessage);
    return baseBallNumber;
  }

  static async inputRestartOrQuit() {
    const restartOrQuit = await Console.readLineAsync(INPUT_MESSAGE.restartMessage);
    return restartOrQuit;
  }
}

export default InputView;
