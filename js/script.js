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
  Order.prototype.sideCost = function () {
    return this.sidePrice;
  }
  Order.prototype.finalCost = function () {
    var cartTotalPrice = 0;
    for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
      cartTotalPrice += totalPriceArray[arrayElement]; //////////////////////IMPORTANT!!! How to add contents of an array together
    }
    return cartTotalPrice;
  }
  function Address (streetAddress, city, state, zipcode) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.deliveryAddress = (streetAddress + "  " + city + ", " + state + "  " + zipcode);
  }
  //User Interface Logic
$(document).ready(function(event) {
    /////Landing Page Btns
      $("#pickup-btn").click(function() {
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("PICKUP BY CUSTOMER");
      });
      $("#delivery-btn").click(function() {
        $("#address").show();
        $("#pickup-btn,#delivery-btn,#landing-tagline").hide();
      });
      $("form#address-form").submit(function(event) {
        event.preventDefault();
        var streetAddress = $("input#street-add").val();
        var city = $("input#city-add").val();
        var state = $("select#state-select").val();
        var zipcode = $("input#zip-add").val();
        var newAddress = new Address(streetAddress, city, state, zipcode)
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("DELIVER TO: " + newAddress.deliveryAddress);
      });