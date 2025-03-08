//PRACTICE SET
// PROBLEM 1: CREATE AN ARRAY AND TAKE THE INPUT FROM USER TO ADD NUMBERS TO THIS ARRAY.
// let arr1=[23,34,21,56];
// let k=prompt("enter a number:");
// k=Number.parseInt(k);
// arr1.push(k);
// console.log(arr1);

//Problem2: Untill the number is not 0 add the numbers into the array.
// let arr1=[23,34,21,56];
// let k;
// do{
//     k=prompt("enter a number:");
//     k=Number.parseInt(k);
//     arr1.push(k);
// }while(k!=0);
// console.log(arr1);

//PROBLEM 3: USING FILTER RESULT THE NUMBERS ONLY DIVISIBLE BY 10
// let arr1=[10,13,15,20,90];
// let a=arr1.filter((val)=>{
//         return val%10==0;
// })
// console.log(a);

//PROBLEM 4:
// USE REDUCE TO CALCULATE FACTORIAL OF A GIVEN NUMBER FROM AN ARRAY OF FIRST n Natural Numbers.
let arr1=[1,2,3,4,5];
let fact=arr1.reduce((h1,h2)=>{
    return h1*h2;
})
console.log(fact);