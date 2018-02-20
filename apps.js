'use strict';

Product.names = ['banana', 'boots', 'breakfast', 'chair', 'dog-duck', 'dragon', 'goblin', 'iPadStand', 'meatballs', 'pen', 'pet-sweep', 'r2d2', 'sleep', 'unicorn', 'usb', 'water-can', 'wine-glass'];

Product.all = [];

function Product(name) {
  this.name= name;
  this.path = 'imgdir/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}
for(var i = 0; i < Product.names.length; i++) {
  new Product(Product.names[i]);
}

function addCart (event) {

}

