const basePrice = 2.49;

const glazingOptions =[
  {option: "Keep original", glazingPrice: 0.00},
  {option: "Sugar milk", glazingPrice: 0.00},
  {option: "Vanilla milk", glazingPrice: 0.50},
  {option: "Double chocolate", glazingPrice: 1.50}

];

const packSizeOptions = [
  {size: 1, packSize: 1},
  {size: 3, packSize: 3},
  {size: 6, packSize: 5},
  {size: 12, packSize: 10}
  
];

function price (basePrice, option, size) {
const glazingPrice = glazingOptions[option].glazingPrice;
const packMultiplier = packSizeOptions[size].packSize;
return (basePrice + glazingPrice) * packSize;
}

let selectGlaze = document.querySelector('#glazing');
let selectPack = document.querySelector('#pack');