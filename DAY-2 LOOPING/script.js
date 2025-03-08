//For-loop
//statement1: executed are time
//statement2: condition base on which the loop runs.
//statement3: executed every time when loop of the body executed.

//sum of natural number
// let n=prompt("enter number:");
// n=Number.parseInt(n);
// let sum=0;
// for(let i=0;i<n;i++){
//     sum+=i+1;
// }
// console.log("sum of natural numbers:"+ sum);

//Factorial
// let n=prompt("enter number");
// let fact=1;
// n=Number.parseInt(n);
// for(let i=1;i<n;i++){
//     fact*=i;
// }
// console.log(fact);


//FOR-IN LOOP

let obj={
    naveen:87,
    vinisha:90,
    mani:87,
    jeevan:85
}
for(let i in obj){
    console.log("Total percentange of " + i + " is : " + obj[i]);
}

//FOR-OF LOOP
for(let b of "Naveen"){
    console.log(b);
}