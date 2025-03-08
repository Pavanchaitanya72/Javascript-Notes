// DATA TYPES
// NUMBERS
//STRINGS -->ALPHANUMERIC IS CALLED STRINGS AND THE VALUE DENOTED BY ""(Double quotes) OR ''(single quotes)FOR STRINGS.
let firstName='Pavan';
const lastName='chaitanya';
console.log(firstName+' '+lastName);

//BOOLEANS --> TRUE(1) OR FALSE(0)
let isloggedIn= true;
console.log(isloggedIn);

let islogged= false;
console.log(islogged);

//NULL --> if there is value but the space is denoted as null.
//undefined --> if there is no value and space deleted permanently.
let lastLoginDate= null;
console.log(lastLoginDate);

//Objects --> It consists of the properties which are KEY-VALUE PAIRand the properties are seperated by ','(comma).
const person={
    firstName:"Pavan",
    lastName:"Chaitanya",
    age: 22,
    isloggedIn: true,
    favSport:"Cricket"
}
console.log(person);

//To print the each property in the object.
console.log(person.firstName);
console.log(person.lastName);
console.log(person.favSport);
console.log(person.age);

