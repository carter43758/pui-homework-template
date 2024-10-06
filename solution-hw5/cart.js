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

const original = new Roll ('Original', 'Sugar Milk', 1, 2.49)
cart.push(original);

const walnut = new Roll('Walnut', 'Vanilla Milk', 12, 3.32);
cart.push(walnutRoll);

const raisin = new Roll('Raisin', 'Sugar Milk', 3, 2.99);
cart.push(raisinRoll);

const apple = new Roll('Apple', 'Original', 3, 3.49);
cart.push(appleRoll);

console.log()