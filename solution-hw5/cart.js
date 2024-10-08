//initializing cart function, calling cart + Roll class

const cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

function addToCart(currentRoll) {
    const newRoll = new Roll (rollType, rollGlazing, packSize, rollPrice);
    cart.push(newRoll);
    return cart;
}

//reflecting new cart with roll info
function createItem(newRoll) {
    const template = document.querySelector('#cart-template');
    const cartTemplate = template.content.cloneNode(true);

    //adding remove button so it's clickable (coded in HTML)
    const cartRemove = cartTemplate.querySelector('#remove');
    cartRemove.addEventListener('click', () => {removeItems(newRoll)});
    
    //adding notecard as child to parent and updating with element & price
    const cartItems = document.querySelector('.items');
    cartItems.appendChild(cartTemplate);

    updateItems(newRoll);
    updatePrice(newRoll);
}

function updateItems(newRoll){
    //HTML elements that need updating
    const cartGlaze = cartTemplate.querySelector('.glazing');
    const cartName = cartTemplate.querySelector('.name');
    const cartPack = cartTemplate.querySelector('.pack');
    const cartImg = cartTemplate.querySelector('.link');
    const cartPrice = cartTemplate.querySelector('.price2');

    //copying template content over
    cartGlaze.innerText = newRoll.glazing;
    cartPack.innerText = newRoll.size;
    cartName.innerText = newRoll.type;
    cartPrice.innerText = newRoll.basePrice;

    cartImg.src = '5../assets/products/${newRoll.type.toLowerCase()}-cinnamon-roll.jpg';
    cartImg.alt = rollType;
}
  
//function to remove from cart on click (coded in HTML)
function removeItems(newRoll) {
    newRoll.element.remove();
    cartTemplate.delete(newRoll);
    updatePrice();
}

// calling new Rolls and adding them to cart
const original = new Roll ('Original', 'Sugar Milk', 1, 2.49);
const walnut = new Roll('Walnut', 'Vanilla Milk', 12, 3.49);
const raisin = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
const apple = new Roll('Apple', 'Original', 3, 3.49);
addToCart(apple, raisin, walnut, original);

//from Lab 5 - displays all cart itemsz
for (const newRoll of cart) {
    createItem(newRoll);
  }