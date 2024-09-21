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

function selectGlazing() {
    const selectGlaze = document.querySelector('#glazing');
    for (i = 0; i < glazingOptions.length; i++)
    {
        const glazingPrice = glazingOptions[i];
        const option = document.createElement('option');
        option.textContent = glazingPrice.name;
        selectGlaze.appendChild(option);
    }
}

function selectPack() {
    const selectPack = document.querySelector('#pack');
    for (i = 0; i < packSizeOptions.length; i++)
    {
        const packSize = packSizeOptions[i];
        const option = document.createElement('option');
        option.textContent = packSize.name;
        selectGlaze.appendChild(option);
    }
}

/*
function updatePrice() {   
    const basePrice = 2.49;
    const price = (basePrice + glazingPrice) * packSize;
    price.toFixed(2);
    let newPrice = document.getElementById("#price");
    newPrice.innerHTML = price;
}

function glazingChange(){
    selectGlaze.addEventListener('change', glazingChange);
    let index = parseInt(glazingOptions.value);
    let display = glazingOptions[index];
    updatePrice();
}

function packChange(){
    selectPack.addEventListener('change', packChange);
    let index = parseInt(packSizeOptions.value);
    let display = packSizeOptions[index];
    updatePrice();
}