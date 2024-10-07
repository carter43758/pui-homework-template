//initializing cart

const cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

//calling new Rolls and adding them to cart
const original = new Roll ('Original', 'Sugar Milk', 1, basePrice)
cart.push(original);

const walnut = new Roll('Walnut', 'Vanilla Milk', 12, basePrice);
cart.push(walnutRoll);

const raisin = new Roll('Raisin', 'Sugar Milk', 3, basePrice);
cart.push(raisinRoll);

const apple = new Roll('Apple', 'Original', 3, basePrice);
cart.push(appleRoll);

//reflecting new cart with all info
function addToCart(){
    const cartItems = document.querySelector('.items');
    const cartTemplate = cartItems.content.cloneNode(true);

    const cartGlaze = cartTemplate.querySelector('.glazing');
    cartGlaze.innerText = Roll.glazing

    const cartPack = cartTemplate.querySelector('.pack');
    cartPack.innerText = Roll.size

    const cartName = cartTemplate.querySelector('.name');
    cartName.innerText = Roll.type

    const cartImg = cartTemplate.querySelector('.link');
    cartImg.src = ""

    const cartPrice = cartTemplate.querySelector('.price2');
    cartPrice.innerText = Roll.baseprice;
    
    updatePrice();
}

//function to remove from cart on click (coded in HTML)
function remove(){
    const cartRemove = cartTemplate.querySelector('#remove');
    cartTemplate.remove(Roll);
    updatePrice();
}
