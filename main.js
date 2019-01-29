var products = [];
//var orderSumary = [];

function table(){
    
    var i = 0;
    let dataList =  document.getElementById("dataList");
    dataList.innerHTML=''
    while(i < products.length){
       
        var listItem = document.createElement("section");

        console.log(products[i]);
        listItem.classList.add("row");

        var name = document.createElement("section");
        name.innerText = products[i].name;
        listItem.appendChild(name);
        name.classList.add("col");
        
        var price = document.createElement("section");
        price.innerText = products[i].price;
        listItem.appendChild(price);
        price.classList.add("col");

        dataList.appendChild(listItem);  
        i = i + 1; // alternative i++
        
    }

   
}

function add(){

    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID =  document.getElementById("AmountID");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    //sumaryTable.push({Amount: AmountID})
    AmountID.innerText= AmountInput
    Sumary()
    mult()
}

function add1(){

    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID1 =  document.getElementById("AmountID1");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    //sumaryTable.push({Amount: AmountID})
    AmountID1.innerText= AmountInput
    Sumary()
    mult()
}
function add(){

    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID =  document.getElementById("AmountID");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    //sumaryTable.push({Amount: AmountID})
    AmountID.innerText= AmountInput
    Sumary()
    mult()
}
function add(){

    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID =  document.getElementById("AmountID");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    //sumaryTable.push({Amount: AmountID})
    AmountID.innerText= AmountInput
    Sumary()
    mult()
}
function add(){

    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID =  document.getElementById("AmountID");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    //sumaryTable.push({Amount: AmountID})
    AmountID.innerText= AmountInput
    Sumary()
    mult()
}function add(){

    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID =  document.getElementById("AmountID");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    //sumaryTable.push({Amount: AmountID})
    AmountID.innerText= AmountInput
    Sumary()
    mult()
}


function Sumary(){
    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID =  document.getElementById("AmountID"); 
}



function mult(AmountID,PriceID) {
    return (parseInt(AmountID) * parseInt(PriceID));
}

function total() {
    alert('You hit!');
}

function toBuy(){
    alert('Your order is confirmed');
}