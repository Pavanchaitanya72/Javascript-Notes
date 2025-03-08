// let promise=new Promise(function(resolve, reject){
//     alert("This is alert from promises.")
//     resolve(56);
// })

// console.log("Hello");
// console.log(promise);

// let p1 = new Promise((resolve, reject)=>{
//     console.log("Promise is pending.")
//     setTimeout(()=>{
//         console.log("I have a promise and I am fulfilled.")
//         resolve(true);
       
//     },3000)
// })
// console.log(p1);

// let p = new Promise((resolve, reject)=>{
//     console.log("Promise is pending.")
//     setTimeout(()=>{
//         console.log("I have a promise and I am rejected.")
//         reject(new Error("I am an error"))
//     },3000)
// })
// console.log(p);

// p1.then((value)=>{
//     console.log(value)
// })

// p.catch((error)=>{
//     console.log("some error occurred in p")
// })

//.then(value) of multiple handlers.

// 2.
// let p1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolved");
//         resolve(56);
//     },2000);
// }).then((value)=>{
//     console.log(value);
//     let p2=new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // console.log("Promise2")
//             resolve("Promoise2")
//         },2000);
//     })
//     return p2;
// }).then((value)=>{
//     console.log("We are done")
//     return 2
// })

const loadScript= (src)=>{
    return new Promise((resolve, reject)=>{
        let script=document.createElement("script")
        script.type="text/javascript"
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve("Script had been loaded")
        }
        script.onerror=()=>{reject(0)}
    })
}

let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)
}).catch((error) =>{
    console.log("We are sorry but we are having problems to load the script")
})

