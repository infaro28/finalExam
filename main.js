var products = [];

function table(){
    
    var i = 0;
    let dataList =  document.getElementById("dataList");
    dataList.innerHTML=''
    while(i < products.length){
       
        var listItem = document.createElement("section");

        console.log(products[i]);
        listItem.classList.add("row");

        var Product = document.createElement("section");
        Product.innerText = products[i].id;
        listItem.appendChild(Product);
        Product.classList.add("col");
        
        var price = document.createElement("section");
        price.innerText = students[i].price;
        listItem.appendChild(price);
        price.classList.add("col");

        dataList.appendChild(listItem);  
        i = i + 1; // alternative i++
        
    }

   
}
