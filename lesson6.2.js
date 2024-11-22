let hour = '5';
let name = 'Jay'

if (hour >= 13 && hour <= 17) {
    console.log(`Good afternoon, ${name}`);
}
else if (hour >= 6 && hour <= 12) {
    console.log(`Good morning, ${name}`);
}
else{
    console.log(`Goodnight, ${name}`);
}

console.log(add(4,5));

function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}