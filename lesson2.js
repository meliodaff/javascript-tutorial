/*var soupPrice = 10;
var burgerPrice = 8;
var icecreamPrice = 5;

var soupQuantity = 1;
var burgerQuantity = 3;
var icecreamQuantity = 1;

var total = (soupPrice * soupQuantity) + (burgerPrice * burgerQuantity) + (icecreamPrice * icecreamQuantity);

console.log("Total: " + total);

var totalFor3 = total * 3;

console.log("Total for 3: " + totalFor3);

var toasterPrice = 18.50;
var shirtPrice = 7.50;

var toasterQuantity = 1;
var shirtQuantity = 2;

var totalPrice = (toasterPrice * toasterQuantity) + (shirtPrice * shirtQuantity);

console.log("Total price for 2c: " + totalPrice)

var tax2c = totalPrice * 0.1;

var tax2e = totalPrice * 0.2;

console.log("Tax for 2d: " + tax2c);
console.log("Tax for 2e: " + tax2e);

let bballPrice = 20.95;
let tshirtPrice = 7.99;
let toasterPrice1 = 18.99;
let sf = 4.99;

(let totalBeforeTaxShipping = 1899 + 2095 + 799;
console.log(totalBeforeTaxShipping);
let totalBeforeTax = totalBeforeTaxShipping + 499;
console.log(totalBeforeTax);
let tax = totalBeforeTax * .1;
console.log(tax);
let overAllTotal = Math.round(totalBeforeTax + tax) / 100;
console.log(overAllTotal);

console.log(Math.ceil(4.2));
*/
let sum = 1899 + 2095 + 799 + 499;

function taxation(sum){
    let total = sum / 100;
    let tax = Math.round(sum * .1) / 100; 
    let overAllTotal = total + tax;
    return overAllTotal;
    
}


console.log(taxation(sum));
