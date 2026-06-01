//Private feilds (#) - Hidden data
class credentails{
    #apikey;

    constructor(user, key){
        this.user = user;   //public
        this.#apikey = key;  //private
    }

   //custom function  
    getAuthHeader(){
        return "Bearer" + this.#apikey;
    }
}

let cred = new credentails("admin", "#secretKey12345")
console.log(cred.user);
// console.log(cred.apikey); //undefined
// console.log(cred.#apikey); //error

console.log(cred.getAuthHeader());

//the only way to access it is the public method getAuthHeader()