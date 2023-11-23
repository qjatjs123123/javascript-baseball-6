import { ERROR_MESSAGE } from '../Util/Message.js';
import { REGEX } from '../Util/Constants.js';

class UserBaseballNumber {
  #userNumber;

  constructor(userNumber) {
    this.#validation(userNumber);
  }

  #validation(userNumber) {
    const regex = REGEX.userBaseballNumber;
    if (!regex.test(userNumber)) throw new Error(ERROR_MESSAGE.userNumberError);
  }
}

export default UserBaseballNumber;
