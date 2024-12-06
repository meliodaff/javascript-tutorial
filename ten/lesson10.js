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

function toggle(){
    const btnGaming = document.getElementsByClassName('is-toggle')[0];

    if(btnGaming.classList.contains('is-toggled')){
        btnGaming.classList.remove('is-toggled');
    }
    else{
        btnGaming.classList.add('is-toggled');
    }
}