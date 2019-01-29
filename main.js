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
    var productsName= document.getElementById('productsName').value
    var productsAmount = parseInt(document.getElementById('productsAmount').value)
    students.push({id: studentID, name: productsName, score: productsAmount})
    scores.push(productsAmount)

    sumary()
}

function Sumary(){
    
    var i = 0;
    let dataList =  document.getElementById("dataList");
    dataList.innerHTML=''
    while(i < students.length){
       
        var listItem = document.createElement("section");

        console.log(students[i]);
        listItem.classList.add("row");

        var id = document.createElement("section");
        id.innerText = students[i].id;
        listItem.appendChild(id);
        id.classList.add("col");
        
        var name = document.createElement("section");
        name.innerText = students[i].name;
        listItem.appendChild(name);
        name.classList.add("col");

        var score = document.createElement("section")
        score.innerText = students[i].score;
        listItem.appendChild(score);
        score.classList.add("col");

        

        if(students[i].score < 60){
            score.classList.add("lowscore");

            
        }

        dataList.appendChild(listItem);  
        i = i + 1; // alternative i++
        
    }

   
}
