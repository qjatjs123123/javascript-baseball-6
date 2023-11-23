import { Random } from '@woowacourse/mission-utils';
import { BASEBALL } from '../Util/Constants.js';

class ComputerBaseballNumber {
  #computerBaseballNumber;

  constructor() {
    this.#generateRandomNumber();
  }

  #generateRandomNumber() {
    const computer = [];
    while (computer.length < BASEBALL.length) {
      const number = Random.pickNumberInRange(BASEBALL.min, BASEBALL.max);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#computerBaseballNumber = computer;
  }

  getComputerNumber() {
    return this.#computerBaseballNumber;
  }
}

export default ComputerBaseballNumber;
