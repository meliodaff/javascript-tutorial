/*
function subscribe(){
    let btn = document.getElementsByClassName('js-subscribe-button')[0];

    if(btn.innerText == 'Subscribe'){
        btn.innerText = 'Subscribed';
        btn.classList.add('subscribed-button');
    }
    else{
        btn.innerText = 'Subscribe';
        btn.classList.remove('subscribed-button')
    }
}

let testButton = document.getElementsByClassName('js-button')[0];

if(testButton.classList.contains('js-button')){
    console.log(true);
}
else{
    console.log(false);
}
*/

const btnGaming = document.getElementsByClassName('is-toggle')[0];
const btnGaming1 = document.getElementsByClassName('is-toggle')[1];
const btnGaming2 = document.getElementsByClassName('is-toggle')[2];

function toggle(){
    if(!btnGaming.classList.contains('is-toggled')){
        btnGaming.classList.add('is-toggled');
        btnGaming1.classList.remove('is-toggled');
        btnGaming2.classList.remove('is-toggled');
    }
    else{
        btnGaming.classList.remove('is-toggled');
    }
}

function toggle1(){
    if(!btnGaming1.classList.contains('is-toggled')){
        btnGaming1.classList.add('is-toggled');
        btnGaming.classList.remove('is-toggled');
        btnGaming2.classList.remove('is-toggled');
    }
    else{
        btnGaming1.classList.remove('is-toggled');
    }
}

function toggle2(){
    if(!btnGaming2.classList.contains('is-toggled')){
        btnGaming2.classList.add('is-toggled');
        btnGaming1.classList.remove('is-toggled');
        btnGaming.classList.remove('is-toggled');
    }
    else{
        btnGaming2.classList.remove('is-toggled');
    }
}
// i think these functions from toggle - toggle2 to can be better.