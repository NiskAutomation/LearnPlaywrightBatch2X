# JavaScript String Methods Cheat Sheet

> Quick reference for all built-in `String` methods in JavaScript.

---

## String Length & Access

| Method | Example | One-Liner Description |
|--------|---------|----------------------|
| `.length` | `"Hello".length` | Returns the number of characters in a string. |
| `charAt()` | `"Hello".charAt(1)` | Returns character at specified index. |
| `charCodeAt()` | `"A".charCodeAt(0)` | Returns Unicode of character at specified index. |
| `at()` | `"Hello".at(-1)` | Returns character at index (supports negative indexes). |
| `[]` (bracket) | `"Hello"[0]` | Access character by index like an array. |

---

## Searching in Strings

| Method | Example | One-Liner Description |
|--------|---------|----------------------|
| `indexOf()` | `"hello".indexOf("l")` | Returns first index of substring, or `-1` if not found. |
| `lastIndexOf()` | `"hello".lastIndexOf("l")` | Returns last index of substring, or `-1` if not found. |
| `search()` | `"hello".search(/l/)` | Searches string for match using regex, returns index or `-1`. |
| `match()` | `"hello".match(/l/g)` | Returns array of matches using regex. |
| `matchAll()` | `"hello".matchAll(/l/g)` | Returns iterator of all regex matches with capture groups. |
| `includes()` | `"hello".includes("ll")` | Returns `true` if substring exists, else `false`. |
| `startsWith()` | `"hello".startsWith("he")` | Returns `true` if string starts with substring. |
| `endsWith()` | `"hello".endsWith("lo")` | Returns `true` if string ends with substring. |

---

## Extracting / Slicing Strings

| Method | Example | One-Liner Description |
|--------|---------|----------------------|
| `slice()` | `"hello".slice(1, 4)` | Extracts portion from start to end index (exclusive). |
| `substring()` | `"hello".substring(1, 4)` | Similar to `slice()` but cannot accept negative indexes. |
| `substr()` | `"hello".substr(1, 3)` | Extracts `length` characters from start index. *(Deprecated)* |

---

## Modifying / Replacing Strings

| Method | Example | One-Liner Description |
|--------|---------|----------------------|
| `replace()` | `"hello".replace("l", "x")` | Replaces **first** match with new substring. |
| `replaceAll()` | `"hello".replaceAll("l", "x")` | Replaces **all** matches with new substring. |
| `toUpperCase()` | `"hello".toUpperCase()` | Converts entire string to uppercase. |
| `toLowerCase()` | `"HELLO".toLowerCase()` | Converts entire string to lowercase. |
| `trim()` | `" hello ".trim()` | Removes whitespace from both ends of string. |
| `trimStart()` | `" hello ".trimStart()` | Removes whitespace from beginning of string. |
| `trimEnd()` | `" hello ".trimEnd()` | Removes whitespace from end of string. |
| `padStart()` | `"5".padStart(3, "0")` | Pads string from start to reach target length. |
| `padEnd()` | `"5".padEnd(3, "0")` | Pads string from end to reach target length. |
| `repeat()` | `"ha".repeat(3)` | Repeats string specified number of times. |

---

## Splitting & Joining Strings

| Method | Example | One-Liner Description |
|--------|---------|----------------------|
| `split()` | `"a,b,c".split(",")` | Splits string into array by delimiter. |
| `concat()` | `"Hello".concat(" World")` | Joins two or more strings together. |

---

## Checking Content / Boolean

| Method | Example | One-Liner Description |
|--------|---------|----------------------|
| `includes()` | `"test".includes("es")` | Checks if string contains substring. |
| `startsWith()` | `"test".startsWith("te")` | Checks if string starts with substring. |
| `endsWith()` | `"test".endsWith("st")` | Checks if string ends with substring. |

---

## Converting to Other Types

| Method | Example | One-Liner Description |
|--------|---------|----------------------|
| `toString()` | `(123).toString()` | Converts value to string. |
| `String()` | `String(123)` | Converts value to string using constructor. |
| `valueOf()` | `"hello".valueOf()` | Returns primitive value of string object. |

---

## Template / Tagged Literals (Special)

| Feature | Example | One-Liner Description |
|---------|---------|----------------------|
| Template Literals | `` `Hello ${name}` `` | Embedded expressions inside backticks. |
| `raw` | `String.raw` `` `C:\\Users` `` | Returns raw string without escape processing. |

---

## Unicode & Locale

| Method | Example | One-Liner Description |
|--------|---------|----------------------|
| `codePointAt()` | `"A".codePointAt(0)` | Returns Unicode code point at index. |
| `fromCharCode()` | `String.fromCharCode(65)` | Creates string from Unicode values. |
| `fromCodePoint()` | `String.fromCodePoint(128512)` | Creates string from Unicode code points. |
| `normalize()` | `"é".normalize("NFC")` | Normalizes Unicode string to standard form. |
| `localeCompare()` | `"a".localeCompare("b")` | Compares two strings in current locale. |
| `toLocaleUpperCase()` | `"i".toLocaleUpperCase("tr")` | Converts to uppercase using locale rules. |
| `toLocaleLowerCase()` | `"I".toLocaleLowerCase("tr")` | Converts to lowercase using locale rules. |

---

## Regular Expression Helpers

| Method | Example | One-Liner Description |
|--------|---------|----------------------|
| `search()` | `"hello".search(/l/)` | Searches string using regex, returns index. |
| `match()` | `"hello".match(/[aeiou]/g)` | Returns array of regex matches. |
| `matchAll()` | `"hello".matchAll(/[aeiou]/g)` | Returns iterator of all regex match details. |
| `replace()` | `"hello".replace(/l/g, "x")` | Replaces regex match(es) with new string. |
| `split()` | `"a1b2c".split(/\\d/)` | Splits string using regex as delimiter. |

---

## Property Lookups (Well-Known Symbols)

| Symbol | Purpose |
|--------|---------|
| `String[Symbol.iterator]` | Makes string iterable with `for...of`. |

---

## Quick Comparison: `slice` vs `substring` vs `substr`

| Feature | `slice(start, end)` | `substring(start, end)` | `substr(start, length)` |
|---------|---------------------|-------------------------|-------------------------|
| Negative start | Yes (counts from end) | No (treated as 0) | Yes (counts from end) |
| End index | Exclusive | Exclusive | N/A |
| Length param | No | No | Yes |
| Deprecated | No | No | **Yes** |

---

## Quick Comparison: `replace` vs `replaceAll`

| Feature | `.replace()` | `.replaceAll()` |
|---------|-------------|-----------------|
| String search | Replaces **first** match only | Replaces **all** matches |
| Regex search | Replaces first match (unless `/g` flag) | Replaces all matches |

---

## Best Practices

1. **Always use `===` for string comparisons** — strict equality avoids type coercion bugs.
2. **Prefer `includes()` over `indexOf() !== -1`** — more readable.
3. **Use `slice()` over `substr()`** — `substr()` is deprecated.
4. **Use template literals** `` `Hello ${name}` `` over concatenation for readability.
5. **Use `trim()` before comparing user input** — removes accidental whitespace.

---

> **Tip:** All string methods return a **new string** — strings in JavaScript are immutable! Original string never changes.

```javascript
let str = "hello";
str.toUpperCase(); // "HELLO"
console.log(str);  // "hello" (unchanged)
```
