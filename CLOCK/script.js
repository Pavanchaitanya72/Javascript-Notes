let a= ()=>{
     x=new Date();
     h=x.getHours();
     m=x.getMinutes();
     s=x.getSeconds();
     d=x.getDate();
    let t= document.getElementById("time")
    t.innerHTML=`Time: ${h}:${m}:${s}, Date: ${d}`;
    console.log(`Time: ${h}:${m}:${s}, Date: ${d}`);

};
setInterval(a,1000)
