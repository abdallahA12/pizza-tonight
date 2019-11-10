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
Order.prototype.pizzaCost = function () {
    if (this.customSize === "Small 10 in.") {
      this.pizzaPrice += 6;
    } else if (this.customSize === "Medium 14 in.") {
      this.pizzaPrice += 9;
    } else if (this.customSize === "Large 18 in.") {
      this.pizzaPrice += 12;
    }
    if (this.cheese === "cheese") {
      this.pizzaPrice += 1;
    } else if (this.cheese === "light cheese") {
      this.pizzaPrice += 0.5;
    } else if (this.cheese === "extra cheese") {
      this.pizzaPrice += 1.5;
    }
    this.pizzaPrice += this.sauce;
    this.pizzaPrice += this.veggie1;
    this.pizzaPrice += this.veggie2;
    this.pizzaPrice += this.meat;
    return this.pizzaPrice;
  }