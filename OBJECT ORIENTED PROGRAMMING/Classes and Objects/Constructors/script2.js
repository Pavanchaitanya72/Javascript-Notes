class RailywayForm{
    constructor(givenname, trainnumber){
        console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainnumber)
        this.name=givenname
        this.trainno=trainnumber
    }

    submit(){
        alert(this.name + ": your train is booked " + this.trainno)
    }

    cancel(){
        alert(this.name + ": your ticket cancelled " + this.trainno)
    }
}

let harryForm=new RailywayForm("sai", 12343)
let RohanForm = new RailywayForm("vamshi", 23412)

harryForm.submit()
RohanForm.submit()
RohanForm.cancel()