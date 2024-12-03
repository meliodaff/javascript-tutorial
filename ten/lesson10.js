let js_btn = document.querySelector('.test-button');
let result = js_btn ? js_btn.classList.contains('test-button') : false;
console.log(result);

function toggle(selector){
    let btn = document.getElementsByClassName(selector)[0];

    if (!btn.classList.contains('is-toggled')) {
        btn.classList.add('is-toggled');
    }
    else {
        btn.classList.remove('is-toggled');
    }
}


//study this more later
