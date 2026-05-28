class Car{
     //attribute
     //constructor
     constructor(assigned_name){
        this.name = assigned_name;
   
     }

    drive(){
        console.log("Drive the Car " + this.name)
    }

    printDetailsCar(){
        console.log("Details of the Car " + this.name)
    }
}

let Hyundai = new Car("Creata")
Hyundai.drive();