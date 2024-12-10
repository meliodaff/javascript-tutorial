/*
let productsArray = [{
    name: 'Milk',
    price: 20
}, {
    name: 'Cookie',
    price: 10
}
];


for (let i = 0; i < productsArray.length; i++) {
    productsArray[i].supplier = 'Nestle';
}


addProduct('Spoon', 5);

addProduct('Fork')
addPrice(100, 1);

productsArray[2].supplier = 'Nestle';

displayProducts();


function addProduct(productName, productPrice){
    productsArray.push({
        name: productName,
        price: productPrice
    });
}
function addProduct(name){
    productsArray.push({
        name
    })
}

function addPrice(price, index){
    productsArray[index].price = price;
}
   
function displayProducts(){
    for (let i = 0; i < productsArray.length; i++) {
        console.log(productsArray[i]);    
    }
}
*/

const [firstValue, secondValue] = [1, 2, 3];
console.log(firstValue[2]);