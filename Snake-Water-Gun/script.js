//Use javascript to create a game of snake, water and Gun
//The game ask you to enter S,W or G. The computer should be able
//to randomly generate S,W or G and declare Win or Loss using alert.
//Use confirm and prompt whereever required.

//Water and snake --> snake wins
//snake and gun --> gun wins
//Gun and Water --> water wins


let write=confirm("enter the game that you want to write")
if(write){
    let X=prompt("enter S or W or G:").toUpperCase();
    let Y=prompt("enter S or G or W").toUpperCase();
    if (["S","W","G"].includes(X) && ["S","W","G"].includes(Y)){
        if(X==Y){
            alert("The game is tie");
        }
        else if(X== "S" && Y=="W"){
            alert("Snake wins the game.");
        }
        else if(X=="S" && Y=="G"){
            alert("Gun wins the game");
        }
        else if(X=="G" && Y=="W"){
            alert("Water wins the game");
        }
        else{
            alert("enter valid input");
        }

    }
}
