export function formatCurrency(value) {
  const amount = parseFloat(value.replace(/\D/g, ""));

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const currencyAmount = formatter.format(amount / 100); 

  return currencyAmount.replace("$", "");
}