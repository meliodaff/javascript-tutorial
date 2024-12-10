
const arrayOfStrings = ['hello', 'world', 'search', 'good', 'search'];
function findIndex(array, word){
    for (let i = 0; i < array.length; i++) {

        if(array[i] === word){
            return i;
            break;
        }
    }
    return -1;
}


let foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
function removeEgg(foods){
    let result = [];
    let reversedFoods = foods.slice();
    reversedFoods.reverse();
    
    for (let i = 0, j = 0, k = 0; i < foods.length; i++) {
        if(reversedFoods[i] === 'egg' && k < 2){
            k++;
            continue;
        }
        result[j] = reversedFoods[i];
        j++;
    }
    console.log(`This is the original array: ${foods}
This is the sliced array: ${reversedFoods}`);
    return result.reverse();
}

function fizzBuzz(number){
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
            continue;
        }
        else if(i % 3 === 0){
            console.log('Fizz');
            continue;
        }
        else if (i % 5 === 0){
            console.log('Buzz');
            continue
        }
        
        console.log(i);
    }
}

let colors = ['green', 'green', 'green', 'red'];

// i forgot that theres a method includes in array, thanks chat
function unique(array){
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if(!uniqueArray.includes(array[i])){
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

console.log(unique(colors));




