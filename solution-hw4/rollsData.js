//https://www.geeksforgeeks.org/how-to-access-and-process-nested-objects-arrays-or-json/
const rolls = {
    "Original": {
        name: "Original Cinnamon Roll",
        basePrice: 2.49,
        imageFile: "original-cinnamon-roll.jpg"
    },
    "Apple": {
        name: "Apple Cinnamon Roll",
        basePrice: 3.49,
        imageFile: "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        name: "Raisin Cinnamon Roll",
        basePrice: 2.99,
        imageFile: "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        name: "Walnut Cinnamon Roll",
        basePrice: 3.49,
        imageFile: "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        name: "Double-Chocolate Cinnamon Roll",
        basePrice: 3.99,
        imageFile: "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        name: "Strawberry Cinnamon Roll",
        basePrice: 3.99,
        imageFile: "strawberry-cinnamon-roll.jpg"
    }    
};

//sample text
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//START HERE - TEST
console.log(rollType);
console.log(rolls["Apple"].imageFile);

//updating text, image, & price variables from HTML
//Lab 4 + https://stackoverflow.com/questions/17567925/how-to-check-for-specific-string-in-a-dictionary
const currentRoll = rolls["rollType"];

const rollText = document.querySelector('#top');
rollText.innerText = currentRoll.name;

const rollPrice = document.querySelector('#price');
rollPrice.innerText = currentRoll.basePrice;

const rollImage = document.querySelector('#original2');
rollImage.src = '../assets/products/' + currentRoll.imageFile;

//adding to cart
const button = document.querySelector('#add');
button.addEventListener(click, addToCart);

function addToCart(currentRoll)
{
    const cart = [];
    class Roll
    {
        constructor(rollType, rollGlazing, packSize, basePrice)
        {
            this.type = rollType;
            this.glazing =  rollGlazing;
            this.size = packSize;
            this.basePrice = basePrice;
        }
    }
    cart.push(Roll);
    console.log(cart);
};