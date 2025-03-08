let url = "https://core.ac.uk/services#api"
let response = fetch((v)=>{
    return v.json
}).then((contests) =>{
    console.log(contests)
    for(item in contests){
        console.log(contests[item])
    }
})

cardContainer.innerHTML="allcards"