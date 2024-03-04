let cart = [];

function increment() {
  var input = document.getElementById("quantity");
  input.value = parseInt(input.value, 10) + 1;
}

function decrement() {
  var input = document.getElementById("quantity");
  var value = parseInt(input.value, 10);

  if (value > 1) {
    input.value = value - 1;
  }
}
function addToCart(button, event) {
  event.preventDefault();
  // Get the parent element of the button (which contains the product information)
  var productInfo = button
    .closest(".product-item")
    .querySelector(".product-info");

  // Get the specific product details from the productInfo element
  var productName = productInfo.querySelector("h1").innerText;
  var productPrice = parseFloat(
    productInfo.querySelector(".price span").innerText
  );
  var quantity = parseInt(productInfo.querySelector("#quantity").value);

  // Calculate total price
  var totalPrice = quantity * productPrice;

  // Construct cart item object
  var cartItem = {
    name: productName,
    quantity: quantity,
    price: productPrice,
    totalPrice: totalPrice,
  };

  // Assuming you have a global variable for the cart array
  // You can push the cart item to the array
  cart.push(cartItem);

  // You can also update the UI to reflect the addition of the item to the cart
  // For example, you can display a confirmation message or update a cart icon

  console.log("Item added to cart:", cartItem);
  console.log(cart);
}
