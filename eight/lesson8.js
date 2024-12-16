let yp = document.getElementsByClassName('yourPick')[0];
let cp = document.getElementsByClassName('computerPick')[0];
let rs = document.getElementsByClassName('result')[0];
let scr = document.getElementsByClassName('score')[0];

function autoPlayMethod(){
  let yourPick = computerPick(Math.random())
  let computerChoice = computerPick(Math.random());
  let result1 = result(yourPick, computerChoice);
  displayHTML(yourPick, computerChoice, result1);
}

let intervalID = null;

function autoPlay(){
  let autoPlayButton = document.getElementsByClassName('auto-play-button')[0];
  if(intervalID === null){
    intervalID = setInterval(autoPlayMethod, 1000)
    autoPlayButton.innerText = 'Stop Auto Play'
  }
  else{
    clearInterval(intervalID);
    intervalID = null;
    autoPlayButton.innerText = 'Auto Play'
  }
}


function displayHTML(yourPick, computerChoice, result1){
  yp.innerHTML = `Your pick is: <img src="https://supersimple.dev/projects/rock-paper-scissors/images/${yourPick}-emoji.png" class="move-icon">`;
  cp.innerHTML = `Computer: <img src="https://supersimple.dev/projects/rock-paper-scissors/images/${computerChoice}-emoji.png" class="move-icon">`
  rs.innerHTML = `Result: ${result1}`;
}

function rock(){
  let yourPick = 'rock'
  display(yourPick);
  let computerChoice = computerPick(Math.random());
  let result1 = result(yourPick, computerChoice);
  displayHTML(yourPick, computerChoice, result1);
}

function paper(){
  let yourPick = 'paper'
  display(yourPick);
  let computerChoice = computerPick(Math.random());
  let result1 = result(yourPick, computerChoice);
  displayHTML(yourPick, computerChoice, result1);
}

function scissor(){
  let yourPick = 'scissors'
  display(yourPick);
  let computerChoice = computerPick(Math.random());
  let result1 = result(yourPick, computerChoice);
  displayHTML(yourPick, computerChoice, result1);
}

function computerPick(randomNumber){
  let computerChoice = '';
  if(randomNumber <= .333){
      console.log('Computer: rock');
      return computerChoice = 'rock';
  }
  else if (randomNumber <= .667){
      console.log('Computer: paper');
      return computerChoice = 'paper';
  }
  else {
      console.log('Computer: scissor');
      return computerChoice = 'scissors';
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
      (yourPick === 'rock' && computerPick === 'scissors') ||
      (yourPick === 'paper' && computerPick === 'rock') ||
      (yourPick === 'scissors' && computerPick === 'paper')
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
  document.getElementsByClassName('yourPick')[0].innerHTML = 'Your pick is: ';
  document.getElementsByClassName('computerPick')[0].innerHTML = 'Computer';
  document.getElementsByClassName('result')[0].innerHTML = 'Result: ';
  scr.innerHTML = 'Score: back to zero';
}

document.getElementsByClassName('reset-score')[0].addEventListener('click', () => {
    yesButton.style.display = 'block';
    noButton.style.display = 'block';
    yesButton.addEventListener('click', () => {
      resetScore();
      yesButton.style.display = 'none';
      noButton.style.display = 'none';
    })
    noButton.addEventListener('click', () => {
      yesButton.style.display = 'none';
      noButton.style.display = 'none';
    })
})




const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no')
yesButton.style.display = 'none';
noButton.style.display = 'none';
document.body.addEventListener('keydown', (event) => { // when using keypress, it doesnt read backspace
  if(event.key === 'a'){
    autoPlay();
  }
  if(event.key === 'r' || event.key === 'Backspace'){
    yesButton.style.display = 'block';
    noButton.style.display = 'block';
    yesButton.addEventListener('click', () => {
      resetScore();
      yesButton.style.display = 'none';
      noButton.style.display = 'none';
    })
    noButton.addEventListener('click', () => {
      yesButton.style.display = 'none';
      noButton.style.display = 'none';
    })
  }
});





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
(function(){
  let object = {
    name: 'da',
    fullName: function(){
      console.log(this.name + ' ' + this.name);
    }
  }
  console.log('IIFE');
  object.fullName();
})();
console.log('second');



