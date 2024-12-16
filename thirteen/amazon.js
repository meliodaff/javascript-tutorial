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
        starts: 4,
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
            <select class="js-quantity-selector" data-testid="quantity-selector">
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

