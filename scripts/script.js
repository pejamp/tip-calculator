import { calculate } from "./calculate.js";
import { validate } from "./validate.js";

const formElement = document.getElementById('form');
const billInput = document.getElementById('bill');
const tipInputs = document.querySelectorAll('input[name="tip"]');
const customTipInput = document.getElementById('customTip');
const peopleInput = document.getElementById('people');

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

  console.log(bill, people)
  console.log(tipAmount, total)
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