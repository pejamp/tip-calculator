const billLabel = document.querySelector('label[for="bill"]');
const peopleLabel = document.querySelector('label[for="people"]');

export function validate(bill, people) {
  let isValid = true;

  if (bill <= 0) {
    const messageError = document.createElement('span');
    messageError.innerHTML = "Can't be zero";
    billLabel.classList.add("form__error");
    billLabel.appendChild(messageError);
    isValid = false;
  } else {
    billLabel.classList.remove("form__error");
    const messageError = billLabel.querySelector('span');
    messageError.remove();
  }

  if (people <= 0) {
    const messageError = document.createElement('span');
    messageError.innerHTML = "Can't be zero";
    peopleLabel.classList.add("form__error");
    peopleLabel.appendChild(messageError);
    isValid = false;
  } else {
    peopleLabel.classList.remove("form__error");
    const messageError = peopleLabel.querySelector('span');
    messageError.remove();
  }

  return isValid;
}