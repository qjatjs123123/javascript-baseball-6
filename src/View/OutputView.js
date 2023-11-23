import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../Util/Message.js';

class OuputView {
  static printGameStartMessage() {
    Console.print(OUTPUT_MESSAGE.gameStartMessage);
  }

  static printGameResultMessage(result) {
    Console.print(result);
  }

  static printGameEndMessage() {
    Console.print(OUTPUT_MESSAGE.gameEndMessage);
  }
}

export default OuputView;
