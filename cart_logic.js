/* 1. Complete the function below to calculate product totals 
      Input: price (double) => price of the product in dollars (i.e., 1.00 for $1.00)
      Input: quantity (integer) => number of items selected in the cart
      Output: productTotal (double) = subtotal for that product in dollars
*/
function calculateProductTotal (price, quantity) {
    return 0; // replace this!
}

/* 2. Complete the function below to calculate gross cart subtotals
      use the array of product line total argument
      Input: totalBananas (double) => dollar subtotal for bananas
      Input: totalApples (double) => dollar subtotal for apples
      Input: totalOranges (double) => dollar subtotal for oranges
      Output: cartSubtotal (double) => subtotal for the shopping cart in dollars, gross before taxes and shipping
*/
function calculateCartSubtotal (totalBananas, totalApples, totalOranges) {
    return 0; // replace this!
}

/* 3. Complete the function below to calculate added taxes
      Input: cartSubtotal (double) => gross before tax and shipping
      Input: taxRate (double) => i.e., 0.10 for 10%
      Output: addedTax (double) => added taxes for the cart 
*/
function calculateTaxes(cartSubtotal, taxRate) {
    return 0; // replace this!
}

/* 4. Complete the function below to calculate total
      Input: cartSubtotal (double) => gross before tax and shipping
      Input: addedShipping (double) => constant $4.00 surcharge
      Input: addedTax (double) => added tax for the cart
      Output: cartTotal = total cart amount inclusive of shipping and taxes (double)
*/
function calculateTotal (cartSubtotal, addedShipping, addedTax) {
    return 0; // replace this!
}

/* 5. 
      Our grocery store has limited availability of each product.

      We do not want to dissapoint customers by letting them add products to their
      shopping cart that are no longer available in inventory. 

      You may notice when you first arrive to the shopping cart, next to each product 
      there is a label with a green message that says "IN STOCK".

      What we want this function to do is update that message as users add items to the cart,
      depending on how much availability there is left. 
      
      This function is called each time a user adds or removes items from the shopping cart.
      This lets us keep the user updated even before they submit an order.

      Input: labelElement (object) => DOM element containing the label. If you are curious, these 
                are the elements using .stockStatus class in the HTML.
      Input: amountSelected (integer) => number of items currently in the shopping cart for this product
      Input: amountAvailable (integer) => number of items currently in stock for this product in the grocery

      NOTE: As opposed to the other functions we have worked on in the shopping cart, you are not expected 
            to return any value in this function. Therefore there is no outputs. 

      To update the labels, you need to calling the following function, which has already been built:

        updateProdAvailabilityLabel(labelElement, message, severity);

      where

        labelElement (object) => pass along the same labelElement argument

        message (string) => whatever message you want to pass along. The default is "IN STOCK"

        severity => you can define severity of your inventory situtation to make the message more
            noticeable to users. You have three choices: OK, WARNING, ALERT. Depending on which 
            argument you choose, your message might be displayed in green, yellow or red. 
      
      For example, by calling:

        updateProdAvailabilityLabel(labelElement, "LIMITED SUPPLY", WARNING);

      You will change the message next to the product from "IN STOCK" (or whatever it was before) to 
      "LIMITED SUPPLY. Furthermore, because you used WARNING it will change the text from green to yellow.

      This assignment is a little flexible. Given the combination of number of items selected and the 
      product availability, what message would you like to tell your users? When would you like to use the 
      severity flag to highlight for users?

*/
function updateAvailabilityLabel(labelElement, amountSelected, productAvailability) {
    return; // replace this!
}