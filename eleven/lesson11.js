let list = /*JSON.parse(localStorage.getItem('list')) ||*/ [];

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

function addNum(array, num){
    let myArray = [];
    for (let index = 0; index < array.length; index++) {
        myArray[index] = array[index] + num;
    }
    return myArray;
}
let numbers = [1, 2, 3];
console.log(addNum(numbers, 3));


function addArrays(array1, array2){
    let temp = [];
    for (let index = 0; index < array1.length; index++) {
        temp[index] = array1[index] + array2[index];
    }
    return temp;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

console.log(addArrays(array1, array2));

function countPositive(nums){
    let countPositive = 0;
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] < 0){
            countPositive++;;
        }
    }
    return countPositive;
}

let array3 = [-2, 3, -5, 7, 10, -1, -4, 11, 42, 15, 32];

let count = countPositive(array3);
console.log(`Positive count: ${count}`);

let array4 = [12, 90, 23, 45, 56, 67, 78, -1];

function minMax(array){

    if(array.length === 0){
        return `Array is empty`;
    }
    let min = array[0];
    let max = array[0];

    for(let i = 1; i < array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
        if(max < array[i]){
            max = array[i];
        }
    }
    let result = `Min: ${min}, Max: ${max}`;
    return result; /*
    ^^ thanks chat
    ||
}
console.log(minMax(array4));


this might not be the best 
    ||
    vv

let min = '';
    let max = '';
    let i = 0, j = 1;

    while (i < array.length && j < array.length - 1){
        if(array[i] > array[j]){
            max = array[i];
            j++;
        }
        else{
            max = array[j];
            i++;
        }
    }

    i = 0, j = 1;
    while (i < array.length && j < array.length - 1){
        if(array[i] < array[j]){
            min = array[i];
            j++;
        }
        else{
            min = array[j];
            i++;
        }
    }
    let result = `Min: ${min}, Max: ${max}`;
    return result;
    
    
*/

let int = 23.5;
let bigInt = -23n;
console.log(typeof int);
console.log(`big int:  ${typeof bigInt}`);
console.log(bigInt);

//console.log(Number.isSafeInteger(-12345678987654321));