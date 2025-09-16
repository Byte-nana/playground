function game(num) {
  if (num % 9 === 0) {
    console.log('👏👏');
  } else if (num % 3 === 0) {
    console.log('👏');
  } else {
    console.log('next😎');
  }
}
// game(11);

function isPassExam(scoreFirst, scoreSecond) {
  const isVaild = (n) =>
    typeof n === 'number' && !isNaN(n) && n >= 0 && n <= 100;
  if (!isVaild(scoreFirst) || !isVaild(scoreSecond)) {
    console.log('What do you want🤨');
  } else if (
    scoreFirst < 40 ||
    scoreSecond < 40 ||
    scoreFirst + scoreSecond < 120
  ) {
    console.log('You are not on the list🥲');
  } else if (scoreFirst + scoreSecond >= 120) {
    console.log('Congratulation🥳');
  }
}
isPassExam(-1, -2);
// isPassExam(70, 70);
// isPassExam(30, 100);
// isPassExam(50, 50);

function clappingGame(num) {
  let lastDigit = Math.abs(num % 10);
  if (lastDigit === 3 || lastDigit === 6 || lastDigit === 9) {
    console.log('👏');
  } else {
    console.log('next😁');
  }
}
// clappingGame(103);
