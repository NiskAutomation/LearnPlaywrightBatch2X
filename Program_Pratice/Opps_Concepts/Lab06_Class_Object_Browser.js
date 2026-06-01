class TestCase{
    constructor(name, status, priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display(){
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}

let loginTest = new TestCase("Login Test", "PASS", "P0");
let signupTest = new TestCase("Signup Test", "FAIL", "P1")
loginTest.display();
signupTest.display();

//Function vs Method
//method is function but inside the class :)
