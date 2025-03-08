let p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value1")
    },1000)
})

let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error2")
    },2000)
})

let p3= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value3")
    },3000)
})

// let promise_all = Promise.all([p1,p2,p3])
// let promise_all = Promise.allSettled([p1,p2,p3])
// let promise_all = Promise.race([p1,p2,p3]) if there is error first it gives error.
// let promise_all=Promise.any([p1,p2,p3]) It results the value only (not error)
// let promise_all= Promise.resolve(6)
let promise_all=Promise.reject("new Error")
promise_all.then((value) =>{
    console.log(value)
})