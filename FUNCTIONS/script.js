// FUNCTION
// It is a block of code which is used to perform a particular task.

// 1st type
// function AVG(x,y,z){
//     return Math.round(1+(x+y+z)/2);
// }
// let a=1;
// let b=2;
// let c=3;
// console.log("The average of three numbers :" + AVG(a,b,c))

//ARROWED FUNCTION (2nd type)

const sum =(x,y)=>{
    return x+y;
}

let a=5;
let b=6;
console.log("The sum of two numbers : " + sum(a,b));

//3rd type
const hello=()=>{
    console.log("Hello World");
    return "hii";

}
const v=hello();
console.log(v);