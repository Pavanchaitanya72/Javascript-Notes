// const loadScript = async (src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement("script")
//         script.src=src
//         script.onload=()=>{
//             resolve(src + " Done Success")
//         }
//         document.head.append(script)
//     })
// }
// let a= loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value)
// })
// const main2 = async() =>{
//     console.log(new Date().getSeconds());
//     let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date())
// }
// main2()


//PROBLEM 3
// let p = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject(new Error("Please this is not acceptable."))
//         },3000)
//     })
// }
// let a=async()=>{
//     try{
//         let c = await p()
//         console.log(c)
//     }
//     catch(err){
//         console.log("This error had been handled.")
//     }
// }
// a()
// console.log(a)

//PROBLEM 4

let p1= async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        },2000)
    })
}

let p2=async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(20)
        }, 3000)
    })
}

let p3= async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(40)
        },1000)
    })
}

const run = async()=>{
    console.time("run")
    // let x=await p1() 
    // let y= await p2()
    // let z= await p3()
    // console.log(x, y, z)

    let x= p1() 
    let y= p2()
    let z= p3()

    let c= await Promise.all([x, y, z])
    console.log(c)
    console.timeEnd("run")
}
run()
console.log(run)