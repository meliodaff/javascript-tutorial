/*
// objects inside an array
const products = [
  {
     productImage: 'Socks.jpg',
     productName: 'Black and gray socks',
     rating: {
        stars: 4.5,
        count: 87
     },
     priceCents: 1090
    },
    {
     productImage: 'Basketball.jpg',
     productName: 'Intermediate size basketball',
     rating: {
        stars: 4,
        count: 127
     },
     priceCents: 2095
    },
    {
     productImage: 'Tshirt.jpg',
     productName: 'Adults plain tshirt',
     rating: {
        stars: 4.5,
        count: 56
     },
     priceCents: 799
    },
    {
      productImage: 'Soccer.jpg',
      productName: 'Soccer ball',
      rating: {
        stars: 4,
        count: 30
      },
      priceCents: 1999
    }
  ]

let productsHTML = '';
products.forEach((value, index) => {
    productsHTML += `
    <div class="js-product-container product-container" data-product-id="e43638ce-6aa0-4b85-b27f-e1d07eb678c6" data-testid="product-container-e43638ce-6aa0-4b85-b27f-e1d07eb678c6">
          <div class="product-image-container">
            <img class="js-product-image product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" data-testid="product-image">
          </div>

          <div class="product-name limit-to-2-lines">
            ${value.productName}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-45.png">
            <div class="product-rating-count link-primary">
              ${value.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(value.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector"
            >
              <option selected="" value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          

          <div class="product-spacer"></div>

          <div class="js-added-to-cart-message added-to-cart-message" data-testid="added-to-cart-message">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="js-add-to-cart-button
            add-to-cart-button button-primary" data-testid="add-to-cart-button">
            Add to Cart
          </button>
        </div>
        <hr>
     `
     console.table(value);
});

document.querySelector('.demo').innerHTML = productsHTML;

let array = [
  {
    name: 'jay',
    hobbies: ['coding', 'playing', 'jogging']
  }, {
    name: 'nea',
    hobbies: {
      computerGames: 'tong its',
      outdoorGames: 'badminton'
    }
  }
]

console.table(array[0]);
console.table(array[1]);
// if you want to store datas in a specific and detailed way, use objects
// otherwise arrays (but depends on the use)

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button);  
  })
})

*/

const products = [{
  id: '1',
  image: 'https://www.jbl.com.ph/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4cd4cad7/JBL_TOUR_ONE_BLK_Hero.jpg?sw=270&sh=330&sm=fit&sfrm=png',
  name: 'Wireless headphones',
  rating: {
    star: 4.5,
    count: 40
  },
  priceCents: 59999
}, {
  id: '2',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0snusVOiUuH_93wV5xXCsGV2t9MGOVoAFog&s',
  name: 'Mechanical keyboard',
  rating: {
    star: 4,
    count: 231
  },
  priceCents: 199999
}, {
  id: '3',
  image: 'https://www.shutterstock.com/image-illustration/computer-monitor-side-isolated-on-260nw-2338153129.jpg',
  name: 'Wide monitor',
  rating: {
    star: 5,
    count: 141
  },
  priceCents: 499999
}]

const cart = [];

let productsHTML = '';
products.forEach((product, index) => {
  productsHTML = productsHTML + `
  <div class="container"> 
  ${index + 1}.
    <img src="${product.image}"> 
    <div>${product.name} </div>
    <div>Star: ${product.rating.star} </div>
    <div>Count: ${product.rating.count} </div>
    <div>$${(product.priceCents / 100).toFixed(2)} </div>
    <p class="added js-added-to-cart-${product.id}">Added</p>
    <select class="js-quantity-select-${product.id}">
      <option selected>1</option> 
      <option value="2">2</option> 
      <option value="3">3</option> 
      <option value="4">4</option> 
      <option value="5">5</option> 
      <option value="6">6</option> 
      <option value="7">7</option> 
      <option value="8">8</option> 
      <option value="9">9</option> 
    </select>
    <button data-product-id="${product.id}" data-product-name="${product.name}" class="add-to-cart-btn">Add to cart</button>
  </div>
  <br>
  `
})

document.querySelector('.products-grid').innerHTML = `${productsHTML}`;

const visible = () => document.querySelector('.added').classList.add('added-visible')

  document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {

      const productId = button.dataset.productId;
      const productName = button.dataset.productName;
      const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`) // all i know is that it stores a value with unique id in the variable
      addedMessage.classList.add('added-visible');
      
      setTimeout(() => {
        addedMessage.classList.remove('added-visible')
      }, 1000)
      
      let matchingItem;
      cart.forEach((item) => {
        if(item.productName === productName){
          matchingItem = item;
        }
      })
      const quantitySelector = document.querySelector(`.js-quantity-select-${productId}`);
      const quantity = +(quantitySelector.value);

      if(matchingItem){
        matchingItem.quantity = matchingItem.quantity + quantity;
      }
      else{
        cart.push({
          productName: productName,
          quantity: quantity
        })
      }
      let totalQuantity = 0;

      cart.forEach((item) => {
      totalQuantity += item.quantity;
})
  document.querySelector('.cart-quantity').innerHTML = `Cart Quantity: ${totalQuantity}`;

    })
  })




