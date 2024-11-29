let yp = document.getElementsByClassName('yourPick')[0];
let cp = document.getElementsByClassName('computerPick')[0];
let rs = document.getElementsByClassName('result')[0];
let scr = document.getElementsByClassName('score')[0];

function displayHTML(yourPick, computerChoice, result1){
  yp.innerHTML = `Your pick is: ${yourPick}`;
  cp.innerHTML = `Computer: ${computerChoice}`
  rs.innerHTML = `Result: ${result1}`;
}

function rock(){
  let yourPick = 'Rock'
  display(yourPick);
  let computerChoice = computerPick(Math.random());
  let result1 = result(yourPick, computerChoice);
  displayHTML(yourPick, computerChoice, result1);
}

function paper(){
  let yourPick = 'Paper'
  display(yourPick);
  let computerChoice = computerPick(Math.random());
  let result1 = result(yourPick, computerChoice);
  displayHTML(yourPick, computerChoice, result1);
}

function scissor(){
  let yourPick = 'Scissor'
  display(yourPick);
  let computerChoice = computerPick(Math.random());
  let result1 = result(yourPick, computerChoice);
  displayHTML(yourPick, computerChoice, result1);
}

function computerPick(randomNumber){
  let computerChoice = '';
  if(randomNumber <= .333){
      console.log('Computer: Rock');
      return computerChoice = 'Rock';
  }
  else if (randomNumber <= .667){
      console.log('Computer: Paper');
      return computerChoice = 'Paper';
  }
  else {
      console.log('Computer: scissor');
      return computerChoice = 'Scissor';
  }
}

function display(yourPick){
  console.log('Your pick is: ' + yourPick);
}

function result(yourPick, computerPick){
  if (yourPick === computerPick){
      scr.innerHTML = 'Score: ' + JSON.stringify(scoring('draw'));
      return 'Draw';
  }
  else if(
      (yourPick === 'Rock' && computerPick === 'Scissor') ||
      (yourPick === 'Paper' && computerPick === 'Rock') ||
      (yourPick === 'Scissor' && computerPick === 'Paper')
  ){
      scr.innerHTML = 'Score: ' + JSON.stringify(scoring('win'));
      return 'You win';
  }
  else {
      scr.innerHTML = 'Score: ' + JSON.stringify(scoring('lose'));
      return 'You lose';
  }
}

let score = {
  wins: 0,
  losses: 0,
  draws: 0
};

function scoring(result){
  if(result === 'win'){
    score.wins += 1;
    localStorage.setItem('scoreStorage', JSON.stringify(score)); 
    return score;
  }
  else if (result === 'lose'){
    score.losses += 1;
    localStorage.setItem('scoreStorage', JSON.stringify(score)); 
    return score;
  }
  else {
    score.draws += 1;
    localStorage.setItem('scoreStorage', JSON.stringify(score)); 
    return score;
  }
}
score = JSON.parse(localStorage.getItem('scoreStorage'));

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  scr.innerHTML = 'Score: back to zero';
}

/*
const product = {
  name: 'Basketball',
  price: 2095,
  ['delivery-time']: '3 days'
}

const product1 = {
  name: 'Shirt',
  price: 1000,
  ['delivery-time']: '2 days'
};
const product2 = {
  name: 'Shirt',
  price: 1000,
  ['delivery-time']: '2 days'
};

function comparePrice(product1, product2){
  return product1.price > product2.price ? product2 : product1;
}

console.log(comparePrice(product1, product));

function isSameProduct(product1, product2){
  return product1.name === product2.name && product1.price && product2.price ? true : false;
}


console.log(isSameProduct(product1, product2));

console.log('Good Morning'.toLowerCase());
console.log('test '.repeat(2));

let person = {
  firstName: 'Jay',
  lastName: 'Bialen',
  age: 20,
  fullName: function(){
    return this.firstName + ' ' + this.lastName;
  }
}
*/

