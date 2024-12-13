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

setInterval(function(){
    if(document.title === 'App'){
        document.title = '(2) New Messages'
    }
    else{
        document.title = 'App'
    }
}, 1000)


