const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);

//getting roll type from HTML
const rollType = params.get("roll");
console.log(rollType);

//updating text and image
const rollText = document.querySelector('#top');
rollText.innerText = rollType + "Cinnamon Roll";
console.log(rollText);

const rollImage = document.querySelector(".original2");
rollImage.src = '../assets/products/' + rollType + '-cinnamon-roll.jpg';

//adding to cart
cart = [];