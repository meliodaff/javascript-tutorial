//12.A
const add = () => {
    console.log(2 + 3);
}

add();
add();

//12.VB
const runTwice = (fun) => {
    console.log(fun);
    console.log(fun);
}

runTwice('12b');

//12.C
function start(){
    const button = document.getElementsByClassName('test-button')[0]
    button.innerText = 'Loading...'
    setTimeout(function () {
        button.innerText = 'Finished!'
    }, 1000)
}

//12.E
let timeoutID;
function addToCart(){
    const demo = document.getElementsByClassName('demo')[0]
    demo.innerHTML = 'Added';
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function() {
        demo.innerHTML = '';
    }, 2000)
}
let message = 2;



let intervalID = 0;

displayMessages();

function addMessage(){
    if(message >= 0){
        displayMessages();
        message++;
    }
}

function removeMessage(){
    if(message > 0){
        message--;
        if(message === 0){
            clearInterval(intervalID);
            document.title = 'App'
        }
    }
}

function displayMessages(){
    intervalID = setInterval(() => {
        if(document.title === 'App'){
            document.title = `(${message}) New Messages`
        }
        else{
            document.title = 'App'
        }
    }, 1000)
}

