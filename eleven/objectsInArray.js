
let productsArray = [{
    name: 'Milk',
    price: 20
}, {
    name: 'Cookie',
    price: 10
}
];

/*
for (let i = 0; i < productsArray.length; i++) {
    productsArray[i].supplier = 'Nestle';
}


addProduct('Spoon', 5);

addProduct('Fork')
addPrice(100, 1);

productsArray[2].supplier = 'Nestle';



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
*/
   
let displayProducts = () => {
    for (let i = 0; i < productsArray.length; i++) {
        console.log(productsArray[i]);    
    }
}

let greetings = (name) => {
    console.log(`Hello, ${name}`);
}

let object = {
    name: 'Jay',
    displayName: () => {
        console.log(`Hello, ${object.name}`);
    }
}


setTimeout(function (){
    console.log('dsads');
},   3000);


//nothing
//nothing1
//nothing2
//nothing3
//nothing4, will try to commit and push using github for desktop application
//another one