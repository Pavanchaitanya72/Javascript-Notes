let first=document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
console.log(first.setAttribute("hidden", "true"))
console.log(first.setAttribute("class", "trueSachin"))
console.log(first.attributes)
console.log(first.remove("hidden"))