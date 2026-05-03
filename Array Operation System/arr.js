let arr = [1, 2, 3];

alert("Original Array: " + arr);

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
arr.splice(1, 1);

let sliced = arr.slice(0, 1);

alert("Sliced Array: " + sliced);
