const glazingOptions = [
    {name: "Keep original", priceAdaptation: 0.00},
    {name: "Sugar milk", priceAdaptation: 0.00},
    {name: "Vanilla milk", priceAdaptation: 0.50},
    {name: "Double chocolate", priceAdaptation: 1.50}
];

const packSizeOptions = [
    {name: "1", multiplier: 1},
    {name: "3", multiplier: 3},
    {name: "6", multiplier: 5},
    {name: "12", multiplier: 10}
];

let glazingPrice = 0; 
let packSize = 0;
let selectGlaze = 0;
let selectPack = 0;
const basePrice = 2.49;

window.onload = function selectOption() {
    const selectGlaze = document.querySelector('#glazing');
    const selectPack = document.querySelector('#pack');
    
    for (i = 0; i < glazingOptions.length; i++)
    {
        const glazingPrice = glazingOptions[i];
        const option = document.createElement('option');
        option.textContent = glazingPrice.name;
        selectGlaze.appendChild(option);
    }
    
    for (i = 0; i < packSizeOptions.length; i++)
    {
        const packSize = packSizeOptions[i];
        const option = document.createElement('option');
        option.textContent = packSize.name;
        selectPack.appendChild(option);
    }
}

function updatePrice() {   
    let price = ((basePrice + glazingPrice) * packSize).toFixed(2);
    let newPrice =  document.querySelector("#price");
    newPrice.innerHTML = price;
}

//https://stackoverflow.com/questions/45522616/how-to-use-indexof-with-filter-in-javascript

function glazingChange(selectGlaze) {
    glazePrice = glazingOptions.find(glaze => glaze.name === selectGlaze.value).priceAdaptation;
    updatePrice();
}

function packChange(selectPack) {
    let packSize = packSizeOptions.find(pack => pack.name === selectPack.value).multiplier;
    updatePrice();
}