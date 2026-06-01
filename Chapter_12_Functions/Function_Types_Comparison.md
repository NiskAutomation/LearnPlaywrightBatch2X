# 📊 Function Types Comparison

A quick reference guide comparing **Normal Functions**, **Function Expressions**, and **Arrow Functions** in JavaScript.

---

## 🔥 Comparison Table

| Feature | 🏗️ Normal Function | 📝 Function Expression | ⚡ Arrow Function |
|---------|-------------------|----------------------|-----------------|
| **Syntax** | `function name(){}` | `const name = function(){}` | `const name = () => {}` |
| **Hoisting** | ✅ Yes (Hoisted) | ❌ No (Not hoisted) | ❌ No (Not hoisted) |
| **`this` Binding** | 🔗 Has its own `this` | 🔗 Has its own `this` | 🔄 Inherits `this` from parent scope |
| **`new` Keyword** | ✅ Can be used | ✅ Can be used | ❌ Cannot be used |
| **Arguments Object** | 📦 Available | 📦 Available | 🚫 Not available |
| **Implicit Return** | ❌ No | ❌ No | ✅ Yes (single expression) |
| **Best Use Case** | 🏢 Object methods, constructors | 🔗 Callbacks, closures | ⚡ Short callbacks, lexical `this` |

---

## 🎯 Key Differences Explained

### ✅ Hoisting
- **Normal Functions** are hoisted to the top of their scope.
- **Function Expressions** and **Arrow Functions** are NOT hoisted.

### 🔗 `this` Binding
- **Normal & Expression Functions** create their own `this` context.
- **Arrow Functions** inherit `this` from the surrounding (parent) scope.

### 🆕 Constructor Usage
- **Normal & Expression Functions** can be used as constructors with `new`.
- **Arrow Functions** cannot be used as constructors.

### 📦 Arguments Object
- **Normal & Expression Functions** have access to the `arguments` object.
- **Arrow Functions** do NOT have their own `arguments` object.

### ⚡ Implicit Return
- **Arrow Functions** can return values implicitly without using the `return` keyword (for single expressions).
- **Normal & Expression Functions** always require the `return` keyword.

---

## 📝 Quick Examples

### 🏗️ Normal Function
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

### 📝 Function Expression
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

### ⚡ Arrow Function
```javascript
const greet = (name) => `Hello, ${name}!`;
```

---

> 💡 **Tip:** Use **Arrow Functions** for short callbacks and when you want to preserve the lexical `this`. Use **Normal Functions** for object methods and constructors.
