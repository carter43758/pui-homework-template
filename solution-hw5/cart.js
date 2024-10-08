//initializing cart function, calling cart + Roll class
let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        
        this.element = null;
    }
}

function addToCart(currentRoll) {    
    const newRoll = new Roll (currentRoll.type, currentRoll.glazing, currentRoll.size, currentRoll.basePrice);
    cart.push(newRoll);
    return cart;
}

// calling new Rolls and adding them to cart
const original = new Roll ('Original', 'Sugar Milk', 1, 2.49);
const walnut = new Roll('Walnut', 'Vanilla Milk', 12, 3.49);
const raisin = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
const apple = new Roll('Apple', 'Original', 3, 3.49);

addToCart(apple);
addToCart(raisin);
addToCart(walnut);
addToCart(original);

//reflecting new cart with roll info
function createItem() {
    
    const template = document.querySelector('#cart-template');
    const cartTemplate = template.content.cloneNode(true);
    
    newRoll.element = cartTemplate.querySelector('.container'); // Assigning to the root item element
    
    //adding remove button so it's clickable (coded in HTML)
    const cartRemove = cartTemplate.querySelector('#remove');
    cartRemove.addEventListener('click', () => {removeItems(newRoll)});
    
    //adding notecard as child to parent and updating with element & price
    const cartItems = document.querySelector('.items');
    cartItems.appendChild(cartTemplate);

    updateItems(newRoll);
    updatePrice();
}

//from Lab 5 - displays all cart items
for (const newRoll of cart) {
    createItem(newRoll);
  }
  
function updateItems(newRoll) {
    //HTML elements that need updating
    const cartGlaze = newRoll.element.querySelector('.glazing');
    const cartName = newRoll.element.querySelector('.name');
    const cartPack = newRoll.element.querySelector('.pack');
    const cartImg = newRoll.element.querySelector('.link');
    const cartPrice = newRoll.element.querySelector('.price2');

    //copying template content over
    cartGlaze.innerText = newRoll.glazing;
    cartPack.innerText = newRoll.size;
    cartName.innerText = newRoll.type;
    cartPrice.innerText = `$${newRoll.basePrice.toFixed(2)}`;

    cartImg.src = `../assets/products/${newRoll.type.toLowerCase()}-cinnamon-roll.jpg`;
    cartImg.alt = newRoll.type;
}

//updating price
function updatePrice() {   
    let totalPrice = 0;
    totalPrice = ((newRoll.basePrice + newRoll.glazing) * rollImage.Size).toFixed(2);

    const newPrice =  document.querySelector('#price');
    newPrice.innerText = "$" + totalPrice;
}

//function to remove from cart on click (coded in HTML)
function removeItems(newRoll) {
    newRoll.element.remove();

    const index = cart.indexOf(newRoll); // Find the index of the roll in the cart
    if (index > -1) {
        cart.splice(index, 1); // Remove the roll from the array
    }

    if (cart.length === 0) {
        console.log("Your cart is empty.");
    }
    
    updatePrice();
}