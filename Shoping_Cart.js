"use Strict";

// Undersatand the problem - Ask the right questions.
/* - What are the features of the shopping cart.? : add items, view items and calculate the total price.

   - How is the shoping cart implemented? : functions, Arrays & maybe objects(what will it represent though?)

   - How are we meant to store user items?: Arrays
   - How do we calculate the total price ? : functions
*/

// Break the problem into smaller tasks.
/* - Define an array "userItems" to store user items. 
   - well the item should have a price.So we store that in the array too.
   - define functions for the various task of the shooping cart that is allow the user to add, view and calculate items.
   - we will need for loops to go through items and display them.
   - call the functions.
 */

const userItems = [];
const itemprice = [];

function addItems(item, price) {
  userItems.push(item);
  itemprice.push(price);
}

function viewItems() {
  if (userItems.length === 0) {
    console.log("No items in the cart");
    return;
  }
  for (let i = 0; i < userItems.length; i++) {
    console.log(`Item: ${userItems[i]} & Price: $${itemprice[i]}`);
  }
}
// UNDERSTAND THIS WELL TODO

function calculateTotalPrice() {
  let sumOfAllPrice = 0;
  for (let i = 0; i < itemprice.length; i++) {
    sumOfAllPrice += itemprice[i];
  }
  console.log(`The total price of your cart is: $${sumOfAllPrice}`);
}

addItems("Oats", 10);
addItems("Penut butter", 5);
addItems("Senamon", 6);
addItems("bannanas", 3.35);
addItems("almond milk", 8);
addItems("Nuts", 9.4);

viewItems();
calculateTotalPrice();
