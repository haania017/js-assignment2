let items = parseInt(prompt("Enter number of products:"));
let total = 0;

for (let j = 0; j < items; j++) {
  let price = Number(prompt("Enter product price:"));
  let qty = Number(prompt("Enter product quantity:"));
  total += price * qty * 1.1;
}

if (total > 1000) {
  alert(`Free delivery! Total: ${total}`);
} else {
  total += 200; 
  alert(`Delivery charges apply. Total: ${total}`);
}
