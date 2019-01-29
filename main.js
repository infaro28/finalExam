function table(){
    
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
