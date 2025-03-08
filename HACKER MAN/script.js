//STATEMENT:
// Write a javascript program to pretend to look like a hacker. Write an async function Which will simply display the following output:
// Initializing HACK program...

// Hacking Ashish username...

// Username Found ashish17...

// Connecting to facebook...

// Try to use HTML and Styling if possible.  

let p1= async ()=>{
    setTimeout(()=>{
        document.getElementById("demo").innerHTML="Initializing Hack Program...." 
    },1000)
}
let p2= async ()=>{
    setTimeout(()=>{
        document.getElementById("demo1").innerHTML="Hacking _mr_manideep__ username..." 
    },2000)
}
let p3= async ()=>{
    setTimeout(()=>{
        document.getElementById("demo2").innerHTML="Username found _mr_manideep__ in Instagram...." 
    },3000)
}
let p4= async ()=>{
    setTimeout(()=>{
        document.getElementById("demo3").innerHTML="Connecting to _mr_manideep__ Instagram......" 
    },4000)
}

const a= async()=>{
    let a1= await p1()
    let a2= await p2()
    let a3= await p3()
    let a4= await p4()
}
a()
