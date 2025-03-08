//ARRAY METHODS
//toString()
let num=[12,34,45,56];
let b=num.toString(); // b is a string.
console.log(b);

//JOIN METHOD
//join()
let j = num.join("_");
console.log(j);

//pop() method
//It removes the last element from the array.
console.log(num.pop());
console.log(num);

//push() method
// adds new element to the array.
let p=num.push(89);
console.log(num);

//shift()
//Removes the first element from the Array
let s=num.shift();
console.log(s, num);

//unshift()
//Adds element to the beginning Returns new array length
let t=num.unshift()
console.log(t, num);




