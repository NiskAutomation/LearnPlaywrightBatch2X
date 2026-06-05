const user = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

//dynamic property access
const key = "age";
console.log(user[key]);

//adding /modifying property
user.city = "Hyderabad";
user.country = "India";
console.log(user);


let obj = {name : "Login"};
console.log(Object.getOwnPropertyDescriptor(obj, "name"));