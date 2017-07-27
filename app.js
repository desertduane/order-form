'use strict';


  //++++++++++++++++++++++++++++++++++constructor++++++++++++++++++++++
function Product(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';  //this is the source of the images for the website
  this.quantityOrdered = 0;
  Product.all.push(this);
}
Product.totalClicks = 0;
Product.all = [];
Product.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum' ,'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

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












function handleClick(e){
  localStorage.userClickInfo = JSON.stringify(Image.all);//++stringify HERE+++++

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
