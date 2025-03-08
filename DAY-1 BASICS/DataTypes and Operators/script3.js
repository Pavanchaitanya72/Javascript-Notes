// OPERATORS: + - * / 

let num=3;
let num1=5;
console.log(num+num1);
console.log(num1-num);
console.log(num*num1);

let islog=false; // since it is false it takes value as 0.
console.log(islog+10);//output:10

let islogin=true;//since it is true it takes value as 1.
console.log(islogin+10);//output:11

//String + String = String
//string '1'+'1' concatenate. output: 11(string)
//String + number = String
//'1'+1 concatenate. output : 11 (string)
//String(is numericvalue) * number = number
//String(if Alphanumeric value) * number= NAN
//'123'*2 it will multiply and results the output into number.
console.log('1'+'2');
console.log('1'+3);
console.log('123'*2);
console.log('a'+1);
console.log('a'*1);

//typeof operator --> which datatype
console.log(typeof('123')) //string
