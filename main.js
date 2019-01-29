var products = [];
var orderSumary = [];

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
    var productsProduct= document.getElementById('productsProduct').value
    var productsAmount = parseInt(document.getElementById('productsAmount').value)
    orderSumary.push({Product: productsProduct, Amount: productsAmount})
    scores.push(productsAmount)

    Sumary()
}

function Sumary(){
    
    var w = 0;
    let orderList =  document.getElementById("orderList");
    orderlist.innerHTML=''
    while(w < orderSumary.length){
       
        var orederItem = document.createElement("section");

        console.log(orderSumary[w]);
        orderItem.classList.add("row");

        var Product = document.createElement("section");
        Product.innerText = orderSumarys[w].Product;
        orderItem.appendChild(Product);
        Product.classList.add("col");
        
        var Amount = document.createElement("section");
        Amount.innerText = orderSumary[w].Amount;
        orderItem.appendChild(Amount);
        Amount.classList.add("col");

            

        orderList.appendChild(listItem);  
        w = w + 1; // alternative i++
        
    }

   
}
