/*
let hour = '5';
if (hour >= 13 && hour <= 17) {
    goodAfternoon('Bialen');
}
else if (hour >= 6 && hour <= 12) {
    goodMorning('gm');
}
else{
    goodNight('');
}
function goodAfternoon(name){
    console.log(`Good afternoon, ${name}`);
}
function goodMorning(name){
    console.log(`Good morning, ${name}`);
}
function goodNight(name){
    console.log(`Good night, ${name}`);
}

let isHoliday = false;
let age = 7;
let discounted = checksIfHoliday(!isHoliday) && getDiscount(age) ? 'Discounted' : 'Not Discounted'; // kung si isHoliday is false, then it will return true
console.log(discounted);

function getDiscount(age){
    let result = age <= 6 ? true : false;
    return result;
}

function checksIfHoliday(isHoliday){
    let result = isHoliday == true ? true : false;
    return result;
} */


let randomNumber = Math.random();
let result = randomNumber > .5 ? 'Heads' : 'Tails';
let myGuess = 'Tails';

console.log(`Your guess: ${myGuess}`);
    console.log(`Coin flipped: ${result}`);

    let resultOfTheGame = result === myGuess ? 'You win' : 'You lose';
    console.log(resultOfTheGame);
      