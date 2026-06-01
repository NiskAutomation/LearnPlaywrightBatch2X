// Comparison Table: Normal Function vs Function Expression vs Arrow Function

/*
================================================================================
| Feature               | Normal Function      | Function Expression  | Arrow Function        |
================================================================================
| Syntax                | function name(){}    | const name=function(){}| const name=()=>{}   |
| Hoisting              | Yes (Hoisted)        | No (Not hoisted)     | No (Not hoisted)      |
| 'this' Binding        | Has its own 'this'   | Has its own 'this'   | Inherits 'this' from  |
|                       |                      |                      | parent scope          |
| Can use 'new'         | Yes                  | Yes                  | No                    |
| Arguments Object      | Available            | Available            | Not available         |
| Implicit Return       | No                   | No                   | Yes (single expr)     |
| Best Use Case         | Object methods,      | Callbacks, closures  | Short callbacks,      |
|                       | constructors         |                      | lexical 'this'        |
================================================================================
*/
