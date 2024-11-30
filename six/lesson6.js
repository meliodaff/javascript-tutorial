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
    }
    else if(
        (yourPick === 'Rock' && computerPick === 'Scissor') ||
        (yourPick === 'Paper' && computerPick === 'Rock') ||
        (yourPick === 'Scissor' && computerPick === 'Paper')
    ){
        console.log('You win');
    }
    else {
        console.log('You lose');
    }
}

let cartQuantity;
/*
if (cartQuantity) {
    console.log('Cart has products');
}
else{
    console.log('Cart has no product');
}
*/

let ds = (95 >= 91) ? 'Passed' : 'Failed';

cartQuantity && console.log('Cart has products');
!cartQuantity && console.log('Cart has no products');

cartQuantity = 'hello';
console.log(!cartQuantity);