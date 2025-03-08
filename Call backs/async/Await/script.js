// async function harry(){
//     return 7;
// }

// harry().then((x)=>{
//     alert(x);
// })

async function harry(){
    let delhiweather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27deg");
        },6000)
    })
    let hydweather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21deg");
        },2000)
    })

    // delhiweather.then(alert)
    // hydweather.then(alert)
    console.log("Fetching delhi weather please wait....");
    let delhi= await delhiweather
    console.log("Fetched delhi Weather:" + delhi )
    console.log("Fetching hyderabad weather please wait.....");
    let hyd = await hydweather
    console.log("Fetched hyderabad Weather:" + hyd)
    return [delhi, hyd]
}

console.log("Welcome to weather control room.")
let a= harry()
a.then((value)=>{
    console.log(value)
})