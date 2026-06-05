const obj = { a:1, b:2 , c:3};
console.log(Object.keys(obj)); //['a', 'b', 'c']
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

const user = {name: "John", age: 30, city: "New York"};
for(let key in user){
    console.log(`${key} : ${user[key]}`);
}

//Object.keys() and Object.values() and Object.entries() are static methods of Object class, they are not available on the object instances. They are used to get the keys, values and key-value pairs of an object respectively.
Object.keys(user).forEach(key => {
    console.log(`${key} : ${user[key]}`);
});