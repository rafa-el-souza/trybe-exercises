let cost = 110;
let marketValue = 20;
let isValid = true;

const taxes = 1.2;

if (cost <= 0 || marketValue <= 0) {
    console.log("error");
    isValid = false;
} else if (isValid) {
    cost = cost * taxes;
    let profit = marketValue - cost;
    console.log(profit);
}