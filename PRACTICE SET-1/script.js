// USING LOOPING PRINT THE MARKS OF THE STUDENT

let marks={         //MARKS IS THE "OBJECT"
    "harry":90,
    "potter":85,
    "Nobita":97
}
for(let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are : " + marks[Object.keys(marks)[i]])
}
// for( let i in marks){
//     console.log("Total Marks of " + i + ":" + marks[i]);
// }