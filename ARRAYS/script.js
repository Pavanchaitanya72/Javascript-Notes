//ARRAYS
//IT CAN STORE MULTIPLE VALUES OF HETEROGENEOUS DATA TYPE.
//MUTABLE (IT CAN BE CHANGED).
let marks=[60,76,87,95,false,"Not present"]
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log("The length of the marks:",marks.length);
marks[6]=89;// adding new value into the array.
marks[0]=96; //to change the value of an array,
console.log(marks);
console.log(typeof(marks)); // returns object.

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}