'use strict';

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

function drop () {
  var merch = document.getElementById('Product');
  var optionEl = document.createElement('option');
  optionEl.appendChild(document.createTextNode(Product.names));
  merch.appendChild(optionEl);
}
drop();

// function addCart (event) {

// }

