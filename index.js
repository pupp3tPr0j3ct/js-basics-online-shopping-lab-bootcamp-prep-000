var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * Math.floor(100));
  var object = {};
  
  object = {
    itemName: item,
    itemPrice: price,
    
  };
  cart.push(object);
  return `${object.itemName} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else if (cart.length === 3){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
  }
}

function total() {
  var xPrice = 0;
  for(var i = 0; i < cart.length; i++){
    xPrice +=cart[i].itemPrice;
  }
  return xPrice;
}

function removeFromCart(addedItem) {
  if(addedItem === undefined){
     return "That item is not in your cart.";
  } else if(addedItem !== undefined){
    return cart;
  }
  //only returns not undefined because addedItem has a value
 
    
}

//removeFromCart('watermelon');

function placeOrder(cardNumber) {
  var newCart = [...cart];
  if(cardNumber === undefined){
    cart = [];
    return "Sorry, we don't have a credit card on file for you.";
  } else if(cardNumber){
    cart = [];
    return `Your total cost is $${newCart[0].itemPrice}, which will be charged to the card ${cardNumber}.`;
  }
}
