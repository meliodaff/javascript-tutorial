let qty = 0;
let limit = 10;

function displayQty(){
  console.log(`Cart quantity: ${qty}`);
}

function showAlert(){
  alert('The cart is full');
}

function updateQty(){
  document.getElementById('qty').innerHTML = 'Quantity: ' + qty;
}

function showQty(){
  displayQty()
  updateQty()
}
function plusOne(){
  qty >= limit ? showAlert() : false;
  checks10() && qty++;
  displayQty()
  updateQty()
}

function plusTwo(){
  qty >= limit || qty >= limit - 1 ? showAlert() : false ;
  qty += checks9() ? 2 : 0
  displayQty()
  updateQty()
}

function plusThree(){
  qty >= limit || qty >= limit - 2 ? showAlert() : false ;
  qty += checks8() ? 3 : 0
  displayQty()
  updateQty()
}

function plusFour(){
  qty += 4;
  displayQty()
  updateQty()
}

function plusFive(){
  qty += 5;
  displayQty()
  updateQty()
}

function minusOne(){
  qty === 0 ? cartHasNoProducts() : null;
  checks0() && qty--;
  displayQty()
  updateQty()
}

function minusTwo(){
  qty <= 1 ? cartHasNoProducts() : null;
  qty += checks1() ? -2 : 0
  displayQty()
  updateQty()
}

function minusThree(){
  qty <= 2 ? cartHasNoProducts() : null;
  qty += checks2() ? -3 : 0
  displayQty()
  updateQty()
}

function resetCart(){
  qty = 0;
  console.log('Cart was reset');
  updateQty()
}

function checks10(){
  let maximum = qty === 10 ? false : true;
  return maximum;
}

function checks9(){
  let maximum = qty === 9 || qty === 10 ? false : true;
  return maximum;
}

function checks8(){
  let maximum = qty >= 8 ? false : true;
  return maximum;
}

function checks0(){
  let minimum = qty === 0 ? false : true;
  return minimum;
}
function checks1(){
  let minimum = qty <= 1 ? false : true;
  return minimum;
}
function checks2(){
  let minimum = qty <= 2 ? false : true;
  return minimum;
}

function cartHasNoProducts(){
alert('Cart has no products'); 
}

/*
let name = 'Jv Bialen';
console.log(`My name is ${name}`);

let coffeePrice = 5;
let bagelPrice = 3;
let soupPrice = 9;

let coffeeQty = 1;
let bagelQty = 2;
let soupQty = 1;

let coffeeTotal = coffeePrice * coffeeQty;
let bagelTotal = bagelPrice * bagelQty;
let soupTotal = soupPrice * soupQty;

let cost = coffeeTotal + bagelTotal + soupTotal;
let tax = cost * .1;
console.log(`Cost of food: $${cost}`);
console.log(`Total cost of food with tax: $${cost + tax}`);


let calculation = '';

function show(){
  console.log(calculation);
}
function numbers(n){
  calculation = calculation + n;
}
function one(){
  numbers(1);
  show();
}
function two(){
  numbers(2);
  show();
}
function three(){
  numbers(3);
  show();
}
function four(){
  numbers(4);
  show();
}
function five(){
  numbers(5);
  show();
}
function six(){
  numbers(6);
  show();
}
function seven(){
  numbers(7);
  show();  
}
function eight(){
  numbers(8);
  show();
}
function nine(){
  numbers(9);
  show();
}
function zero(){
  numbers(0);
  show();
}
function addition(){
  calculation += ' + ';
  show();
}
function equal(){
  calculation = eval(calculation);
  console.log(calculation);
}
function reset(){
  calculation = '';
  console.log('Reset');
}

*/
