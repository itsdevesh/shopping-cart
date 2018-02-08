const BANANA_PRICE = 1.00;
const APPLE_PRICE = 2.00;
const ORANGE_PRICE = 3.00;
const SHIPPING_COST = 4.00;
const TAX_RATE = .05;

const OK = "ok";
const WARNING = "warning";
const ALERT = "alert";

const availableBananas = 20;
const availableApples = 20;
const availableOranges = 3;

var selectedBananas = 1;
var selectedApples = 1;
var selectedOranges = 1;

var subtotalBananas = calculateProductTotal(BANANA_PRICE, selectedBananas);
var subtotalApples = calculateProductTotal(APPLE_PRICE, selectedApples);
var subtotalOranges = calculateProductTotal(ORANGE_PRICE, selectedOranges);

var subtotal = 0;
var shipping = 0;
var taxes = 0;
var total = 0;


// go ahead and get the most-accessed elements once and store them in a variable,
// so we don't have to make jQuery search for the elements multiple times
// otherwise this become extraordinarily unperformant
const priceTagBananasElement = document.querySelector('#bananas .prodPrice');
const priceTagApplesElement = document.querySelector('#apples .prodPrice');
const priceTagOrangesElement = document.querySelector('#oranges .prodPrice');
const quantityBananasElement = document.querySelector('#bananas .qty');
const quantityApplesElement = document.querySelector('#apples .qty');
const quantityOrangesElement = document.querySelector('#oranges .qty');
const totalBananasElement = document.querySelector('#bananas > .prodTotal');
const totalApplesElement = document.querySelector('#apples > .prodTotal');
const totalOrangesElement = document.querySelector('#oranges > .prodTotal');
const availabilityBananasElement = document.querySelector('#bananas > .info > .stockStatus');
const availabilityApplesElement = document.querySelector('#apples > .info > .stockStatus');
const availabilityOrangesElement = document.querySelector('#oranges > .info > .stockStatus');
const subtotalElement = document.querySelector('.subtotal');
const shippingElement = document.querySelector('.shipping');
const taxesElement = document.querySelector('.taxes');
const totalElement = document.querySelector('.total');

// initialize product pricing on page
priceTagBananasElement.innerText = "$" + BANANA_PRICE.toFixed(2);
priceTagApplesElement.innerText = "$" + APPLE_PRICE.toFixed(2);
priceTagOrangesElement.innerText = "$" + ORANGE_PRICE.toFixed(2);

// initialize shopping cart with one of each
quantityBananasElement.value = selectedBananas;
quantityApplesElement.value = selectedApples;
quantityOrangesElement.value = selectedOranges;

// dont let user select more than is available
quantityBananasElement.max = availableBananas;
quantityApplesElement.max = availableApples;
quantityOrangesElement.max = availableOranges;

// calculate initial totals
updateProductTotal(totalBananasElement, BANANA_PRICE);
updateProductTotal(totalApplesElement, APPLE_PRICE);
updateProductTotal(totalOrangesElement, ORANGE_PRICE);
updateTotals(subtotalElement, shippingElement, taxesElement, totalElement);

// calculate at each update
quantityBananasElement.onchange = function () {
    selectedBananas = quantityBananasElement.value;
    subtotalBananas = calculateProductTotal(BANANA_PRICE, selectedBananas);
    updateProductTotal(totalBananasElement, subtotalBananas);
    updateAvailabilityLabel(availabilityBananasElement, selectedBananas, availableBananas);
    updateTotals(subtotalElement, shippingElement, taxesElement, totalElement);
}
quantityApplesElement.onchange = function() {
    selectedApples = quantityApplesElement.value;
    subtotalApples = calculateProductTotal(APPLE_PRICE, selectedApples);
    updateProductTotal(totalApplesElement, subtotalApples);
    updateAvailabilityLabel(availabilityApplesElement, selectedApples, availableApples);
    updateTotals(subtotalElement, shippingElement, taxesElement, totalElement);
}
quantityOrangesElement.onchange = function() {
    selectedOranges = quantityOrangesElement.value;
    subtotalOranges = calculateProductTotal(ORANGE_PRICE, selectedOranges);
    updateProductTotal(totalOrangesElement, subtotalOranges);
    updateAvailabilityLabel(availabilityOrangesElement, selectedOranges, availableOranges);
    updateTotals(subtotalElement, shippingElement, taxesElement, totalElement);
}

function updateProductTotal(element, amount) {
    element.innerText = "$" + amount.toFixed(2);
}

function updateProdAvailabilityLabel(element, label, severity) {
    element.innerText = label;

    if (severity === ALERT) {
        element.classList.add(ALERT);
        element.classList.remove(OK);
        element.classList.remove(WARNING);

    } else if (severity === WARNING) {
        element.classList.add(WARNING);
        element.classList.remove(OK);
        element.classList.remove(ALERT);

    } else {
        element.classList.add(OK);
        element.classList.remove(WARNING);
        element.classList.remove(ALERT);
    }
}

function updateTotals(subtotalElement, shippingElement, taxesElement, totalElement) {
    subtotal = calculateCartSubtotal(subtotalBananas, subtotalApples, subtotalOranges);
    shipping = calculateShipping();
    taxes = calculateTaxes(subtotal, TAX_RATE);
    total = calculateTotal(subtotal, shipping, taxes);
    subtotalElement.innerText = "$" + subtotal.toFixed(2);
    shippingElement.innerText = "$" + shipping.toFixed(2);
    taxesElement.innerText = "$" + taxes.toFixed(2);
    totalElement.innerText = "$" + total.toFixed(2);
}

function calculateShipping () {
    return SHIPPING_COST;
}
