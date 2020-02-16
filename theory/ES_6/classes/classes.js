/**
 * Classes is the new way of writing constructor functions in JavaScript.
 * It is syntactic sugar for using constructor functions,
 * it still uses prototypes and Prototype-Based Inheritance under the hood.
 * Overriding Methods and Inheriting from another classes.
 */

//ES5 Version
function Person0(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
}

Person0.self = function () {
    return this;
};

Person0.prototype.toString = function () {
    return "[object Person]";
};

Person0.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

//ES6 Version
class Person {
    constructor(firstName, lastName, age, address) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.address = address;
    }

    static self() {
        return this;
    }

    toString() {
        return "[object Person]";
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Something0 {

}

function AnotherSomething() {

}

const as = new AnotherSomething();
const s = new Something0();

console.log(typeof Something0); // logs "function"
console.log(typeof AnotherSomething); // logs "function"
console.log(as.toString()); // logs "[object Object]"
console.log(as.toString()); // logs "[object Object]"
console.log(as.toString === Object.prototype.toString);
console.log(s.toString === Object.prototype.toString);
// both logs return true indicating that we are still using
// prototypes under the hoods because the Object.prototype is
// the last part of the Prototype Chain and "Something"
// and "AnotherSomething" both inherit from Object.prototype