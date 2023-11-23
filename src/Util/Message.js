const OUTPUT_MESSAGE = Object.freeze({
  gameStartMessage: '숫자 야구 게임을 시작합니다.',
  gameResult: (ballCount, strikeCount) => {
    if (ballCount === 0 && strikeCount === 0) return '낫싱';

    const ballStr = ballCount !== 0 ? `${ballCount}볼 ` : '';
    const strikeStr = strikeCount !== 0 ? `${strikeCount}스트라이크` : '';
    return ballStr + strikeStr;
  },
});

const INPUT_MESSAGE = Object.freeze({
  baseBallNumberMessage: '숫자를 입력해주세요 : ',
});

const ERROR_MESSAGE = Object.freeze({
  userNumberError: '[ERROR] 유효하지 않는 숫자입니다.',
});

export { OUTPUT_MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE };
