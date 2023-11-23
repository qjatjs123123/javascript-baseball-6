const REGEX = Object.freeze({
  userBaseballNumber: /^(?!.*(.).*\1)[1-9]{3}$/,
});

const BASEBALL = Object.freeze({
  min: 1,
  max: 9,
  length: 3,
});

export { REGEX, BASEBALL };
