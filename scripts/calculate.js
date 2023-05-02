export function calculate(bill, people, tip) {
  let totalTip = 0;
  let tipPerPerson = 0;
  let totalPerPerson = 0;

  if (tip) {
    totalTip = (bill * tip) / 100;
    tipPerPerson = totalTip / people;
    totalPerPerson = (bill / people) + tipPerPerson;
  } else {
    totalPerPerson = bill / people;
  }

  return {
    tipAmount: tipPerPerson,
    total: totalPerPerson
  }
}