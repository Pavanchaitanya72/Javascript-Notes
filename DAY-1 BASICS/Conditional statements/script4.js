// IF - ELSE STATEMENT
//IF - ELSEIF - ELSE STATEMENTS

const age=22;
if(age>=18){
    console.log("You can vote");
}
else if(age>=70){
    console.log("You are an adult");
}
else{
    console.log("You cannot vote");
}

//TERNARY OPERATOR-->IF TWO CONDITIONS THEN WE CAN USE THIS OPERATOR.
let result= age>=18 ? "YES" : "NO";
console.log(result);

//SWITCH CASE STATEMENTS
const op=2;
switch(op){
    case 1:
        console.log("Naveen");
        break;
    case 2:
        console.log("Vinisha");
        break;
    case 3:
        console.log("Jeevan");
        break;
    case 4:
        console.log("Mani");
        break;
    case 5:
        console.log("kushal");
        break;
    default:
        console.log("Invalid option");
}