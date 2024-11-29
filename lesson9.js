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


name = 'fa';
var name;
console.log(name);