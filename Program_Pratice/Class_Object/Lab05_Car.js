class Car{
    #engine;

    constructor(name, engineName){
        this.name = this.name;
        this.#engine = engineName;
    }

    getEngine(){
        return this.#engine;
    }

    setEngine(engineName){
        this.#engine = engineName;
    }
}  

let tesla = new Car("Tesla", "V8");
console.log(tesla.getEngine());
tesla.setEngine("V9")
console.log(tesla.getEngine());