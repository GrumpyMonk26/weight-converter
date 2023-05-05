const inputEl = document.getElementById('input');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');
const hidentText = document.querySelector('.hidden');

let errorTime;
let clearWeight;

function updateResults() {
  if (inputEl.value < 0 || isNaN(inputEl.value)) {
    errorEl.textContent = 'Please Enter A Valid Weight Above 0';
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.textContent = '';
    }, 2000);
  } else {
    hidentText.style.display = 'block';
    const result = +inputEl.value / 2.205;
    resultEl.textContent = result.toFixed(2);
    clearTimeout(clearWeight);
    clearWeight = setTimeout(() => {
      inputEl.value = '';
      hidentText.style.display = 'none';
    }, 10000);
  }
}

inputEl.addEventListener('input', updateResults);
