// document.getElementById("google").addEventListener("click", function(){
//     window.location="https://www.google.com";
//     window.focus();
// })

// document.getElementById("fb").addEventListener("click", function(){
//     window.location="https://www.fb.com";
//     window.focus();
// })

// document.getElementById("twitter").addEventListener("click", function(){
//     window.location="https://www.twitter.com";
//     window.focus();
// })

// const fetchContent = async (url) =>{
//     con = await fetch(url);
//     let a = await con.json()
//     return a;
// }
// setInterval(async function(){
//     let url ="https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// }, 3000)

window.onload = function(){
    setInterval(function(){
    document.querySelector("#bulb").classList.toggle("bulb");
}, 300);
};