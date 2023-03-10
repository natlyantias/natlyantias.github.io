function redirectToOrder() {
  window.location.href = "orderindex.html";
}

document.getElementById("order-button").addEventListener("click", redirectToOrder);

let custName;
let custPhone;
let custAddress;
let numItem;
let myItem;

document.getElementById("orderButton").onclick = function(){
  myItem = document.getElementById("myItem").value;
  console.log(myItem);
  numItem = document.getElementById("numItem").value;
  console.log(numItem);
  custName = document.getElementById("custName").value;
  console.log(custName);
  custAddress = document.getElementById("custAddress").value;
  console.log(custAddress);
  custPhone = document.getElementById("custPhone").value;
  console.log(custPhone);
  document.getElementById("testing").innerHTML = "You want " + myItem + numItem + ". Your name is " + custName + 
  " and you live at " + custAddress + ". And your number is " + custPhone;
}
