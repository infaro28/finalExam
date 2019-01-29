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
    AmountID.innerText= AmountInput
    Sumary()

    mult()
}
function Sumary(){
    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID =  document.getElementById("AmountID"); 
}

function add1(){
    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID1 =  document.getElementById("AmountID1");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    AmountID1.innerText= AmountInput
    Sumary1()
    
}
function Sumary1(){
    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID1 =  document.getElementById("AmountID1"); 
}

function add2(){

    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID2 =  document.getElementById("AmountID2");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    AmountID2.innerText= AmountInput
    Sumary2()

}
function Sumary2(){
    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID2 =  document.getElementById("AmountID2"); 
}

function add3(){

    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID3 =  document.getElementById("AmountID3");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    AmountID3.innerText= AmountInput
    Sumary3()
    
}
function Sumary3(){
    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID3 =  document.getElementById("AmountID3"); 
}

function add4(){

    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID4 =  document.getElementById("AmountID4");
    var AmountInput = parseInt(document.getElementById('AmountInput').value)
    AmountID4.innerText= AmountInput
    Sumary4()
}   
function Sumary4(){
    let sumaryTable =  document.getElementById("sumaryTable");
    let AmountID4 =  document.getElementById("AmountID4"); 
}


function mult(AmountID,PriceID) {
    return (parseInt(AmountID) * parseInt(PriceID));
}

function total() {
    alert('You hit!');
}

function toBUY() {
    alert('You hit!');
}

