//STRINGS ARE IMMUTABLE
//STRING METHODS
//length
let n= "Virat";
console.log(n.length);

//toUpperCase
console.log(n.toUpperCase());

//toLowerCase
console.log(n.toLowerCase());

//slice
//index starts from 0.
console.log(n.slice(0,3));
console.log(n.slice(1,4));

//replace
//SYNTAX:
//variablename.replace("oldname", "newname")
console.log(n.replace("Virat", "Kohli"));

//concat
n1="Yuvraj";
n2="Singh";
console.log(n1.concat(" ",n2, " ", "is a famous Cricket Allrounder of INDIA" ));

//trim --> IT is used to remove spaces.
let c1="    MSDHONI       "
console.log(c1);
console.log(c1.trim());

//USING FOR LOOP TO PRINT A STRING

let fr="Naveen"
for(let i=0;i<fr.length;i++){
    console.log(fr[i]);
}