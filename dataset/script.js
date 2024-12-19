const products = [{
    name: 'Headphones'
}, {
    name: 'Keyboard'
}, {
    name: 'Monitor'
}]

let productsHTML = '';
products.forEach((product, index) => {
    productsHTML += `
    <div> 
        <p>${index + 1}. Product Name: ${product.name}</p>
        <select class="js-quantity-selector-${product.name}">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
    </select>
    <button class="add-to-cart-button" data-product-name="${product.name}">Add to cart</button>
    </div>
    `;
})


document.querySelector('.container').innerHTML = productsHTML;
let quantitySelector = document.querySelector(`.js-quantity-selector-${products.name}`);
let quantity = +quantitySelector.value;

document.querySelectorAll('.add-to-cart-button').forEach((button) =>{
    button.addEventListener('click', () => {
            let productQuantity = button.dataset.productName;
            let totalQuantity = quantity + productQuantity;
            console.log(totalQuantity);
    })
})