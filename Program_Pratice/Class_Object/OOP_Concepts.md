# OOP Concepts - Short Descriptions

## 1. Static
- Belongs to the class itself, not to any specific object/instance.
- Can be accessed without creating an object.
- Shared across all instances of the class.
- Example: static methods, static variables.

## 2. Private
- Access modifier that restricts access to the class itself.
- Members marked as private can only be accessed within the same class.
- Not accessible from outside the class or by subclasses.
- Used to hide internal implementation details.

## 3. Public
- Access modifier that allows access from anywhere.
- Public members can be accessed from any other class or object.
- Used for the interface that the class exposes to the outside world.

## 4. Encapsulation
- Bundling data (variables) and methods (functions) that operate on the data into a single unit (class).
- Restricting direct access to some of an object's components.
- Achieved using access modifiers (private, public, protected).
- Protects the internal state of an object from unintended modification.

## 5. Polymorphism
- The ability of an object to take on many forms.
- Same method name behaves differently based on the object that calls it.
- Types:
  - Compile-time (Method Overloading): Same method name, different parameters.
  - Runtime (Method Overriding): Subclass provides a specific implementation of a method defined in the parent class.
- Promotes flexibility and reusability.

## 6. Inheritance
- Mechanism where a new class (child/subclass) derives properties and behaviors from an existing class (parent/superclass).
- Promotes code reusability.
- Establishes an "IS-A" relationship between classes.
- Child class can extend or override parent class functionality.

## 7. Abstraction
- Hiding complex implementation details and showing only essential features to the user.
- Focuses on what an object does rather than how it does it.
- Achieved using abstract classes and interfaces.
- Reduces complexity by separating concerns.
