class Person{

    //hide childern
    #child1;
    #child2;

    constructor(name, ch1, ch2){
        this.name = name;
        this.#child1 = "abc";
        this.#child2 = "xyz";
    }

    mom(){
        return this.#child1;
        return this.#child2;
    }
}

let n = new Person("Nisk", "abc", "xyz");
console.log(n.name);
console.log(n.mom());