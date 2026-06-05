const user ={name1 : "Nisk", age : 30, city : "Hyderabad"};

//object destructuring
const {name1, age, city} = user;
console.log(name1);
console.log(age);
console.log(city);


//renaming variable
const {name1 : username, age : age2, city : city2} = user;
console.log(username);
console.log(age2);
console.log(city2);

//destructuring in function parameter
// const {age} = user;


//default value
const {country = "India"} = user;
console.log(country);


const data ={
    user: {name: "Niskant", address: {
        town: "Hyderbad"
    }
    }
}; 

const {user : {name, address : {town}}} = data;
console.log(name);
console.log(town);