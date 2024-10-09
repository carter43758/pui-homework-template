//initializing cart function, calling cart + Roll class
let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        this.element = null;
    }
}

function addToCart(currentRoll) {
    const newRoll = new Roll(currentRoll.type, currentRoll.glazing, currentRoll.size, currentRoll.basePrice);
    cart.push(newRoll);
    return cart;
}

// calling new Rolls and adding them to cart
const original = new Roll('Original', 'Sugar Milk', 1, 2.49);
const walnut = new Roll('Walnut', 'Vanilla Milk', 12, 3.49);
const raisin = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
const apple = new Roll('Apple', 'Original', 3, 3.49);

addToCart(original);
addToCart(walnut);
addToCart(raisin);
addToCart(apple);

//reflecting new cart with roll info
function createItem(newRoll) {
    const template = document.querySelector('.originals3');
    const cartTemplate = template.content.cloneNode(true);

    newRoll.element = cartTemplate.querySelector('.roll-element'); // Assigning to the root item element

    //adding remove button so it's clickable (coded in HTML)
    const cartRemove = cartTemplate.querySelector('#remove');
    cartRemove.addEventListener('click', () => { removeItems(newRoll) });

    //adding notecard as child to parent and updating with element & price
    const cartItems = document.querySelector('.items');
    cartItems.appendChild(cartTemplate);

    updateItems(newRoll);
    updatePrice();
}

//initiating for loop - from here https://stackoverflow.com/questions/3842614/how-do-i-call-a-javascript-function-on-page-load
window.onload = function () {
    for (const newRoll of cart) {
        createItem(newRoll);
    }
}

function updateItems(newRoll) {
    //HTML elements that need updating
    const cartGlaze = newRoll.element.querySelector('.glazing');
    const cartName = newRoll.element.querySelector('.name');
    const cartPack = newRoll.element.querySelector('.pack');
    const cartImg = newRoll.element.querySelector('#link');
    const cartPrice = newRoll.element.querySelector('#price2');

    //copying template content over
    cartGlaze.innerText = "Glazing: " + newRoll.glazing;
    cartPack.innerText = "Pack size: " + newRoll.size;
    cartName.innerText = newRoll.type + " Cinnamon Roll";
    cartPrice.innerText = "$" + calculatePrice(newRoll).toFixed(2);

    cartImg.src = "../assets/products/" + newRoll.type.toLowerCase() + "-cinnamon-roll.jpg";
    cartImg.alt = newRoll.type + "Cinnamon Roll";
}

function calculatePrice(newRoll) {
    let glazePrice = 0;
    for (let i = 0; i < glazingOptions.length; i++) {
        if (newRoll.glazing === glazingOptions[i].name) {
            glazePrice = glazingOptions[i].priceAdaptation;
        }
    }

    let packPrice = 1;
    for (let i = 0; i < packSizeOptions.length; i++) {
        if (newRoll.size.toString() === packSizeOptions[i].name) {
            packPrice = packSizeOptions[i].multiplier;
        }
    }

    return ((newRoll.basePrice + glazePrice) * packPrice);
}

//updating price
function updatePrice() {
    let totalPrice = 0;
    const newPrice = document.querySelector('#price3');
    
    for (const newRoll of cart)
    {
        totalPrice += calculatePrice(newRoll);
    }

    newPrice.innerText = "$" + totalPrice.toFixed(2);
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