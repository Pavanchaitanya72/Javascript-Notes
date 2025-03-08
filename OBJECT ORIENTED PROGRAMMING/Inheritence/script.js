// class Animal{
//     constructor(name, color){
//         this.name=name
//         this.color=color
//     }
//     run(){
//         console.log(this.name + "is running!")
//     }

//     shout(){
//         console.log(this.name + "is barking!!")
//     }
// }

// class Monkey extends Animal{
//     sleep(){
//         console.log(this.name + " is Sleeping!")
//     }
//     eat(){
//         console.log(this.name + " is eating!")
//     }
// }

// let ani= new Animal("Tiger", "Yellow")
// let m= new Monkey("Chimpu", "Brown")

// ani.run()
// ani.shout()
// m.run()
// m.shout()
// m.eat()
// m.sleep()


class Employee{
    login(){
        console.log(`Employee has loggedin`)
    }
    logout(){
        console.log(`Employee had loggedout`)
    }
    requestLeaves(leaves){
        console.log(`Employee requested for ${leaves}`)
    }
}

class programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee requested for the ${x} `)
    }

    requestLeaves(leaves){
        console.log(`Employee requested for ${leaves+1} one extra`)
    }
}

let emp=new Employee()
let p = new programmer()
emp.login()
p.login()
p.requestLeaves(4)
