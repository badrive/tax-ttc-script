
let btn = document.querySelector("#btn");
let price = document.querySelector("#price");
let namee = document.querySelector("#namee");
let body = document.body;





// let btnTotal = document.querySelector("#btnTotal");
// let priceTotal = document.querySelector("#priceTotal");
// let taxTotal = document.querySelector("#taxTotal");


let tableRow = document.getElementById('myTable');
let TotalRow = document.getElementById('myTableTotal');
let PriceValue = "";
const Pricearr = [];
// const Taxarr = [];
// const Totalarr = [];

btn.addEventListener('click', () => {
    
    let rowIndex = tableRow.rows.length;
    
    let newTr = document.createElement('tr');
    let id = document.createElement('td', [0]);
    let newTd = document.createElement('td', [1]);
    let newTd2 = document.createElement('td', [2]);
    let newTd3 = document.createElement('td', [3]);
    let remove = document.createElement('td', [4]);

    remove.classList.add("remove");
    // let newTd4 = document.createElement('td', [3]);

    let text1 = type.options[type.selectedIndex].text;

    
    // document.getElementById("result").innerText = text1;

    PriceValue = price.value;
    
    // document.getElementById("result2").innerText = PriceValue;

    const NameValue = namee.value;
    // alert("HELLO");
    // document.getElementById("result3").innerText = TaxValue;

    // document.getElementById("result4").innerText = ((parseFloat(PriceValue) * TaxValue) / 100 ) + parseFloat(PriceValue);

    // creat


    // Set content for the new <td>, if needed
    id.textContent = rowIndex;

    newTd.textContent = text1;
    if (text1 == "Type") {
        newTd.textContent = "";
    }

    newTd2.textContent = NameValue;
    newTd3.textContent = PriceValue;
    remove.textContent = "X";
    remove.classList.add("pointer");

    if (PriceValue == "") {
        return;
    }

   
    // newTd4.textContent = ((parseFloat(PriceValue) * TaxValue) / 100) + parseFloat(PriceValue);

    // let Totalprice = newTd4.textContent;

    // Append the new <td> to the selected <tr>
    tableRow.appendChild(newTr);
    newTr.appendChild(id);
    newTr.appendChild(newTd);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    newTr.appendChild(remove);
    // newTr.appendChild(newTd4);


    tableRow.insertBefore(newTr, tableRow.children[1]); // Insert as first child
    // PriceValue = true;

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




    remove.addEventListener('click', () => {
        // Extract the price from the third <td> element within the row
        let priceToRemove = parseFloat(newTd3.textContent);
        
        // Remove the price from Pricearr
        let index = Pricearr.indexOf(priceToRemove);
        if (index !== -1) {
            Pricearr.splice(index, 1);
        }
        
        // Recalculate Pricesum
        let Pricesum = Pricearr.reduce((acc, curr) => acc + curr, 0);
        
        // Remove the row from the table
        newTr.remove();
        
        // Update the total price display
        document.getElementById("result1").innerText = Pricesum.toFixed(2);
    });

  

    document.getElementById("result1").innerText = Pricesum.toFixed(2);




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
