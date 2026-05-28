# Difference Between Callback and Promise

In JavaScript, **callbacks** and **Promises** are both mechanisms for handling asynchronous operations, but they differ significantly in syntax, readability, and error handling.

## Callbacks

A callback is a function passed as an argument into another function, which is then invoked inside the outer function to complete some kind of routine or action.

**Example:**
```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "some data";
    callback(null, data); // first arg is error, second is result
  }, 1000);
}

fetchData((error, result) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Result:", result);
  }
});
```

**Problems with callbacks:**
- **Callback Hell**: Deeply nested callbacks make code hard to read
- **Inversion of control**: You hand over control to another function
- **Error handling**: Manual error checking at every level
- **Difficult composition**: Hard to coordinate multiple async operations

## Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to attach callbacks to handle the eventual success value or failure reason.

**Example:**
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "some data";
      resolve(data);
      // or reject(new Error("something went wrong"));
    }, 1000);
  });
}

fetchData()
  .then(result => {
    console.log("Result:", result);
    return processData(result);
  })
  .then(processed => {
    console.log("Processed:", processed);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

## Key Differences

| Aspect | Callbacks | Promises |
|--------|-----------|----------|
| **Readability** | Nested, harder to read ("Pyramid of Doom") | Flat chain with `.then()` |
| **Error Handling** | Manual error checks in each callback | Single `.catch()` handles all errors in chain |
| **Chaining** | Difficult and messy | Easy with `.then()` returning new Promises |
| **Control** | Inversion of control | You retain control, compose operations |
| **Timing** | Execute immediately when async completes | Can be chained and composed before execution |
| **State** | No state, just execution | Has states: pending, fulfilled, rejected |

## Modern Alternative: Async/Await

Built on Promises, `async/await` makes asynchronous code look synchronous:

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

## Summary

- Use **callbacks** for simple event handlers or when integrating with older APIs
- Use **Promises** (or `async/await`) for complex async flows, better error handling, and cleaner code
- In modern JavaScript, **Promises are preferred** and most APIs now return Promises by default
