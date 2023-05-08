const tipElement = document.getElementById("tip-result");
const totalElement = document.getElementById("total-result");

export function insertOnView(tip, total) {

  tipElement.innerHTML = `$${tip.toFixed(2)}`;
  totalElement.innerHTML = `$${total.toFixed(2)}`;
}