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