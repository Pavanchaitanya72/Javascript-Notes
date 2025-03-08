// CLASS

class RailywayForm{

// METHODS

    submit(){
        alert(this.name + ": Your ticket booked")
        console.log(this.name + ": Your ticket booked")
    }
    cancel(){
        alert(this.name + ": Your booked ticket cancelled")
        console.log(this.name + " : Your booked ticket cancelled")
    }

    fill(givenname){
        this.name=givenname
    }
}

OBJECT

let saiForm= new RailywayForm()
// filling the form with sai details.
saiForm.fill("sai")
let vamshiForm = new RailywayForm()
// filling the form with vamshidetails.
vamshiForm.fill("vamshi")

saiForm.submit()
vamshiForm.submit()
vamshiForm.cancel()

