// setTimeout(()=>{
//     console.log("hacking wifi...")
// },1000)

// try{
//     console.log(pavan)
// }
// catch(error){
//     console.log(error)
// }


// setTimeout(()=>{
//     console.log("Fetching data...")
// },2000)


// ERROR OBJECT AND CUSTOM ERRORS
// try{
//     Pavan;
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }

try{
    console.log(pavan)
    throw new ReferenceError("harry is not good")
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

