// Business Logic
var totalPriceArray = []; //Only global variable in code
function Order (customSize, cheese) {
  this.customSize = customSize;
  this.sauce = 150;
  this.cheese = cheese;
  this.veggie1 = 150;
  this.veggie2 = 150;
  this.meat = 150;
  this.pizzaPrice = 150;
  this.sidePrice = 150;
}