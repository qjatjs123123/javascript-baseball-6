import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Util/Message.js';

class InputView {
  static async inputBaseBallNumber() {
    const baseBallNumber = await Console.readLineAsync(INPUT_MESSAGE.baseBallNumberMessage);
    return baseBallNumber;
  }
}

export default InputView;
