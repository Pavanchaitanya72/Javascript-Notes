//CALL BACKS

function loadScript(src, callback){
    var script=document.createElement("script");
    script.src=src
    script.onload=function(){
        console.log("hey script is loaded " + src);
        callback(null,src);
    }
    script.onerror=function(){
        console.log("Error loading script with src:" + src);
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error);
    }
    alert("Hey! how are you");
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" , hello);