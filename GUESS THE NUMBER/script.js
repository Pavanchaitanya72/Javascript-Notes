//GUESS THE NUMBER 
//PROBLEM STATEMENT
// WRITE A JAVA SCRIPT PROGRAM TO GENERATE A RANDOM NUMBER AND STORE IT IN A VARIABLE.
//THE PROGRAM TAKES AN INPUT FROM THE USER TO TELL THEM WHETHER THE GUESS WAS CORRECT,GREATER OR LESSER THAN THE ORIGINAL NUMBER.
//100 - (NO.OF GUESSES) IS THE SCORE OF THE USER. THE PROGRAM IS EXPECTED TO TERMINATE ONCE THE NUMBER IS GUESSED. NUMBER SHOULD BE BETWEEN 1 - 100.

let num= Math.floor(Math.random()*100);
let k=null;
let score=0;
while(k!==num){
    k=Number(prompt("enter a number between 0 and 100:"));
    if(k>num && k<100){
        console.log("The number is greater")
        score+=1;
    }
    else if(k<num && k>0){
        console.log("The number is smaller");
        score+=1;
    }
    else if(k==num){
        console.log("The numbers are equal.")
        console.log("THE GUESS IS CORRECT");

    }
}
let res= 100-score;
console.log(res);
console.log(num);