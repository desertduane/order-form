'use strict';
<<<<<<< HEAD
=======

var orderFormArray = [];
// }
// +++++++++++++++++++++++++++++++++order form++++++++++++++++++++
function userFormData(e){
  e.preventDefault();
  var userProductSelect = document.getElementById('productList').value;
  var userInputQuantity = document.getElementById('quantity').value;
  var userInputName = document.getElementById('name').value;
  var userInputAddress1 = document.getElementById('address').value;
  var userInputAddress2 = document.getElementById('address2').value;
  var userInputCardNumber = document.getElementById('cardNumber').value;
  console.log(userInputName, 'name');
  orderFormArray.push(userProductSelect);
  orderFormArray.push(userInputQuantity);
  orderFormArray.push(userInputName);
  orderFormArray.push(userInputAddress1);
  orderFormArray.push(userInputAddress2);
  orderFormArray.push(userInputCardNumber);
  localStorage.userFormInfo = JSON.stringify(orderFormArray);

}




document.getElementById('orderForm').addEventListener('submit', userFormData);

// userFormData();
// storeInArray();
>>>>>>> 6c789c467e5e92c74426a96b184d8277000d6cbf
