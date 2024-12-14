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

document.querySelector('.start').addEventListener('click', () => {
    const button = document.getElementsByClassName('test-button')[0]
    button.innerText = 'Loading...'
    button.disabled = true;
    setTimeout(function () {
        button.innerText = 'Finished!'
        button.disabled = false;
    }, 1000)
} )
let message = 2;

document.querySelector('.add-message').addEventListener('click', () => {
    if(message >= 0){
        displayMessages();
        message++;
    }
})

document.querySelector('.remove-message').addEventListener('click', () => {
    if(message > 0){
        message--;
        if(message === 0){
            clearInterval(intervalID);
            document.title = 'App'
        }
    }
})





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



let intervalID = 0;

displayMessages();



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

const oneLine = (param, param1) => 'dsadsa';
console.log(oneLine('p', 'p'));


let object = {
    method: () => {
        console.log('method');
    },
    name: 'Jay',
    age: 20
}



