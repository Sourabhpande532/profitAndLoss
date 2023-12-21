
const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const buttonCalculate = document.querySelector("#btn");
const result = document.querySelector(".output");


function calculateProfitAndLoss(initial,quantity,current){
if(initial>current){
// build logic for loss 
let loss = (initial-current)*quantity;
let lossPercentage = (loss/initialPrice)*100;
let totalPrice = quantity * current;
console.log(`The loss occured here is ${loss} by ${lossPercentage} % On investing Rs ${totalPrice}`);
}else if(current>initial){
// build logic for profit
let profit = (current-initial)*quantity;
let profitPercentage = (profit/initial)*100
let totalPrice = quantity * current;
console.log(`The profit occured here is ${profit} by ${profitPercentage} % On investing Rs ${totalPrice}`);
}else{
// rest of code logic  
console.log("No profit No loss ");
}

}
calculateProfitAndLoss(5,6,40);
calculateProfitAndLoss(15,6,12);