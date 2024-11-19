let qty = 0;

function updateQty(){
  document.getElementById('qty').innerHTML = 'Quantity: ' + qty;
}

function showQty(){
  console.log(`Cart quantity: ${qty}`);
  updateQty()
}
function plusOne(){
  qty++;
  console.log(`Cart quantity: ${qty}`);
  updateQty()
}

function plusTwo(){
  qty += 2;
  console.log(`Cart quantity: ${qty}`);
  updateQty()
}

function plusThree(){
  qty += 3;
  console.log(`Cart quantity: ${qty}`);
  updateQty()
}

function plusFour(){
  qty += 4;
  console.log(`Cart quantity: ${qty}`);
  updateQty()
}

function plusFive(){
  qty += 5;
  console.log(`Cart quantity: ${qty}`);
  updateQty()
}

function minusOne(){
  qty--;
  updateQty()
}

function minusTwo(){
  qty -= 2;
  updateQty()
}

function minusThree(){
  qty -= 3;
  updateQty()
}

function resetCart(){
  qty = 0;
  console.log('Cart was reset');
  updateQty()
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
*/
