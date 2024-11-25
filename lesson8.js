function rock(){
  let yourPick = 'Rock'
  display(yourPick);
  let computerChoice = computerPick(Math.random());
  result(yourPick, computerChoice);
}

function paper(){
  let yourPick = 'Paper'
  display(yourPick);
  let computerChoice = computerPick(Math.random());
  result(yourPick, computerChoice);
}

function scissor(){
  let yourPick = 'Scissor'
  display(yourPick);
  let computerChoice = computerPick(Math.random());
  result(yourPick, computerChoice);
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
      console.log('Draw');
      scoring('draw');
  }
  else if(
      (yourPick === 'Rock' && computerPick === 'Scissor') ||
      (yourPick === 'Paper' && computerPick === 'Rock') ||
      (yourPick === 'Scissor' && computerPick === 'Paper')
  ){
      console.log('You win');
      scoring('win');
  }
  else {
      console.log('You lose');
      scoring('lose');
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
    console.log(score);

  }
  else if (result === 'lose'){
    score.losses += 1;
    console.log(score);
  }
  else {
    score.draws += 1;
    console.log(score);
  }
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  console.log('Score was back to zero');
}