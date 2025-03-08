//USING LOOPS WITH ARRAY
let num=[3,5,1,2,4]
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

//USING FOREACH LOOP
num.forEach((element)=>{
    console.log(element*element);
})

//Array.from() is used to create an array from any other object.
let n="Harry";
let arr=Array.from(n);
console.log(arr);
console.log(typeof(arr));

//for......of LOOP
for(let i of num){
    console.log(i);
}

//for.....in LOOP
for(let j in num){
    console.log(num[j]);

}