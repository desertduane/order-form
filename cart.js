'use strict';

var cartFormArray = [];


if(localStorage.userFormInfo){
  cartFormArray = JSON.parse(localStorage.userFormInfo);
};

function showList(){
  var ulEl = document.getElementById('the_list');
  console.log(cartFormArray);
  for(var i = 0; i < cartFormArray.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = cartFormArray[i];
    ulEl.appendChild(liEl);
  }
}
showList();
function clearStorage() {
  localStorage.clear();
  window.location.reload(true);
}
document.getElementById('button').addEventListener('click', clearStorage);
