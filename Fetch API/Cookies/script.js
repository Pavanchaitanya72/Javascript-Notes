// console.log(document.cookie)
// document.cookie="name=Pavan2580"
// document.cookie="name1=MSDHONI07"
// document.cookie="name=Virat18"
// let key=prompt("enter your key:")
// let value = prompt("enter your value")
// document.cookie= `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)

// LOCAL STORAGE
// let key=prompt("Enter the Key:")
// let value=prompt("Enter the value:")
// localStorage.setItem(key, value)
// console.log(`The value at ${key} is ${localStorage.getItem(key, value)}`)
// if(key== color || key== city){
//     localStorage.removeItem(key)
// }

//SESSION STORAGE
// sessionStorage.getItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.getItem("name")
// sessionStorage.clear()
//sessionStorage.removeItem("name")

window.onstorage = (e)=>{
    alert("changed")
    console.log(e)
}