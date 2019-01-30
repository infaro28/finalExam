productos=[];
order=[];

const URL = "https://products-catalog-8e792.firebaseio.com/set-1.json";

fetchData();
fetchData2();

function fetchData(){

    var request = new XMLHttpRequest();
  request.open('GET', URL, true);

  request.onload = function() {
    const OK = 200;

    if (request.status !== OK) {
        document.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
        return;
    }
    var remoteProduct = JSON.parse(request.responseText);
    remoteProduct.forEach(element => {
      element.amount = 0
      products.push(element);
    });
    
    table();
    };
   request.send();

} 

function fetchData2(){

  var request = new XMLHttpRequest();
  request.open('GET', URL, true);

  request.onload = function() {
  const OK = 200;

  if (request.status !== OK) {
      document.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      return;
  }
  var remoteProduct = JSON.parse(request.responseText);
  remoteProduct.forEach(element => {
    element.amount = 0
    productos.push(element);
  });
  tablemod();
 
  };
 request.send();

} 