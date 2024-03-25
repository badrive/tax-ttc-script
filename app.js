let btn = document.querySelector("#btn");
let price = document.querySelector("#price");
let tax = document.querySelector("#tax");

let btnTotal = document.querySelector("#btnTotal");
let priceTotal = document.querySelector("#priceTotal");
let taxTotal = document.querySelector("#taxTotal");
// let tableRow = document.getElementById('myTable').getElementsByTagName('tr')[1];

btn.addEventListener('click', () => {
    let newTd = document.createElement('td');

    let text1 = type.options[type.selectedIndex].text;
    document.getElementById("result").innerText = text1;
    
    const PriceValue = price.value;
    document.getElementById("result2").innerText = PriceValue;

    const TaxValue = tax.value;
    document.getElementById("result3").innerText = TaxValue;

    document.getElementById("result4").innerText = ((parseFloat(PriceValue) * TaxValue) / 100 ) + parseFloat(PriceValue);

   
    
});


btnTotal.addEventListener('click', () => {
    let newTd = document.createElement('td');

    
    
    const TaxValue = taxTotal.value;
    const PriceValue = priceTotal.value;
    document.getElementById("result3T").innerText = TaxValue;
    
    document.getElementById("result4T").innerText = PriceValue;
    
    document.getElementById("result2T").innerText = ((parseFloat(PriceValue) / (100 + parseFloat(TaxValue) )) * 100 );

    // x/(100+tax)*100

   
    
});
