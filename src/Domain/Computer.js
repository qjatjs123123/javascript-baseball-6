import { Random } from '@woowacourse/mission-utils';
import { BASEBALL } from '../Util/Constants.js';
import { OUTPUT_MESSAGE } from '../Util/Message.js';

class ComputerBaseballNumber {
  #computerNumbers;

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
    this.#computerNumbers = computer;
  }

  compareNumber(userNumber) {
    const strikeCount = this.#getStrike(userNumber);
    const ballCount = this.#getBall(userNumber);
    return OUTPUT_MESSAGE.gameResult(ballCount, strikeCount);
  }

  #getStrike(userNumber) {
    return this.#computerNumbers.reduce((count, computerNumber, idx) => {
      return computerNumber === userNumber[idx] ? count + 1 : count;
    }, 0);
  }

  #getBall(userNumber) {
    return this.#computerNumbers.reduce((count, computerNumber, idx) => {
      return computerNumber !== userNumber[idx] && userNumber.includes(computerNumber)
        ? count + 1
        : count;
    }, 0);
  }
}

export default ComputerBaseballNumber;
