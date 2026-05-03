let products = ["Laptop", "Phone", "Tablet", "Phone"];
let searchItem = "Phone";

let firstIndex = products.indexOf(searchItem);
let lastIndex = products.lastIndexOf(searchItem);

if (firstIndex !== -1) {
  alert(`Found at index ${firstIndex} and last at ${lastIndex}`);
} 
else {
  alert("Product Not Found");
}
