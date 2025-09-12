// create els
const container = document.querySelector('.container');

function createEls() {
  const div = document.createElement('div');
  div.setAttribute('class', 'counter');
  div.innerHTML = `
    <div class="num__wrapper">
      <span class="counter__count"></span>
      <span class="counter__total"></span>
    </div>

    <button class="counter__add-btn">Add +</button>
  `;

  container.appendChild(div);
}
createEls();
createEls();

//
const totalNum = document.querySelector('.total-num');
const emoji = document.querySelector('.emoji');

// initialise count number
const counters = Array.from(document.querySelectorAll('.counter')).map(() => 0);

function render() {
  const showCount = document.querySelectorAll('.counter__count');
  const totlaCount = document.querySelectorAll('.counter__total');

  const total = counters.reduce((acc, c) => acc + c, 0);

  showCount.forEach((el, i) => (el.textContent = `${counters[i]}`));

  totlaCount.forEach((el) => (el.textContent = `/ ${total}`));

  totalNum.textContent = `${total}`;
  emoji.textContent = total > 10 ? '🔥' : '❄️';
}

// counter update
function updateCounter(i) {
  counters[i] += 1;
  render();
}

const addBtn = document.querySelectorAll('.counter__add-btn');
addBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => updateCounter(i));
});

render();
