# JavaScript Promise Complete Guide

## 1. What is a Promise?

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

### Promise States
- **Pending** - Initial state, operation not yet complete
- **Fulfilled (Resolved)** - Operation completed successfully
- **Rejected** - Operation failed

---

## 2. Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Async operation
  const success = true;

  if (success) {
    resolve("Operation successful!");   // Fulfilled
  } else {
    reject("Operation failed!");        // Rejected
  }
});
```

---

## 3. Promise Chaining Hierarchy

Promises can be chained using `.then()` to execute tasks in sequence.

```javascript
function step1() {
  return new Promise(resolve => setTimeout(() => resolve("Step 1 done"), 1000));
}

function step2(msg) {
  return new Promise(resolve => setTimeout(() => resolve(msg + " → Step 2 done"), 1000));
}

function step3(msg) {
  return new Promise(resolve => setTimeout(() => resolve(msg + " → Step 3 done"), 1000));
}

// Sequential execution (Hierarchy)
step1()
  .then(result => {
    console.log(result);
    return step2(result);   // Return next promise
  })
  .then(result => {
    console.log(result);
    return step3(result);   // Return next promise
  })
  .then(result => {
    console.log(result);
    // Final result
  });
```

**Output:**
```
Step 1 done
Step 1 done → Step 2 done
Step 1 done → Step 2 done → Step 3 done
```

---

## 4. .then()

Handles a fulfilled Promise. Returns a new Promise, enabling chaining.

```javascript
fetchData()
  .then(result => {
    console.log(result);
    return processData(result);  // Return value or promise
  })
  .then(processed => {
    console.log(processed);
  });
```

### .then() accepts two arguments:
```javascript
promise.then(
  (result) => { /* on fulfilled */ },
  (error) => { /* on rejected */ }
);
```

---

## 5. .catch()

Handles rejected Promises anywhere in the chain.

```javascript
fetchData()
  .then(result => {
    return processData(result);
  })
  .then(processed => {
    return saveData(processed);
  })
  .catch(error => {
    console.error("Error caught:", error);  // Catches any rejection in chain
  });
```

---

## 6. .finally()

Executes **always**, regardless of whether the promise resolved or rejected. Useful for cleanup.

```javascript
fetchData()
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Cleanup: Hide loading spinner");  // Always runs
  });
```

---

## 7. Promise.all()

Waits for **all promises to fulfill**. Returns array of results. **Fails fast** if any rejects.

```javascript
const p1 = fetchUser();
const p2 = fetchOrders();
const p3 = fetchNotifications();

Promise.all([p1, p2, p3])
  .then(([user, orders, notifications]) => {
    console.log("All loaded:", user, orders, notifications);
  })
  .catch(error => {
    console.error("One failed:", error);  // First rejection only
  });
```

| Scenario | Result |
|----------|--------|
| All resolve | `[result1, result2, result3]` |
| Any rejects | First error immediately |

---

## 8. Promise.allSettled()

Waits for **all promises to settle** (resolve or reject). Never fails.

```javascript
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("Another Success");

Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
    // [
    //   { status: "fulfilled", value: "Success" },
    //   { status: "rejected", reason: "Error" },
    //   { status: "fulfilled", value: "Another Success" }
    // ]
  });
```

| Scenario | Result |
|----------|--------|
| All resolve | Array of `{status: "fulfilled", value}` |
| Some reject | Array with both fulfilled and rejected objects |

---

## 9. Promise.race()

Returns the **first settled promise** (resolve or reject).

```javascript
const slow = new Promise(resolve => setTimeout(resolve, 500, "Slow"));
const fast = new Promise(resolve => setTimeout(resolve, 100, "Fast"));

Promise.race([slow, fast])
  .then(result => {
    console.log(result);  // "Fast"
  });
```

**Use Case:** Timeout pattern
```javascript
const fetchData = fetch("https://api.example.com");
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject("Request timed out"), 5000)
);

Promise.race([fetchData, timeout])
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## 10. Promise.any()

Returns the **first fulfilled promise**. Ignores rejections unless **all** reject.

```javascript
const p1 = Promise.reject("Error 1");
const p2 = new Promise(resolve => setTimeout(resolve, 100, "First Success"));
const p3 = new Promise(resolve => setTimeout(resolve, 200, "Second Success"));

Promise.any([p1, p2, p3])
  .then(result => {
    console.log(result);  // "First Success"
  })
  .catch(error => {
    console.error("All rejected:", error.errors);
  });
```

| Scenario | Result |
|----------|--------|
| First fulfills | That result |
| All reject | `AggregateError` with all reasons |

---

## 11. Promise.resolve() and Promise.reject()

Quickly create already resolved or rejected promises.

```javascript
// Already resolved
const resolved = Promise.resolve("Done!");
resolved.then(msg => console.log(msg));  // "Done!"

// Already rejected
const rejected = Promise.reject("Failed!");
rejected.catch(err => console.error(err));  // "Failed!"

// Wrapping synchronous values
Promise.resolve(42).then(n => console.log(n));  // 42
```

---

## 12. Async/Await (Syntactic Sugar)

Modern way to work with Promises — makes async code look synchronous.

```javascript
async function loadData() {
  try {
    const user = await fetchUser();
    const orders = await fetchOrders(user.id);
    const details = await fetchDetails(orders[0]);
    console.log(details);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Always runs");
  }
}

// Parallel with async/await + Promise.all
async function loadAll() {
  try {
    const [user, orders, notifications] = await Promise.all([
      fetchUser(),
      fetchOrders(),
      fetchNotifications()
    ]);
    console.log("All loaded");
  } catch (error) {
    console.error(error);
  }
}
```

---

## 13. Comparison Summary

| Method | Description | Rejects? | Output |
|--------|-------------|----------|--------|
| `.then()` | Handle fulfillment | No | New Promise |
| `.catch()` | Handle rejection | No | New Promise |
| `.finally()` | Always runs | No | New Promise |
| `Promise.all()` | All must succeed | Yes (first) | Array of results |
| `Promise.allSettled()` | Wait for all | No | Array of status objects |
| `Promise.race()` | First to settle | Yes/No | First result/error |
| `Promise.any()` | First to fulfill | Yes (if all fail) | First success |
| `Promise.resolve()` | Create resolved promise | No | Resolved promise |
| `Promise.reject()` | Create rejected promise | Yes | Rejected promise |

---

## 14. Complete Example

```javascript
function openBrowser() {
  return new Promise(resolve => setTimeout(() => resolve("Browser Opened"), 500));
}

function goToLogin() {
  return new Promise(resolve => setTimeout(() => resolve("Login Page Loaded"), 300));
}

function enterCredentials() {
  return new Promise(resolve => setTimeout(() => resolve("Credentials Entered"), 200));
}

function clickLogin() {
  return new Promise(resolve => setTimeout(() => resolve("Login Successful"), 400));
}

// Sequential execution using Promise chain
openBrowser()
  .then(msg => { console.log("Step 1:", msg); return goToLogin(); })
  .then(msg => { console.log("Step 2:", msg); return enterCredentials(); })
  .then(msg => { console.log("Step 3:", msg); return clickLogin(); })
  .then(msg => { console.log("Step 4:", msg); })
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Test execution completed."));
```
