import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
let productsHTML = ''

products.forEach((product) =>{
    productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="name-logo">
          <div>
          <img class="nft-profile"
            src="images/icons/nft profile.jpeg">
          </div>
          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
          </div>

          

          <div class="product-price">
            Fiyat : ${product.priceCents} Yeşil Mil
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id ="${product.id}">
            Sepete Ekle
          </button>
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;


function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach( (cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector(".js-cart-quantity")
        .innerHTML = `(${cartQuantity})`;
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
        });
    });