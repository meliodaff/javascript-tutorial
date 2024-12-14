const multiply = (num1, num2) => num1 * num2; // more compact and cleaner if its just one liner code


console.log(multiply(2, 3));
console.log(multiply(7, 10));


let array = [-2, 3, -5, 7, 10]

const countPositive = (array) => {
    let positive = 0;
    array.forEach(value => {
        if(value >= 0){
            positive++;
        }
    });
    return positive;
}

const addNum = (array, num) => array.map((value) => value + num);


const removeEgg = (foods) => {
    let two = 2;
    return foods.filter((value) => {
        if(value === 'egg' && two > 0){
            two--;
            return false;
        }
        else{
            return true;
        }
    })
}

let foods = ['egg', 'apple', 'egg', 'egg', 'ham']
console.log(removeEgg(foods));