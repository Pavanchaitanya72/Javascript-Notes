let x= function(e){
    alert("HELLO WORLD1!");
}

let y= function(e){
    alert("HELLO WORLD2!");
}

btn.addEventListener('click',x)

btn.addEventListener('click', y)

let a=prompt("Enter your favourite number!");

if(a=='2'){
    btn.removeEventListener('click', x);
}