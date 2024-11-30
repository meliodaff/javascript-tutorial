/*
function subscribe(){
    let btnSubscribe = document.getElementsByClassName('btn')[0];
    
    btnSubscribe.innerHTML = btnSubscribe.innerText === 'Subscribe' ? 'Subscribed' : 'Subscribe'
}

function calculate(){
    let total = 0;
    let userInput = document.getElementsByClassName('userInput')[0].value;

    if (userInput == ''){
        alert('No inputted value');
        return;
    }
    else if (userInput < 1){
        alert('watdafuck')
        return;
    }
    else if(userInput < 40){
       total = +userInput + 10;
    }
    else{
        total = userInput;
    }

    document.getElementsByClassName('total')[0].innerHTML = `Total: $${total}`;
    
}

function typing(event){
    let userInput = document.getElementsByClassName('userInput')[0].value; 
    if(event.key ==='Enter'){
        calculate();
    }
    document.getElementsByClassName('demo')[0].innerText = userInput + event.key;
}   
function hover(){
    console.log('hovering');
}
function leave(){
    console.log('leaving');
}
*/

// *CHALLENGE EXERCISES*
//console.log(document.querySelector('button'));
//document.querySelector('.b9').innerText = '9b done';
document.getElementsByClassName('b9')[0].innerHTML = '9b done';


function heads(){
    document.querySelector('.userPick').innerHTML = `You chose: heads`;
}
function tails(){
    document.querySelector('.userPick').innerHTML = `You chose: tails`;
}

function submit(){
    let userName = document.getElementsByClassName('userName')[0].value;
        document.getElementsByClassName('yourName')[0].innerText = `Your name is: ${userName}`;
}

function enter(){
    if(event.key === 'Enter'){
        submit();
    }
}