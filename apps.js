'use strict';

var merch = document.getElementById('select-pro');
var input = document.getElementById('qty');

Product.names = ['banana', 'boots', 'breakfast', 'chair', 'dog-duck', 'dragon', 'goblin', 'iPadStand', 'meatballs', 'pen', 'pet-sweep', 'r2d2', 'sleep', 'unicorn', 'usb', 'water-can', 'wine-glass'];

Product.all = [];

function Product(name) {
  this.name= name;
  this.path = 'imgdir/' + name + '.jpg';
  this.qty = 0;
  Product.all.push(this);
}
for(var i = 0; i < Product.names.length; i++) {
  new Product(Product.names[i]);
}

//make drop down list
function drop () {
  for(var i = 0; i < Product.names.length; i++) {
    var optionEl = document.createElement('option');
    optionEl.appendChild(document.createTextNode(Product.names[i]));
    merch.appendChild(optionEl); 
  }
}
drop();

//get values from order form
function add() {
  var val = merch.value;
  var num = input.value;
  console.log(val);
  console.log(num);
}

add();