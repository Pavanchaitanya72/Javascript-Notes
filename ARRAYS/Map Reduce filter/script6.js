//MAP --> map() create a new array by performing some operation on each array element.
let arr=[45,54,23];
let a= arr.map((value, index, array )=> {
    // console.log(value,index,array);
    return value+1;
})
console.log(a);

//filter --> it is used to check the condition and return the values.
//Fiters an array with values that passes a test creates a new array.
let arr1=[43,51,12,23];
let a1=arr1.filter((val)=>{
    return val<30;
})
console.log(a1);

//reduce method
let arr2=[1,2,3,5,2,1];
let a2=arr2.reduce((val1,val2)=>{
        return val1+val2;
})
console.log(a2);