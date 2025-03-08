//ARRAY METHODS -2
let num=[23,78,90,87];
console.log(num);
console.log("ORIGINAL LENGTH", num.length)
//delete method
//The length of the array doesnot change if deleted it shows that deleted element as empty slot.
delete num[0];
console.log(num)
console.log("AFTER DELETION OF ELEMENT",num.length);

//concat - It is used to combine the elements of two different arrays.
let num1=[34,67,97,98];
let num2=[12,45,78,98];
let num3=[234,567,876,987];
let c=num1.concat(num2);
//MULTIPLE ARRAYS CAN BE COMBINED.
let d=num1.concat(num2,num3);
console.log(c); 
console.log(d);

//sort() --> It is used to sort elements in ASCENDING ORDER.
let a=num.sort()
console.log(a);

//FOR SORTING IN ASCENDING ORDER WE NEED TO USE THE COMPARE FUNCTION.
let compare= (a,b)=>{
    return a-b;
}
let num4=[234,54,23,12,76];
num4.sort(compare);
console.log(num4)

//SORT THE ARRAY IN DESCENDING ORDER
let compare1= (a,b)=>{
    return b-a;
}
let num5=[234,54,23,12,76];
num4.sort(compare1);
console.log(num5)

//REVERSE AN ARRAY
console.log(num.reverse());

//SPLICE AND SLICE
//splice --> returns the deleted items and modify the array.
//syntax --> array.splice(startindex, No.of elements need to be deleted, elements that need to be added);
let k=num5.splice(2,2,785,1231);
console.log(num5);

//slice --> it doesnot modify the original array.
console.log(num5.slice(1,));