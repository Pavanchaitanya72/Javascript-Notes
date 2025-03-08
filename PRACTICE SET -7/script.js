//create NAV BAR and change its first element color.
let a=document.getElementsByTagName("nav")[0].firstElementChild.style.color="red";
console.log(a);

let b=document.getElementsByTagName("nav")[0].lastElementChild.style.color="red";
console.log(b);

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background="yellow";
})