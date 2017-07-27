'use strict';


//   //++++++++++++++++++++++++++++++++++constructor++++++++++++++++++++++
// function Product(name) {
//   this.name = name;
//   this.source = 'img/' + this.name + '.jpg';  //this is the source of the images for the website
//   this.timesClicked = 0;
//   Product.all.push(this);
// }
// Product.totalClicks = 0;
// Product.all = [];
// Product.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum' ,'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//
// for(var i = 0; i < Product.allNames.length; i++){
//   new Product(Product.allNames[i]);
// }
//
//
// // +++++++++++++++++++++++++++++++++order form++++++++++++++++++++
// document.getElementById('id')item from pull down
//
// function handleClick(e){
//   localStorage.userClickInfo = JSON.stringify(Image.all);//++stringify HERE+++++
//
//   Image.totalClicks += 1;
//   for(var i = 0; i < Image.all.length; i++){
//     if(e.target.alt === Image.all[i].name){
//       Image.all[i].timesClicked++;
//       jsonImageClicks.push(Image.all[i]);//+++++++++collects the Parse from JSON++++++++++++++++++
//     }
//   }
// }
function Order(products, quantity, name, address, address2, cardNumber){
  this.products = products;
  this.quantity = quantity;
  this.name = name;

  this.address = address;
  this.address2 = address2;
  this.cardNumber = cardNumber;
  Order.all.push(this);

}
Order.all = [];

function orderSubmit(event) {
  event.preventDefault();
  var products = event.target.products.value;
  var quantity = parseInt(event.target.quantity.value);
  var name = event.target.name.value;
  var address = event.target.address.value;
  var address2 = event.target.address2.value;
  var cardNumber = parseInt(event.target.cardNumber.value);

  var newOrder = new Order(products, quantity, name, address, address2, cardNumber);;

  event.target.products.value = null;
  event.target.quantity.value = null;
  event.target.name.value = null;
  event.target.address.value = null;
  event.target.address2.value = null;
  event.target.cardNumber.value = null;


  Order.all.push(newOrder);

};

orderForm.addEventListener('submit', orderSubmit);





for(var i = 0; i < Product.allNames.length; i++){
  new Product(Product.allNames[i]);


function Customer(name, street, zip, cCard){
  this.name = name;
  this.street = street;
  this.zip = zip;
  this.cCard = cCard;
  Customer.info.push(this);
}
Customer.info.push(this);







}
// +++++++++++++++++++++++++++++++++order form++++++++++++++++++++
function somehting(){

}

















  Image.totalClicks += 1;
  for(var i = 0; i < Image.all.length; i++){
    if(e.target.alt === Image.all[i].name){
      Image.all[i].quantityOrdered++;
      jsonImageClicks.push(Image.all[i]);//+++++++++collects the Parse from JSON++++++++++++++++++
    }
  }
}

//+++++++++++++++++++++++++++++EVENT HANDLER+++++++++++++++++
document.getElementById('submit').addEventListener('click', FORMWHATEVER)

