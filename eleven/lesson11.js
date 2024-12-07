let list = JSON.parse(localStorage.getItem('list')) || [];

function addToDo(){
    let inputElement = document.getElementsByClassName('js-name-input')[0];
    list.push(inputElement.value);
    localStorage.setItem('list', JSON.stringify(list));
    renderToDoList();
    inputElement.value = ''; 
}



function renderToDoList(){
    let toDoListHTML = '';
    for (let index = 0; index < list.length; index++) {
        let temp = list[index];
        toDoListHTML = `${toDoListHTML} <p>${temp}</p>`;
}
    document.getElementsByClassName('demo')[0].innerHTML = toDoListHTML;
}



function enter(event){
    if(event.key === 'Enter'){
        addToDo();
    }
}

/*
const nums = [10, 20, 30];
nums[nums.length - 1] = 99;
console.log(nums[2]);

function getLastValue(array){
    return array[array.length - 1];
}
console.log(getLastValue([1, 2, 3, 4, 5, 3, 1, 2]));

function arraySwap(array){
    let temp = array[0];
    let last = array[array.length - 1];
    array[0] = last;
    array[array.length - 1] = temp;
    return array;
    
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));

for(let i = 0; i <= 10; i += 2){
    console.log(i);
}

for (let index = 5; index >= 0; index--) {
    console.log(index);
}

let index = 0;
console.log('using while');
while(index <= 10){
    console.log(index);
    index++
}

let index1 = 5;
while(index1 >= 0){
    console.log(index1);
    index1--;
}
*/

let num = [-2, -1, 0, 99];
let total = [];
for (let index = 0; index < num.length; index++) {
    let temp = num[index] + 1;
    total.push(temp);
}

function addOne(array){
    let myArray = [];
    for (let index = 0; index < array.length; index++) {
        let temp = array[index] + 1;
        myArray.push(temp);
    }
    return myArray;
}


console.log(addOne(num));