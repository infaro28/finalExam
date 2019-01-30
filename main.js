var products = [];
//var orderSumary = [];

function add(){
    var i = 0
    while(i < productos.length){
        var product = document.getElementById(`${i}`);
        productos[i].amount = parseInt(product.value)
        if (product.value = ""){
            productos[i].amount = 0;
        }
        i = i+1;
    };
    tablemod();
};

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

function tablemod(){
    var i = 0;
    let dataListmod =  document.getElementById("dataListmod");
    dataListmod.innerHTML=''
    while(i < productos.length){
       
        var listItem = document.createElement("section");

        console.log(productos[i]);
        listItem.classList.add("row");

        var name = document.createElement("section");
        name.innerText = productos[i].name;
        listItem.appendChild(name);
        name.classList.add("col-4");
        
        var price = document.createElement("section");
        price.innerText = productos[i].price;
        listItem.appendChild(price);
        price.classList.add("col-4");

        var amount = document.createElement("INPUT");
        amount.setAttribute("type", "number");
        listItem.appendChild(amount);
        amount.classList.add("col-2");
        amount.id = ( `${[i]}`)
        
        var subtotal = document.createElement("section");
        subtotal.innerText = productos[i].amount*productos[i].price;
        listItem.appendChild(subtotal);
        subtotal.classList.add("col-2");


        dataListmod.appendChild(listItem);  
        i = i + 1; // alternative i++   
    } 
}

function check(){
    alert("bye")
}
