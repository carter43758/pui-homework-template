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

//sample text
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//finding current roll
let currentRoll = rolls(rollType);
function checkRoll(){
    for currentRoll in rolls();
    //https://stackoverflow.com/questions/13509669/find-out-if-a-variable-is-in-an-array

}
//pulling text, price, and image
const rollText = document.getElementById('top');
const rollPrice = document.getElementById('price');
const rollImage = document.getElementById('original2');

//updating text, price, & image
rollText.textContent = rollType + "Cinnamon Roll";
rollImage.src = '../assets/products/' + rollText + '-cinnamon-roll.jpg';

//adding to cart
cart = [];