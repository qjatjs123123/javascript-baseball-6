import UserBaseballNumber from '../../src/Domain/UserBaseballNumber';
import { ERROR_MESSAGE } from '../../src/Util/Message';

describe('사용자 입력한 숫자 야구 넘버 테스트', () => {

  describe('공백을 입력하면 에러를 반환한다.', () => {
    // given
    const testCases = [{ input: '', expect: ERROR_MESSAGE.userNumberError }];

    test.each(testCases)('공백을 입력하면 에러가 발생한다.', ({ input, expected }) => {
      // then
      expect(() => new UserBaseballNumber(input)).toThrow(expected);
    });
  });

  describe('문자가 포함된 경우 에러를 발생한다.', () => {
    // given
    const testCases = [
      { input: 'aaa', expect: ERROR_MESSAGE.userNumberError },
      { input: 'a1a', expect: ERROR_MESSAGE.userNumberError },
      { input: 'a11', expect: ERROR_MESSAGE.userNumberError },
      { input: '12!', expect: ERROR_MESSAGE.userNumberError },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', ({ input, expected }) => {
      // then
      expect(() => new UserBaseballNumber(input)).toThrow(expected);
    });
  });

  describe('길이가 4이하이면 에러를 발생한다.', () => {
    // given
    const testCases = [
      { input: '1234', expect: ERROR_MESSAGE.userNumberError },
      { input: '12', expect: ERROR_MESSAGE.userNumberError },
      { input: '1', expect: ERROR_MESSAGE.userNumberError },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', ({ input, expected }) => {
      // then
      expect(() => new UserBaseballNumber(input)).toThrow(expected);
    });
  });

  describe('중복되면 에러를 출력한다.', () => {
    // given
    const testCases = [
      { input: '122', expect: ERROR_MESSAGE.userNumberError },
      { input: '121', expect: ERROR_MESSAGE.userNumberError },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', ({ input, expected }) => {
      // then
      expect(() => new UserBaseballNumber(input)).toThrow(expected);
    });
  });

  describe('0이 포함되면 에러를 출력한다.', () => {
    // given
    const testCases = [
      { input: '102', expect: ERROR_MESSAGE.userNumberError },
      { input: '036', expect: ERROR_MESSAGE.userNumberError },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', ({ input, expected }) => {
      // then
      expect(() => new UserBaseballNumber(input)).toThrow(expected);
    });
  });

  describe('정상적인 값인 경우 에러를 출력하지 않는다.', () => {
    // given
    const testCases = [
      { input: '123' },
      { input: '456' },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생하지 않는다.', ({ input }) => {
      // then
      expect(() => new UserBaseballNumber(input)).not.toThrow();
    });
  });
});
