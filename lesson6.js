function rock(){
    display('rock');
    let yourPick = 'Rock'
    let computerPicked = computerPick(Math.random());
    result(yourPick, computerPicked);
}

function paper(){
    display('paper');
    let yourPick = 'Paper'
    let computerPicked = computerPick(Math.random());
    result(yourPick, computerPicked);
}

function scissor(){
    display('scissor');
    let yourPick = 'Scissor'
    let computerPicked = computerPick(Math.random());
    result(yourPick, computerPicked);
}

function computerPick(randomNumber){
    let result = '';
    if(randomNumber <= .333){
        console.log('Computer: Rock');
        return result = 'Rock';
    }
    else if (randomNumber <= .667){
        console.log('Computer: Paper');
        return result = 'Paper';
    }
    else {
        console.log('Computer: scissor');
        return result = 'Scissor';
    }
}

function display(yourPick){
    console.log('Your pick is: ' + yourPick);
}

function result(yourPick, computerPick){
    if (yourPick === computerPick){
        console.log('Draw');
    }
    else if((yourPick === 'Rock' && computerPick === 'Scissor') ||
        (yourPick === 'Paper' && computerPick === 'Rock') ||
        (yourPick === 'Scissor' && computerPick === 'Paper')
    ){
        console.log('You win');
    }
    else {
        console.log('You lose');
    }
}