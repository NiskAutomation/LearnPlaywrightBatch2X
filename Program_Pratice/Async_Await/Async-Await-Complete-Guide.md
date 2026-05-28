# JavaScript Async/Await Complete Guide

## 1. What is `async`?

**One-line:** `async` makes a function automatically return a Promise.

```javascript
async function greet() {
  return "Hello";   // Automatically wrapped in a resolved Promise
}

// Equivalent to:
function greet() {
  return Promise.resolve("Hello");
}

greet().then(msg => console.log(msg));  // "Hello"
```

**Key Points:**
- An `async` function always returns a Promise
- If you return a non-promise value, it's wrapped in `Promise.resolve()`
- If you throw an error, the promise is rejected

---

## 2. What is `await`?

**One-line:** `await` pauses the execution of an `async` function until the Promise resolves or rejects.

```javascript
async function getData() {
  const result = await fetchData();  // Waits here until fetchData() resolves
  console.log(result);               // Then continues
}
```

**Key Points:**
- `await` can only be used inside an `async` function (or at top-level in modern JS)
- It makes async code look and behave like synchronous code
- It returns the resolved value of the Promise

---

## 3. async + await Together

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await delay(2000);      // Wait 2 seconds
  console.log("After 2 seconds");
  await delay(1000);      // Wait 1 second
  console.log("After 1 more second");
}

run();
// Start
// (waits 2s) After 2 seconds
// (waits 1s) After 1 more second
```

---

## 4. Error Handling with try...catch

**One-line:** Use `try...catch` with `await` to handle rejected promises gracefully.

```javascript
async function fetchUserData() {
  try {
    const user = await fetchUser();        // If this rejects, catch runs
    const orders = await fetchOrders(user.id);
    return orders;
  } catch (error) {
    console.error("Something went wrong:", error);
    return [];   // Return default value
  }
}
```

**Without try...catch (error propagates):**
```javascript
async function riskyFunction() {
  const data = await fetchData();   // If rejects, function returns rejected promise
  return data;
}

riskyFunction().catch(err => console.error(err));
```

---

## 5. Sequential vs Parallel Execution

### Sequential (One after another)
```javascript
async function sequential() {
  const user = await fetchUser();       // 1s
  const orders = await fetchOrders();   // 1s
  const products = await fetchProducts(); // 1s
  // Total: ~3 seconds
}
```

### Parallel (All at once)
```javascript
async function parallel() {
  const [user, orders, products] = await Promise.all([
    fetchUser(),      // starts immediately
    fetchOrders(),    // starts immediately
    fetchProducts()   // starts immediately
  ]);
  // Total: ~1 second (waits for slowest)
}
```

### Mixed Approach
```javascript
async function mixed() {
  // Sequential step
  const user = await fetchUser();
  
  // Parallel steps (independent)
  const [orders, preferences] = await Promise.all([
    fetchOrders(user.id),
    fetchPreferences(user.id)
  ]);
  
  return { user, orders, preferences };
}
```

---

## 6. Top-Level Await

**One-line:** Use `await` outside of functions in modules.

```javascript
// Only works in ES Modules (type="module")
const data = await fetch("https://api.example.com/data");
const json = await data.json();
console.log(json);
```

---

## 7. await with Non-Promise Values

**One-line:** `await` on a non-promise value converts it to a resolved promise automatically.

```javascript
async function test() {
  const result = await 42;         // Works! Converts to Promise.resolve(42)
  const text = await "hello";      // Works!
  console.log(result, text);       // 42 "hello"
}
```

---

## 8. async in Array Methods (forEach, map, etc.)

### ❌ Wrong: forEach with async
```javascript
// DON'T DO THIS - forEach doesn't wait for async callbacks
async function processItems(items) {
  items.forEach(async (item) => {
    await processItem(item);   // Fire-and-forget! Doesn't wait
  });
  console.log("Done?");        // Prints before items finish
}
```

### ✅ Correct: for...of with async
```javascript
async function processItems(items) {
  for (const item of items) {
    await processItem(item);   // Waits for each one
  }
  console.log("Actually done!");
}
```

### ✅ Correct: map + Promise.all
```javascript
async function processItems(items) {
  const promises = items.map(async (item) => {
    return await processItem(item);
  });
  
  const results = await Promise.all(promises);
  console.log("All done:", results);
}
```

---

## 9. async Arrow Functions

```javascript
// Regular async function
const getData = async function() { };

// Async arrow function
const getData = async () => { };

// Async arrow with implicit return
const getUser = async () => ({ id: 1, name: "John" });

// In array methods
const fetchAll = async (urls) => {
  const promises = urls.map(async (url) => {
    const response = await fetch(url);
    return response.json();
  });
  return await Promise.all(promises);
};
```

---

## 10. async/await with .then() .catch() .finally()

You can mix async/await with Promise methods:

```javascript
async function fetchWithFallback() {
  try {
    const data = await fetchPrimary()
      .catch(async (err) => {
        console.log("Primary failed, trying backup...");
        return await fetchBackup();   // Fallback
      });
    
    return data;
  } finally {
    console.log("Fetch attempt completed");
  }
}
```

---

## 11. Promise.all with async/await

```javascript
async function loadDashboard() {
  try {
    const [user, orders, notifications] = await Promise.all([
      getUser(),
      getOrders(),
      getNotifications()
    ]);
    
    return { user, orders, notifications };
  } catch (error) {
    console.error("Failed to load dashboard:", error);
    throw error;
  }
}
```

---

## 12. Promise.allSettled with async/await

```javascript
async function loadMultiple() {
  const results = await Promise.allSettled([
    fetchUser(),
    fetchOrders(),    // might fail
    fetchProducts()   // might fail
  ]);
  
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Task ${index} succeeded:`, result.value);
    } else {
      console.error(`Task ${index} failed:`, result.reason);
    }
  });
}
```

---

## 13. Promise.race with async/await

```javascript
async function fetchWithTimeout(url, timeoutMs = 5000) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timeout")), timeoutMs)
  );
  
  const response = await Promise.race([fetchPromise, timeoutPromise]);
  return await response.json();
}
```

---

## 14. Returning Values from async Functions

```javascript
async function calculate() {
  const a = await getA();
  const b = await getB();
  return a + b;   // Automatically wrapped in Promise.resolve()
}

// Usage
calculate().then(sum => console.log(sum));

// Or in another async function
async function display() {
  const sum = await calculate();
  console.log("Sum:", sum);
}
```

---

## 15. Rejecting in async Functions

```javascript
async function validateUser(id) {
  if (!id) {
    throw new Error("ID is required");   // Creates rejected promise
  }
  
  const user = await fetchUser(id);
  return user;
}

// Catching the rejection
validateUser(null).catch(err => console.error(err.message));  // "ID is required"
```

---

## 16. Complete Real-World Example

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function openBrowser() {
  await delay(500);
  return "Browser Opened";
}

async function goToLogin() {
  await delay(300);
  return "Login Page Loaded";
}

async function enterCredentials() {
  await delay(200);
  return "Credentials Entered";
}

async function clickLogin() {
  await delay(400);
  return "Login Successful";
}

async function runTest() {
  try {
    console.log("Step 1:", await openBrowser());
    console.log("Step 2:", await goToLogin());
    console.log("Step 3:", await enterCredentials());
    console.log("Step 4:", await clickLogin());
    console.log("All steps completed!");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    console.log("Test execution finished.");
  }
}

runTest();
```

**Output:**
```
Step 1: Browser Opened
Step 2: Login Page Loaded
Step 3: Credentials Entered
Step 4: Login Successful
All steps completed!
Test execution finished.
```

---

## 17. Quick Reference: One-Line Definitions

| Concept | One-Line Definition |
|---------|---------------------|
| `async` | Makes a function automatically return a Promise |
| `await` | Pauses async function execution until a Promise settles |
| `try...catch` | Handles errors in async/await code |
| `Promise.all()` | Waits for all promises to resolve, returns array of results |
| `Promise.allSettled()` | Waits for all promises to complete, never rejects |
| `Promise.race()` | Returns the first settled promise (success or failure) |
| `Promise.any()` | Returns the first fulfilled promise, ignores rejections |
| Sequential `await` | Runs async operations one after another |
| Parallel `Promise.all()` | Runs async operations simultaneously |
| Top-level `await` | Uses `await` outside functions in ES modules |
| `throw` in async | Creates a rejected promise |
| `for...of` + `await` | Correct way to sequentially process arrays |
| `map` + `Promise.all()` | Correct way to parallel process arrays |

---

## 18. Comparison: Promise Chain vs Async/Await

### Promise Chain
```javascript
function loginFlow() {
  return openBrowser()
    .then(() => goToLogin())
    .then(() => enterCredentials())
    .then(() => clickLogin())
    .then(msg => console.log(msg))
    .catch(err => console.error(err))
    .finally(() => console.log("Done"));
}
```

### Async/Await (Cleaner!)
```javascript
async function loginFlow() {
  try {
    await openBrowser();
    await goToLogin();
    await enterCredentials();
    const msg = await clickLogin();
    console.log(msg);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Done");
  }
}
```

---

## 19. Common Mistakes

### ❌ Using await outside async function
```javascript
const data = await fetchData();   // ERROR!
```

### ✅ Fixed
```javascript
async function getData() {
  const data = await fetchData();   // OK
}
// OR use top-level await in modules
```

### ❌ Not awaiting in loops
```javascript
items.forEach(async (item) => {     // Doesn't wait!
  await process(item);
});
```

### ✅ Fixed
```javascript
for (const item of items) {         // Waits properly
  await process(item);
}
```

### ❌ Awaiting non-promise unnecessarily
```javascript
const value = await getValue();     // If getValue() is sync, just call it
```

### ✅ Fixed
```javascript
const value = getValue();           // Direct call for sync functions
```

---

## 20. Summary

| Approach | Use When |
|----------|----------|
| `async/await` | Most cases - cleaner, readable code |
| `Promise.then()` | Simple one-off operations, chaining transforms |
| `Promise.all()` | Multiple independent parallel operations |
| `Promise.allSettled()` | Need results of all operations regardless of failure |
| `Promise.race()` | Timeout patterns, first response wins |
| `for...of + await` | Sequential processing of arrays |
| `map + Promise.all()` | Parallel processing of arrays |

> **Best Practice:** Use `async/await` for readable code, and combine with `Promise.all()` for parallel execution.
