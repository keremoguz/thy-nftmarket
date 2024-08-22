import {cart} from '../../data/cart.js'
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js'


export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
    });
    // const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    // const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = shippingPriceCents + productPriceCents;
   

    const paymentSummaryHTML = `
          <div class="payment-summary-title">
            Ödeme Özeti
          </div>

          <div class="payment-summary-row">
            <div>NFT'ler (3):</div>
            <div class="payment-summary-money">${(productPriceCents)} YM</div>
          </div>

          <div class="payment-summary-row">
            <div> Komisyon &amp; İşlem Ücreti:</div>
            <div class="payment-summary-money">${shippingPriceCents} YM</div>
          </div>
          
          <div class="payment-summary-row total-row">
            <div>Total:</div>
            <div class="payment-summary-money">${(totalCents)} Yeşil Mil</div>
          </div>

          <button class="place-order-button button-primary js-place-order-button">
            Ödeme adımına geç
          </button>
    `;
    document.querySelector('.js-payment-summary')
        .innerHTML = paymentSummaryHTML;

    const orderButton = document.querySelector('.js-place-order-button');
    orderButton.addEventListener('click', () => {
        let isChecked = false;
        const additionalContent = `
            <div class = "kartlarım-title"> Kartlarım : </div>
            <div class = "kart-option">
              <input type = "radio" ${isChecked ? 'checked' : ''} class = "kart-option-button js-radio-button" >
              <img src="images/icons/green-miles.jpg" class = "green-miles-icon">
            </div>    
        `;
        document.querySelector('.js-payment-summary').innerHTML += additionalContent;
        const radioButton = document.querySelector('.js-radio-button');
        radioButton.addEventListener('click', () => {
        isChecked = true;
        document.querySelector('.js-payment-summary').innerHTML = `
            <div class="payment-summary-title">
            Ödeme Özeti
          </div>

          <div class="payment-summary-row">
            <div>NFT'ler (3):</div>
            <div class="payment-summary-money">${(productPriceCents)} YM</div>
          </div>

          <div class="payment-summary-row">
            <div> Komisyon &amp; İşlem Ücreti:</div>
            <div class="payment-summary-money">${shippingPriceCents} YM</div>
          </div>
           <div class="payment-summary-row">
          </div>
          
          <div class="payment-summary-row total-row">
            <div>Total:</div>
            <div class="payment-summary-money">${(totalCents)} Yeşil Mil</div>
          </div>

            <button class="place-order-button button-primary js-place-order-button">
              Ödeme adımına geç
            </button>
            <div class = "kartlarım-title"> Kartlarım : </div>
            <div class = "kart-option">
              <input type = "radio" ${isChecked ? 'checked' : ''} class = "kart-option-button js-radio-button" >
              <img src="images/icons/green-miles.jpg" class = "green-miles-icon">
            </div> 
            <div class = "bakiye-payment-screen">Bakiyeniz : 90.000 Yeşil Mil </div>
            <button class = "satın-al-button"> Satın Al </button>
          `;
        });
        
    });
    

};

// tax vs. için fiyat bilgisi gerekirse bakarız
/*
<div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${(0)}</div>
          </div>
 */