# JavaScript Cheatsheet: Async Patterns & OOP

## Callbacks vs Promises vs Async/Await

### Callbacks
```javascript
function fetchData(callback) {
  setTimeout(() => callback(null, "data"), 1000);
}
fetchData((err, result) => {
  if (err) console.error(err);
  else console.log(result);
});
```
**Cons:** Callback Hell, inversion of control, manual error handling

### Promises
```javascript
fetchData()
  .then(result => processData(result))
  .then(processed => console.log(processed))
  .catch(error => console.error(error));
```
**Pros:** Flat chaining, single `.catch()`, composable

### Async/Await
```javascript
async function getData() {
  try {
    const result = await fetchData();
    const processed = await processData(result);
    console.log(processed);
  } catch (error) {
    console.error(error);
  }
}
```
**Pros:** Synchronous-looking, clean error handling with `try...catch`

---

## Promise Utilities

| Method | What it does |
|--------|-------------|
| `Promise.all([p1, p2])` | Wait for all to resolve (fails fast) |
| `Promise.allSettled([p1, p2])` | Wait for all to complete, never rejects |
| `Promise.race([p1, p2])` | Returns first settled (success or fail) |
| `Promise.any([p1, p2])` | Returns first fulfilled, ignores rejections |

### Parallel vs Sequential
```javascript
// Sequential (~3s total)
const a = await fetchA();
const b = await fetchB();
const c = await fetchC();

// Parallel (~1s total)
const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);

// Mixed
const user = await fetchUser();
const [orders, prefs] = await Promise.all([
  fetchOrders(user.id),
  fetchPreferences(user.id)
]);
```

### Array Processing
```javascript
// ❌ Wrong - forEach doesn't wait
items.forEach(async (item) => await process(item));

// ✅ Sequential - for...of
for (const item of items) await process(item);

// ✅ Parallel - map + Promise.all
const results = await Promise.all(items.map(async (item) => await process(item)));
```

---

## OOP Core Concepts

### Class & Constructor
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
  static isAdult(age) {
    return age >= 18;
  }
}
const john = new Person("John", 30);
```

### Inheritance
```javascript
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);        // Call parent constructor
    this.role = role;
  }
  info() {
    return `${this.name} - ${this.role}`;
  }
}
```

### Object Creation
```javascript
// Object literal
const obj = { key: "value", method() { return this.key; } };

// Class instance
const instance = new Person("John", 30);

// Factory function
function createPerson(name) { return { name }; }

// Object.create()
const child = Object.create(parent);
```

### Import / Export
```javascript
// Export
export const pi = 3.14;
export function add(a, b) { return a + b; }
export default class Calculator { }

// Import
import Calculator, { pi, add } from './math.js';
import * as utils from './utils.js';
```

---

## Quick Reference

| Concept | One-Line Definition |
|---------|---------------------|
| **Callback** | Function passed to another function to execute later |
| **Promise** | Object representing future completion/failure of async operation |
| **async** | Makes a function return a Promise automatically |
| **await** | Pauses async function until Promise settles |
| **Class** | Blueprint/template for creating objects |
| **Object** | Collection of key-value pairs (properties + methods) |
| **Constructor** | Special method to initialize new object properties |
| **extends** | Creates child class from parent class |
| **super()** | Calls parent class constructor |
| **this** | Refers to current object instance |
| **static** | Method/property on class, not instances |
| **export** | Makes code available to other files |
| **import** | Brings code from another file |

---

## Golden Rules

1. **Use `async/await`** for readable async code
2. **Use `Promise.all()`** for parallel independent operations
3. **Use `try...catch`** with `await` for error handling
4. **Use `for...of`** (not `forEach`) when you need to await in loops
5. **Use `class`** for reusable object blueprints
6. **Use `extends + super()`** for inheritance and code reuse
7. **Use named exports** for multiple items, **default export** for single main item
