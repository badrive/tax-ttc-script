let btn = document.querySelector("#btn");
let price = document.querySelector("#price");
let tax = document.querySelector("#tax");

let type = document.getElementById("type");

btn.addEventListener('click', () => {

    let text1 = type.options[type.selectedIndex].text;
    document.getElementById("result").innerText = text1;
    
    const PriceValue = price.value;
    document.getElementById("result2").innerText = PriceValue;

    const TaxValue = tax.value;
    document.getElementById("result3").innerText = TaxValue;

    document.getElementById("result4").innerText = ((parseInt(PriceValue) * TaxValue) / 100 ) + parseInt(PriceValue);

});

