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

function addToCart() {
    const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.push(newRoll);
    return cart;
}

// calling new Rolls and adding them to cart
const original = new Roll ('Original', 'Sugar Milk', 1, 2.49);
const walnut = new Roll('Walnut', 'Vanilla Milk', 12, 3.49);
const raisin = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
const apple = new Roll('Apple', 'Original', 3, 3.49);
addToCart(apple, raisin, walnut, original);

//reflecting new cart with roll info
function createItem(newRoll){
    const template = document.querySelector('#cart-template');
    const cartTemplate = template.content.cloneNode(true);

    cart.element = cartTemplate.querySelector();

    //adding remove button so it's clickable (coded in HTML)
    const cartRemove = cartTemplate.querySelector('#remove');
    console.log(cartRemove);
    cartRemove.addEventListener('click', () => {removeItems(newRoll)});
    
    //adding notecard as child to parent and updating with element & price
    const cartItems = document.querySelector('.items');
    cartItems.appendChild(cart.element);

    updateElement(newRoll);
    updatePricePrice(newRoll);
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

    cartImg.src = newRoll.src
}
  
//function to remove from cart on click (coded in HTML)
function removeItems(newRoll){
    newRoll.element.remove();
    cartTemplate.delete(newRoll);
    updatePrice();
}

//from Lab 5
for (const newRoll of cart) {
    console.log(newRoll);
    createElement(newRoll);
  }
