
function subscribe(){
    let btnSubscribe = document.getElementsByClassName('subscribe-btn')[0] || document.getElementsByClassName('is-subscribed')[0];

    //btnSubscribe.innerHTML = btnSubscribe.innerText === 'Subscribe' ? 'Subscribed' : 'Subscribe'
    
    if(btnSubscribe.innerText === 'Subscribe'){
        btnSubscribe.innerText = 'Subscribed';
        btnSubscribe.classList.add('is-subscribed');
        btnSubscribe.classList.remove('subscribe-btn');
    }
    else{
        btnSubscribe.innerText = 'Subscribe';
        btnSubscribe.classList.add('subscribe-btn'); // Add the default class
        btnSubscribe.classList.remove('is-subscribed');
    }
}

function calculate(){
    let total = 0;
    let userInput = document.getElementsByClassName('userInput')[0].value * 100;

    if (userInput == ''){
        alert('No inputted value');
        return;
    }
    else if (userInput < 100){
        alert('watdafuck')
        return;
    }
    else if(userInput < 4000){
       total = userInput + 1000;
    }
    else{
        total = userInput;
    }

    document.getElementsByClassName('total')[0].innerHTML = `Total: $${total / 100}`;
    
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
    event.key === 'Enter' ? submit() : null;
}

let text = 'Hello, world'; 
let myArray = text.split('');
myArray.push('jay');
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    
}
console.log(myArray.length);


let word = 'Hello';
let wordArray = Array.from(word);
console.log(wordArray);

let arr = ['hello', 'world'];
console.log(arr);
let arrJoin = arr.reverse().join([' ']);
console.log(arrJoin);