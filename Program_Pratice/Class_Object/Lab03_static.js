class Student{
    static collageName = "PW Batch";

    constructor (name){
        this.name = name;
    }

    static display(){
        console.log(this.name + " are part of the ", Student.collageName)
    }
}

let amit = new Student("amit");
let nisk = new Student("nisk");


console.log(Student.collageName);
console.log(amit);
console.log(nisk);
