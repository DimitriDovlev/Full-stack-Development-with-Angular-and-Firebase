"use strict";
// Declaring a variable means it exists
// Initialization adds a value
// Declaration
let otherNumber;
let myNumber = 5;
const obj = {
    name: "Name",
    age: 40,
};
// console.log(obj);
// [Basic Types]
/*
- number
- string
- boolean
- undefined
- any
*/
let id = 1;
// Equivalent to let id = 1;
let username = "username";
let registered = true;
let myVariable; // Avoid using any.
// console.log(id.toFixed(4));
// [Arrays]
/*
Arrays in Typescript can also be given types to work with. This prevents us from adding elements of different types within the array,
giving us type safety.
*/
let names = ["Name1", "Name22", "Name333"];
names.forEach((name) => {
    console.log(name, "Length of name: ", name.length);
});
// [Tuples]
/*
A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
*/
let personTuple = [1, "name", true];
// Rarely used, if ever.
let employees = [
    [1, "Name1"],
    [2, "Name22"],
    [3, "Name333"],
];
// [Union]
// Sometimes, it's possible for a variable to come in different types. TypeScript unions allows us to use more than one data type for a variable or a function parameter.
let unionId = 1;
// [Enum]
/*
Enums allow a developer to define a set of named constants.
Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
*/
var Actions;
(function (Actions) {
    Actions["FORWARD"] = "W";
    Actions["BACKWARD"] = "S";
    Actions["LEFT"] = "A";
    Actions["RIGHT"] = "D";
})(Actions || (Actions = {}));
// By default, the values here are 0, 1, 2, 3 etc. But you can set them in the enum.
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["OPEN"] = "open";
    TicketStatus["IN_PROGRESS"] = "progress";
    TicketStatus["CLOSED"] = "closed";
    TicketStatus["CANCELLED"] = "cancelled";
})(TicketStatus || (TicketStatus = {}));
const myAction = "W";
console.log(Actions.FORWARD);
console.log(Actions.BACKWARD);
// This is bad. You want more generic conditions.
// if (myAction === "W") {
// }
if (myAction === Actions.FORWARD) {
    console.log("You pressed forward!");
}
const ticketStatus = "closed";
if (ticketStatus === TicketStatus.CLOSED) {
    console.log("Ticket is closed");
}
const registeredUser = {
    id: 1,
    name: "name",
    registered: true,
};
// Don't do this
// Always create an interface instead
const otherUser = {
    id: 123,
    name: "name",
};
// [Type Assertion]
/*
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.
Usually, this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data.
It has no runtime impact and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.
*/
let customerId = 1;
let cId = customerId;
// cId = '5';  This won't work. cId is explicitly a number.
console.log(cId);
// [Functions]
/*
TypeScript can usually infer the intended type arguments in a generic call, but not always. Hence, it is useful for us to explicitly
specify the argument types within the function definition.

Functions in JavaScript often take a variable number of arguments.
We can model this in TypeScript by marking the parameter as optional with ?
It is also a good practice to always specify the return type of the value that the function will produce.
*/
function addNum(firstNum = 0, secondNum = 0, message) {
    if (message) {
        console.log(message);
    }
    return `${firstNum}+${secondNum}=${firstNum + secondNum}`;
}
function logger(message) {
    console.log(`Your message: ${message}`);
}
// This works
const num = addNum();
console.log(num);
addNum(2, 3, "Hello World");
const quickMessage = {
    id: 1,
    text: "Hello World!",
};
const addTwoNumbers = (first, second) => {
    return first + second;
};
const MultiplyTwoNumbers = (first, second) => first * second;
// [Classes]
/*
Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components,
but this may feel a bit awkward to programmers more comfortable with an object-oriented approach,
where classes inherit functionality and objects are built from these classes.
*/
/* ACCESS MODIFIERS */
/*
In our examples, we’ve been able to freely access the members that we declared throughout our programs.
If you’re familiar with classes in other languages, you may have noticed in the above examples we haven’t had to use the word public to accomplish this; for instance,
C# requires that each member be explicitly labeled public to be visible. In TypeScript, each member is public by default.
You may still mark a member public explicitly.

- Public, means that the parameter can be accessed from anywhere
- Protected, means that the parameter can be accessed from the class, or the classes extend from that class
- Private, means that the parameter can only be accessed within the class

There are two ways of accessing private fields/properties of a class.
1. You can either create methods that specifically return or set the value. Example: getPersonId()
2. Rely on Typescripts getter/setter syntax. Example get id(): number {return this._id};
*/
class Person {
    constructor(name, status) {
        this._id = 1;
        this.name = name;
        this.status = status;
    }
    printPersonName() {
        console.log(this.name);
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
const student = new Person("John", false);
student.printPersonName();
console.log(student.id);
student.id = 5;
// [Inheritance]
/*
Classes can also extend other classes. A feature of object oriented programming called inheritance.
This example shows the most basic inheritance feature: classes inherit properties and methods from base classes.
 Derived classes are often called subclasses or children, and base classes are often called superclasses or parents.
*/
/*
Each derived class that contains a constructor function must call super() which will execute the constructor of the base class.
What’s more, before we ever access a property on this in a constructor body, we have to call super(). This is an important rule that TypeScript will enforce.
*/
class Actor {
    constructor(id, name, status) {
        this.phoneId = 123456;
        this.id = id;
        this.name = name;
        this.status = status;
    }
}
class Entity extends Actor {
    constructor(id, name, status) {
        super(id, name, status);
        this._position = { posX: 0, posY: 0, posZ: 0 };
        console.log("Entity constructor", this.phoneId);
    }
    get position() {
        return this._position;
    }
}
const myEntity = new Entity(1, "Name", true);
// console.log(myEntity.phoneId);
// [Inheritance Example]
/*
Classes can implement interfaces. They can implement as much interfaces as you want.
Implementing an interface means that the class signs a contract that it will implement the methods
and properties that were defined in the interface.
*/
class Parent {
    constructor(house, lastName) {
        this.house = house;
        this.lastName = lastName;
    }
    buyCar() {
        return false;
    }
}
class Child extends Parent {
    constructor(name, house, lastName) {
        super(house, lastName);
        this.name = name;
    }
    singing() {
        console.log(Math.random());
    }
    getAJob() {
        console.log("Child got a job");
        return true;
    }
}
const kid = new Child("Kid", true, "Kidovski");
kid.getAJob();
kid.buyCar();
kid.singing();
