let btn = document.querySelector("#btn");
let price = document.querySelector("#price");
let tax = document.querySelector("#tax");
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

    // newTd.textContent = PriceValue;
    // tableRow.appendChild(newTd);

    
    // let x = document.createElement("td");
    // x.setAttribute("value", PriceValue); 
    // tableRow.appendChild(x);

    // let a = document.createElement("td");
    // a.setAttribute("value", TaxValue); 
    // tableRow.appendChild(a);

    // let b = document.createElement("td");
    // b.setAttribute("value", TaxValue); 
    // tableRow.appendChild(b);

    
});

