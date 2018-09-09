
var shopFromStore =  function () {
  var refNr = askUserForReferenceNumber();
  // Add the product with the matching referenceNumber to the shoppingCart
  var product = products.find(p => p.referenceNumber === refNr)
  if(product){
    shoppingCart.push(product);
    addProductsFromShoppingCart(product);
  }
  // calculate the total price of your cart, and use it:
  displayTotalPrice(/*The variable holding the totol price*/);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  if(window.confirm('Would you like to buy another item?')){
    setTimeout(shopFromStore);
  }else{
    window.alert('thank you for shopping')
  }
  // if no, print the goodbye message
};

var addProductsFromShoppingCart = function(product) {
  // iterate over the shoppingCart and display the contents
  

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;
    // referenceNumberElement.onclick = function () {
    //   var productNumber = this.innerHTML;

    // };

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('shopping-cart').appendChild(productElement);
  
  // use the printProductsOnScreen function for inspiration
};

var askUserForReferenceNumber = function() {
  return parseInt(window.prompt("Which item would you like to add to your chart?"));
  // Use window.prompt to ask the user a question and capture their response,
  // then, return the response from this function back to our caller
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;
    // referenceNumberElement.onclick = function () {
    //   var productNumber = this.innerHTML;

    // };

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);
  }
};

var runApp = function () {
  printProductsOnScreen();
  
  setTimeout(shopFromStore);
  
  
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};

var products = [
  { referenceNumber: 1000, name: "React", price: 10 },
  { referenceNumber: 1001, name: "Express", price: 20 },
  { referenceNumber: 1002, name: "Vue.js", price: 30 },
  { referenceNumber: 1003, name: "React Native", price: 30 },
  { referenceNumber: 1004, name: "AngularJS", price: 200 },
  { referenceNumber: 1005, name: "Electron", price: 300 },
  { referenceNumber: 1006, name: "Cordova", price: 30 },
  { referenceNumber: 1007, name: "Backbone", price: 10 }
];
var shoppingCart = [];
