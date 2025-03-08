let createTodo = async(todo)=>{
    let options={
        method : "POST",
        headers :{
            "Content-type":"application/json"
        },
        body: JSON.stringify(todo)
        //({
        //     title: 'Pavan',
        //     body: 'Cricketer',
        //     userId: 110,
        // }),
    }
    let f= await fetch('https://jsonplaceholder.typicode.com/posts',options)
    response = await f.json()
    return response
}
const getTodo = async(id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts' + id)
    let r= await response.json()
    return r
  
}
const mainFunc = async()=>{
    let todo = {
            title: 'Saikiran',
            body: 'Cricketer',
            userId: 110,
    }
    let todor= await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(101))
}

mainFunc()
// let f= fetch('https://jsonplaceholder.typicode.com/posts', options)
// .then((response) => response.json())
// .then((json) => console.log(json))
