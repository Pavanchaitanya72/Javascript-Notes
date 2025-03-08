

let f= fetch("https://goweather.herokuapp.com/weather/UK")
    
f.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    response.json()
}).then((response)=>{
    console.log(response)
})