'use strict';

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

//Fill all fields warning
  if(!document.getElementById('quantity').value || !document.getElementById('name').value || !document.getElementById('address').value || !document.getElementById('address2').value || !document.getElementById('cardNumber').value) {
    return alert('Fill out all fields');
  }

  localStorage.userFormInfo = JSON.stringify(orderFormArray);
}




document.getElementById('orderForm').addEventListener('submit', userFormData);

// userFormData();
// storeInArray();
