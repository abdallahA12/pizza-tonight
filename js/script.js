// Business Logic
var totalPriceArray = []; //Only global variable in code
function Order (customSize, cheese) {
  this.customSize = customSize;
  this.option = 150;
  this.crust = cheese;
  this.toppings = 150;
  this.number = 150;
  this.delivery = 150;
  this.pizzaPrice = 150;
  this.sidePrice = 150;
}
Order.prototype.pizzaCost = function () {
    if (this.customSize === "Small 10 in.") {
      this.pizzaPrice += 500;
    } else if (this.customSize === "Medium 14 in.") {
      this.pizzaPrice += 800;
    } else if (this.customSize === "Large 18 in.") {
      this.pizzaPrice += 1000;
    }
    if (this.crust === "crispy") {
      this.pizzaPrice += 150;
    } else if (this.crust === "stuffed") {
      this.pizzaPrice += 150;
    } else if (this.crust === "gluten-free") {
      this.pizzaPrice += 150;
    }
    this.pizzaPrice += this.option;
    this.pizzaPrice += this.toppings;
    this.pizzaPrice += this.number;
    this.pizzaPrice += this.delivery;
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
      $("form#custom-pizza").submit(function(event) {
        event.preventDefault();
        var size = ksh("select#size").val();
        var option = ksh("select#sauce").val();
        var crust = ksh("select#cheese").val();
        var toppings = ksh("select#veggie1").val();
        var number = ksh("select#veggie2").val();
        var delivery = ksh("select#meat").val();
        var pizzaDetails = (size + ", " + option + ", " + crust + ", " + toppings + ", " + number + ", " + delivery);
        var newPizzaOrder = new Order(customSize, cheese);
        newPizzaOrder.pizzaCost();
        totalPriceArray.push(newPizzaOrder.pizzaPrice);
        $("#pizza-details-dropdown").show();
        $("#final-cost").text(newPizzaOrder.finalCost());
        $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
        $("#size, #option, #crust, #toppings, #number, #delivery").val("");
      });
      $("#pizza-details-dropdown").click(function() {
        $("#pizza-details").toggle();
      });
      /////Side Orders
  var newSideOrder = new Order();
  $("#soda").click(function() {
    newSideOrder.sideCost();
    totalPriceArray.push(newSideOrder.sidePrice);
    $("#final-cost").text(newSideOrder.finalCost());
    $("#sides-dropdown").show();
    $("#sides-details").append("<ul><li>" + "soda" + "</li></ul>");
  });
  $("#veges").click(function() {
    newSideOrder.sideCost();
    totalPriceArray.push(newSideOrder.sidePrice);
    $("#final-cost").text(newSideOrder.finalCost());
    $("#sides-dropdown").show();
    $("#sides-details").append("<ul><li>" + "veges" + "</li></ul>");
  });
  $("#mayonnaise").click(function() {
    newSideOrder.sideCost();
    totalPriceArray.push(newSideOrder.sidePrice);
    $("#final-cost").text(newSideOrder.finalCost());
    $("#sides-dropdown").show();
    $("#sides-details").append("<ul><li>" + "mayonnaise" + "</li></ul>");
  });
  $("#sides-dropdown").click(function() {
    $("#sides-details").toggle();
  });
///Checkout Btn
  $("#checkout-btn").click(function() {
    location.reload();
  });
});