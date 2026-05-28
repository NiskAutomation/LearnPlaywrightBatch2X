# JavaScript OOP & Module Concepts

## 1. import / export

**Short Definition:** `export` makes a variable, function, or class available to other files; `import` brings it into the current file from another module.

```javascript
// math.js
export const pi = 3.14;
export function add(a, b) {
  return a + b;
}
export default class Calculator { }

// main.js
import Calculator, { pi, add } from './math.js';
```

| Type | Syntax | Use Case |
|------|--------|----------|
| Named export | `export { name }` | Export multiple items |
| Named import | `import { name } from '...'` | Import specific items |
| Default export | `export default name` | Export single main item |
| Default import | `import name from '...'` | Import the default item |
| All import | `import * as alias from '...'` | Import everything as namespace |

---

## 2. Class

**Short Definition:** A `class` is a blueprint or template for creating objects with shared properties and methods.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const john = new Person("John", 30);
console.log(john.greet()); // "Hello, my name is John"
```

**Key Points:**
- Introduced in ES6 as syntactic sugar over constructor functions
- Supports inheritance with `extends`
- Methods are automatically added to the prototype
- `static` methods belong to the class, not instances

---

## 3. Object

**Short Definition:** An `object` is a collection of key-value pairs (properties and methods) that represents a real-world entity.

```javascript
// Object literal
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023,
  start() {
    return `${this.brand} ${this.model} started!`;
  }
};

console.log(car.brand);   // "Toyota"
console.log(car.start()); // "Toyota Corolla started!"
```

**Ways to create objects:**
| Method | Example |
|--------|---------|
| Object literal | `{ key: value }` |
| Constructor | `new Object()` |
| Class instance | `new Person()` |
| Factory function | `createPerson()` |
| Object.create() | `Object.create(proto)` |

---

## 4. Constructor

**Short Definition:** A `constructor` is a special method inside a class that is automatically called when a new object is created, used to initialize object properties.

```javascript
class Animal {
  constructor(name, species) {
    this.name = name;       // Initialize property
    this.species = species; // Initialize property
  }

  describe() {
    return `${this.name} is a ${this.species}`;
  }
}

const dog = new Animal("Buddy", "Dog");
console.log(dog.describe()); // "Buddy is a Dog"
```

**Key Points:**
- Called automatically with `new` keyword
- Only one constructor per class
- Used to set up initial state (properties)
- Can include validation logic

---

## 5. Complete Working Example

```javascript
// user.js
export class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
  }

  getInfo() {
    return `${this.username} (${this.email})`;
  }

  static isValidEmail(email) {
    return email.includes("@");
  }
}

export function formatDate(date) {
  return date.toLocaleDateString();
}

// main.js
import { User, formatDate } from './user.js';

const user = new User("john_doe", "john@example.com");
console.log(user.getInfo());
console.log("Joined:", formatDate(user.createdAt));
console.log("Valid email?", User.isValidEmail(user.email));
```

---

## 6. Inheritance with Classes

```javascript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  honk() {
    return "Beep beep!";
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);       // Call parent constructor
    this.model = model;
  }

  info() {
    return `${this.brand} ${this.model}`;
  }
}

const myCar = new Car("Tesla", "Model 3");
console.log(myCar.info());   // "Tesla Model 3"
console.log(myCar.honk());   // "Beep beep!" (inherited)
```

---

## 7. Quick Reference Table

| Concept | One-Line Definition | Syntax |
|---------|---------------------|--------|
| **export** | Makes code available to other files | `export const name = value` |
| **import** | Brings code from another file | `import { name } from './file'` |
| **class** | Blueprint for creating objects | `class Name { ... }` |
| **object** | Collection of properties and methods | `{ key: value }` or `new Class()` |
| **constructor** | Initializes new object properties | `constructor(params) { ... }` |
| **extends** | Creates a child class from parent | `class Child extends Parent` |
| **super()** | Calls parent class constructor | `super(args)` |
| **this** | Refers to the current object instance | `this.property` |
| **static** | Method/property on class, not instance | `static method() { ... }` |

---

## 8. Common Interview Questions

### Q1: Difference between class and object?
**A:** A class is a blueprint/template; an object is an instance created from that class.

### Q2: Can a class have multiple constructors?
**A:** No, JavaScript classes can only have one constructor method.

### Q3: What happens if you forget `new` when calling a constructor?
**A:** Without `new`, `this` refers to the global object (or `undefined` in strict mode), and properties won't be set correctly.

### Q4: Difference between named and default export?
**A:** Named exports require matching names in curly braces `{}`; default exports can be imported with any name without braces.

### Q5: What is the purpose of `super()`?
**A:** `super()` calls the parent class constructor to initialize inherited properties before adding child-specific ones.
