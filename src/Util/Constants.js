const REGEX = Object.freeze({
  userBaseballNumber: /^(?!.*(.).*\1)[1-9]{3}$/,
});

const BASEBALL = Object.freeze({
  min: 1,
  max: 9,
  length: 3,
});

const GAME = Object.freeze({
  gameEnd: '3스트라이크',
});

export { REGEX, BASEBALL, GAME };
