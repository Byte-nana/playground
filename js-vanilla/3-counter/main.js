//버튼을 누르면
//카운트 넘버가 증가하고
// 그 증가한 숫자가 배너의 총 카운트에 반영된다. (total count가 발생하는 모든 곳을 업데이트 해줘야 한다. )
const addBtn = document.querySelectorAll('.counter__add-btn');
const counterNum = document.querySelectorAll('.counter__num');
const totalNum = document.querySelector('.total-num');
const emoji = document.querySelector('.emoji');

let count1 = 0;
let count2 = 0;
counterNum[0].innerHTML = `${count1}`;
counterNum[1].innerHTML = `${count2}`;

addBtn[0].addEventListener('click', () => {
  count1++;
  counterNum[0].innerHTML = `${count1} / ${count1 + count2}`;
  totalNum.innerHTML = `${count1 + count2}`;

  counterNum[1].innerHTML = `${count2} / ${count1 + count2}`;

  if (count1 > 10) {
    emoji.innerHTML = '🔥';
  }
});

addBtn[1].addEventListener('click', () => {
  count2++;
  counterNum[1].innerHTML = `${count2} / ${count1 + count2}`;
  totalNum.innerHTML = `${count1 + count2}`;

  counterNum[0].innerHTML = `${count1} / ${count1 + count2}`;

  if (count2 > 10) {
    emoji.innerHTML = '🔥';
  }
});
