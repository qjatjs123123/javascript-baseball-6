import Computer from '../../src/Domain/Computer';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('숫자야구 게임 결과 테스트', () => {
  let computer;

  beforeEach(() => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);
    computer = new Computer();
  });

  describe('1스트라이크', () => {
    // given
    const testCases = [
      { input: [1, 2, 4] , expected: '1스트라이크' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 나와야 한다.', ({ input, expected }) => {
      // when
      const result = computer.compareNumber(input);
      // then
      expect(result).toBe(expected);
    });
  });

  describe('2스트라이크', () => {
    // given
    const testCases = [
      { input: [1, 3, 4] , expected: '2스트라이크' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 나와야 한다.', ({ input, expected }) => {
      // when
      const result = computer.compareNumber(input);
      // then
      expect(result).toBe(expected);
    });
  });

  describe('3스트라이크', () => {
    // given
    const testCases = [
      { input: [1, 3, 5] , expected: '3스트라이크' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 나와야 한다.', ({ input, expected }) => {
      // when
      const result = computer.compareNumber(input);
      // then
      expect(result).toBe(expected);
    });
  });

  describe('1볼 ', () => {
    // given
    const testCases = [
      { input: [2, 5, 6] , expected: '1볼 ' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 나와야 한다.', ({ input, expected }) => {
      // when
      const result = computer.compareNumber(input);
      // then
      expect(result).toBe(expected);
    });
  });

  describe('2볼 ', () => {
    // given
    const testCases = [
      { input: [2, 5, 3] , expected: '2볼 ' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 나와야 한다.', ({ input, expected }) => {
      // when
      const result = computer.compareNumber(input);
      // then
      expect(result).toBe(expected);
    });
  });

  describe('3볼 ', () => {
    // given
    const testCases = [
      { input: [3, 5, 1] , expected: '3볼 ' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 나와야 한다.', ({ input, expected }) => {
      // when
      const result = computer.compareNumber(input);
      // then
      expect(result).toBe(expected);
    });
  });

  describe('1볼 1스트라이크', () => {
    // given
    const testCases = [
      { input: [1, 6, 3] , expected: '1볼 1스트라이크' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 나와야 한다.', ({ input, expected }) => {
      // when
      const result = computer.compareNumber(input);
      // then
      expect(result).toBe(expected);
    });
  });

  describe('2볼 1스트라이크', () => {
    // given
    const testCases = [
      { input: [1, 5, 3] , expected: '2볼 1스트라이크' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 나와야 한다.', ({ input, expected }) => {
      // when
      const result = computer.compareNumber(input);
      // then
      expect(result).toBe(expected);
    });
  });
});
