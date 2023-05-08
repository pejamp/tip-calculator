import { calculate } from "./calculate.js";
import { formatCurrency } from "./format-currency.js";
import { insertOnView } from "./insert-on-view.js";
import { validate } from "./validate.js";

const formElement = document.getElementById('form');
const billInput = document.getElementById('bill');
const tipInputs = document.querySelectorAll('input[name="tip"]');
const customTipInput = document.getElementById('customTip');
const peopleInput = document.getElementById('people');
const resetButton = document.getElementById("reset-btn");
const tipElement = document.getElementById("tip-result");
const totalElement = document.getElementById("total-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const bill = parseFloat(billInput.value) || 0;
  const people = parseInt(peopleInput.value) || 0;
  let tip;
  
  if (customTipInput.value) {
    tip = parseFloat(customTipInput.value) || 0;
  } else {
    for (const tipInput of tipInputs) {
      if (tipInput.checked) {
        tip = parseFloat(tipInput.value);
        break;
      }
    }
  }
  
  if (!validate(bill, people)) {
    return
  }
  
  const { tipAmount, total } = calculate(bill, people, tip);
  
  insertOnView(tipAmount, total);
  resetButtonState();
});

tipInputs.forEach((tipInput) => {
  tipInput.addEventListener("change", () => {
    if (tipInput.checked && tipInput.value === "custom") {
      customTipInput.classList.remove('hidden');
    } else {
      customTipInput.classList.add('hidden');
      customTipInput.value = '';
    }
  });
});

billInput.addEventListener("input", (event) => {
  const value = formatCurrency(event.target.value);

  if (value == 0) {
    billInput.value = '';
  } else {
    billInput.value = value;
  }
});

resetButton.addEventListener("click", () => {
  insertOnView(0, 0);
  resetButtonState();
});

resetButtonState();

function resetButtonState() {
  if (tipElement.textContent === '$0.00' && totalElement.textContent === '$0.00') {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
  }
}