const basePrice = 2.49;

const glazingOptions = [
  "Keep original": 0.00,
  "Sugar milk": 0.00,
  "Vanilla milk": 0.50,
  "Double chocolate": 1.50
];

const packSizeOptions = [
  1: 1, 3: 3, 6: 5, 12: 10
];

function price (basePrice, option, size) {   
    const glazingPrice = packSizeOptions[size];
    const packSize = glazingOptions[option];
    return (basePrice + glazingPrice) * packSize;
}

function selectGlaze{
    let selectGlaze = document.querySelector('#glazing').value;

}

function selectSize{
    let selectPack = document.querySelector('#pack').value;
    
    
}

selectGlaze.addEventListener('change', )
selectPack.addEventListener('change', )