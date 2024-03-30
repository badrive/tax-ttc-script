
let btn = document.querySelector("#btn");
let price = document.querySelector("#price");
let namee = document.querySelector("#namee");
let body = document.body;





// let btnTotal = document.querySelector("#btnTotal");
// let priceTotal = document.querySelector("#priceTotal");
// let taxTotal = document.querySelector("#taxTotal");


let tableRow = document.getElementById('myTable');
let TotalRow = document.getElementById('myTableTotal');
const Pricearr = [];
// const Taxarr = [];
// const Totalarr = [];

btn.addEventListener('click', () => {
    let newTr = document.createElement('tr');
    let newTd = document.createElement('td', [0]);
    let newTd2 = document.createElement('td', [1]);
    let newTd3 = document.createElement('td', [2]);
    // let newTd4 = document.createElement('td', [3]);
    
    let text1 = type.options[type.selectedIndex].text;
    // document.getElementById("result").innerText = text1;
    
    const PriceValue = price.value;
    // document.getElementById("result2").innerText = PriceValue;
    
    const NameValue = namee.value;
    // alert("HELLO");
    // document.getElementById("result3").innerText = TaxValue;

    // document.getElementById("result4").innerText = ((parseFloat(PriceValue) * TaxValue) / 100 ) + parseFloat(PriceValue);

    // creat



    // Set content for the new <td>, if needed
    newTd.textContent = text1;
    newTd2.textContent = NameValue;
    newTd3.textContent = PriceValue
    // newTd4.textContent = ((parseFloat(PriceValue) * TaxValue) / 100) + parseFloat(PriceValue);

    // let Totalprice = newTd4.textContent;

    // Append the new <td> to the selected <tr>
    tableRow.appendChild(newTr);
    newTr.appendChild(newTd);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    // newTr.appendChild(newTd4);


    ///// final

    
    Pricearr.push(parseFloat(PriceValue))
    let Pricesum = 0;
    for (let i = 0; i < Pricearr.length; i++) {
        Pricesum += Pricearr[i];
    }

//    Taxarr.push(parseFloat(TaxValue))
//     let Taxsum = 0;
//     for (let i = 0; i < Taxarr.length; i++) {
//         Taxsum += Taxarr[i];
//     }

//     Totalarr.push(Totalprice)
//     let Totalsum = 0;
//     for (let i = 0; i < Totalarr.length; i++) {
//         Totalsum += Totalarr[i];
//     }
    
    



    document.getElementById("result1").innerText = Pricesum;

    // document.getElementById("result2").innerText = (parseFloat(Taxsum) / Taxarr.length);

    // document.getElementById("result3").innerText = ((parseFloat(Pricesum) * Taxsum) / 100) + parseFloat(Pricesum);


});

body.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
        
        event.preventDefault();
        document.getElementById("btn").click();
      }



});


// btnTotal.addEventListener('click', () => {

//     const TaxValue = taxTotal.value;
//     const PriceValue = priceTotal.value;
//     document.getElementById("result3T").innerText = TaxValue;

//     document.getElementById("result4T").innerText = PriceValue;

//     document.getElementById("result2T").innerText = ((parseFloat(PriceValue) / (100 + parseFloat(TaxValue))) * 100);


// });
