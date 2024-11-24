function greet(name) {
  !name ?  console.log(`Hi there`) : console.log(`Hello, ${name}`);
  
}

function convertToFahrenheit(celcius) {
  let fahrenheit = ((celcius * 9 / 5) + 32) + 'F';
  return fahrenheit;
}

function convertToCelcius(fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5 / 9) + 'C';
  return celcius
}

function convertTemperature(degrees, unit) {
  if (unit == 'C'){
    return convertToFahrenheit(degrees);
  }
  else if (unit == 'F'){
    return convertToCelcius(degrees);
  }
}

function convertLength(length, from, to) {
  if (from === 'miles' && to === 'km'){
    let km = length * 1.6 + ' km';
    return km;
  } 
  else if (from === 'km' && to === 'km'){
      return length;
    }
  else if (from === 'km' && to === 'miles'){
    let mile = length / 1.6 + ' miles';
    return mile;
  }
  else if (from === 'miles' && to === 'ft'){
    let ft = length * 5280 + ' ft';
    return ft;
  }
  else if (from === 'km' && to === 'ft'){
    let ft = length * 3281 + ' ft';
    return ft;
  }
  else {
    return `Invalid unit : ${from} to ${to}`;
  }
}

const person = {firstName: 'Jay', 
              lastName: 'Bialen', 
              age: '20',
              fullName: function(){
                return this.firstName + ' ' + this.lastName.toUpperCase();
              }
            };
const person1 = {firstName: 'Nea', 
              lastName: 'De Veyra', 
              age: '19',
              fullName: function(){
                return this.firstName + ' ' + person.lastName;
              }
            };
const person2 = {firstName: 'Nea', 
              lastName: 'De Veyra', 
              age: '19',
             };
            
let myArray = Object.values(person);
console.log(myArray[0]);