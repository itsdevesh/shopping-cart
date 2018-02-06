var BANANA_PRICE = 1.00;
var APPLE_PRICE = 2.00;
var ORANGE_PRICE = 3.00;
var SHIPPING_COST = 4.00;
var TAX_RATE = .05;

var AVAILABLE = "available";
var OUT_OF_STOCK = "outofstock";
var LIMITED_SUPPLY = "limitedsupply";

var availableBananas = 20;
var availableApples = 20;
var availableOranges = 3;

var selectedBananas = 1;
var selectedApples = 1;
var selectedOranges = 1;

var subtotalBananas = calculateProdTotal(BANANA_PRICE, selectedBananas);
var subtotalApples = calculateProdTotal(APPLE_PRICE, selectedApples);
var subtotalOranges = calculateProdTotal(ORANGE_PRICE, selectedOranges);

var subtotal = 0;
var shipping = 0;
var taxes = 0;
var total = 0;

$(document).ready(function () {

    // go ahead and get the most-accessed elements once and store them in a variable,
    // so we don't have to make jQuery search for the elements multiple times
    // otherwise this become extraordinarily unperformant
    var prodPriceBananas = $('#bananas .prodPrice');
    var prodPriceApples = $('#apples .prodPrice');
    var prodPriceOranges = $('#oranges .prodPrice');
    var quantityBananas = $('#bananas .qty');
    var quantityApples = $('#apples .qty');
    var quantityOranges = $('#oranges .qty');

    // initialize product pricing on page
    prodPriceBananas.text("$" + BANANA_PRICE.toFixed(2));
    prodPriceApples.text("$" + APPLE_PRICE.toFixed(2));
    prodPriceOranges.text("$" + ORANGE_PRICE.toFixed(2));

    // initialize shopping cart with one of each
    quantityBananas.val(selectedBananas);
    quantityApples.val(selectedApples);
    quantityOranges.val(selectedOranges);

    // dont let user select more than is available
    quantityBananas.prop("max", availableBananas);
    quantityApples.prop("max", availableApples);
    quantityOranges.prop("max", availableOranges);

    // calculate initial totals
    updateProdTotal("#bananas", BANANA_PRICE);
    updateProdTotal("#apples", APPLE_PRICE);
    updateProdTotal("#oranges", ORANGE_PRICE);
    updateTotals();

    // calculate at each update
    quantityBananas.on('change', function () {
        selectedBananas = quantityBananas.val();
        subtotalBananas = calculateProdTotal(BANANA_PRICE, selectedBananas);
        updateProdTotal("#bananas", subtotalBananas);
        updateProdAvailability("#bananas", selectedBananas, availableBananas);
        updateTotals();
    })
    quantityApples.on('change', function() {
        selectedApples = quantityApples.val();
        subtotalApples = calculateProdTotal(APPLE_PRICE, selectedApples);
        updateProdTotal("#apples", subtotalApples);
        updateProdAvailability("#apples", selectedApples, availableApples);
        updateTotals();
    })
    quantityOranges.on('change', function() {
        selectedOranges = quantityOranges.val();
        subtotalOranges = calculateProdTotal(ORANGE_PRICE, selectedOranges);
        updateProdTotal("#oranges", subtotalOranges);
        updateProdAvailability("#oranges", selectedOranges, availableOranges);
        updateTotals();
    })
});

function updateProdTotal(id, prodTotal) {
    $(id + ' > .prodTotal').text("$" + prodTotal.toFixed(2));
}

function updateProdAvailabilityLabel(id, label, availability) {
    const stockStatus = $(id + ' > .info > .stockStatus');
    stockStatus.text(label);

    if (availability == LIMITED_SUPPLY) {
        stockStatus.addClass(LIMITED_SUPPLY)
                   .removeClass(AVAILABLE)
                   .removeClass(OUT_OF_STOCK);

    } else if (availability == OUT_OF_STOCK) {
        stockStatus.addClass(OUT_OF_STOCK)
                   .removeClass(AVAILABLE)
                   .removeClass(LIMITED_SUPPLY);

    } else if (availability == AVAILABLE) {
        stockStatus.addClass(AVAILABLE)
                   .removeClass(OUT_OF_STOCK)
                   .removeClass(LIMITED_SUPPLY);
    }
}

function updateTotals() {
    var prodTotals = [subtotalBananas, subtotalApples, subtotalOranges];
    subtotal = calculateSubtotal(prodTotals);
    shipping = calculateShipping();
    taxes = calculateTaxes(subtotal, TAX_RATE);
    total = calculateTotal(subtotal, shipping, taxes);
    $('.subtotal').text("$" + subtotal.toFixed(2));
    $('.shipping').text("$" + shipping.toFixed(2));
    $('.taxes').text("$" + taxes.toFixed(2));
    $('.total').text("$" + total.toFixed(2));
}

function calculateShipping () {
    return SHIPPING_COST;
}
