const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButtonCalculate = document.querySelector("#btn");
const result = document.querySelector(".output");

submitButtonCalculate.addEventListener("click", submitHandler);

function submitHandler() {
  let cp = Number(initialPrice.value);
  let qty = Number(stockQuantity.value);
  let sp = Number(currentPrice.value);

  if (isNaN(cp) || isNaN(qty) || isNaN(sp) || cp <= 0 || qty <= 0 || sp <= 0) {
    showOutput("Please enter valid and positive values for all fields");
  } else {
    calculateProfitAndLoss(cp, qty, sp);
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    // logic for loss
    let loss = ((initial - current) * quantity).toFixed(2);
    let lossPercentage = ((loss / (initial * quantity)) * 100).toFixed(2);
    let totalPrice = quantity * current;
    showOutput(
      `The loss incurred is Rs ${loss} by ${lossPercentage}% on investing Rs ${totalPrice}`
    );
  } else if (current > initial) {
    // logic for profit
    let profit = ((current - initial) * quantity).toFixed(2);
    let profitPercentage = ((profit / (initial * quantity)) * 100).toFixed(2);
    let totalPrice = quantity * current;
    showOutput(
      `The profit gained is Rs ${profit} by ${profitPercentage}% on investing Rs ${totalPrice}`
    );
  } else {
    // no profit, no loss
    showOutput("No profit, No loss");
  }
}

function showOutput(message) {
  result.innerHTML = message;
}
