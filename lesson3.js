let name = 'sample';

console.log(`My name is ${name}`);

let coffeePrice = 599;
let bagelPrice = 295;
let coffeeQty = 1;
let bagelQty = 1;
let coffeeTotal = coffeePrice * coffeeQty;
let bagelTotal = bagelPrice * bagelQty;
let totalSum = [coffeeTotal, bagelTotal];

function totalWithTax(sum){
    let total = sum / 100;
    let tax = Math.round(sum * .1) / 100; 
    let overAllTotal = total + tax;
    return overAllTotal;
}

function taxation(sum){
    let tax = Math.round((sum * .1)); 
    return tax;
}

function summation(sum){
    let temp = 0;
    for(let i = 0; i < sum.length; i++){
        temp = temp + sum[i];
    }
    return temp;
}

//alert(`Total cost: $${summation(totalSum)}`);

//total = 8.94
//tax 


let bballPrice = 2095;
let shirtPrice = 799;
let bballQty = 1;
let shirtQty = 1;
let shippingFee = 0;
let bballTotal = bballPrice * bballQty;
let shirtTotal = shirtPrice * shirtQty;

let itemsPrice = [bballTotal, shirtTotal];

let totalWithSF = summation(itemsPrice) + shippingFee;

let tax = taxation(totalWithSF);

let itemsPriceFloated = summation(itemsPrice) / 100;
let shippingFeeFloated = shippingFee / 100;
let totalWithSFFloated = totalWithSF / 100;
let totalWithTaxFloated = tax / 100;

let overalAllTotal = (summation(itemsPrice) + shippingFee + tax) / 100;
console.log();

console.log('Items (4): ' + itemsPriceFloated);
console.log('Shipping & handling: ' + shippingFeeFloated);
console.log('Total before tax: ' + totalWithSFFloated);
console.log('Estimated tax(10%): ' + totalWithTaxFloated);
console.log('Order total: ' + overalAllTotal);
