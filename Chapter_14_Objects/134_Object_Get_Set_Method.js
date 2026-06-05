const user = {
    firstname : "Niskant",
    lastname : "Pradhan",
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    },
    set fullname(name){
        const parts = name.split(" ");
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}

console.log(user.fullname);
user.fullname = "John Doe";
console.log(user.firstname);
console.log(user.lastname);