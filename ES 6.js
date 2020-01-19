/**
 * ECMAScript is a standard for making scripting languages which means that
 * JavaScript follows the specification changes in ECMAScript standard
 * because it is the blueprint of JavaScript.
 */

/**
 * Arrow Functions
 * are a new way of making functions in JavaScript.
 * Arrow Functions takes a little time in making functions
 * and has a cleaner syntax than a function expression
 * because we omit the function keyword in making them.
 */

//ES5 Version
var getCurrentDate0 = function () {
    return new Date();
};

//ES6 Version
const getCurrentDate1 = () => new Date();

/*
Arrow functions don't have access to the arguments object.
So calling the first getArgs func will throw an Error.
Instead we can use the rest parameters to get all
the arguments passed in an arrow function.
Arrow functions don't have their own this value.
It captures or gets the this value of lexically enclosing function
if we declare an arrow function in the global scope
the value of this would be the window object.
*/

/**
 * Classes is the new way of writing constructor functions in JavaScript.
 * It is syntactic sugar for using constructor functions,
 * it still uses prototypes and Prototype-Based Inheritance under the hood.
 * Overriding Methods and Inheriting from another class.
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

/**
 * Template Literals are a new way of making strings in JavaScript.
 * We can make Template Literal by using the backtick or back-quote symbol.
 */

//ES5 Version
var greet0 = 'Hi I\'m Mark';

//ES6 Version
let greet = `Hi I'm Mark`;

//ES5 Version
var lastWords0 = '\n'
    + '   I  \n'
    + '   Am  \n'
    + 'Iron Man \n';


//ES6 Version
let lastWords = `
    I
    Am
  Iron Man   
`;

/**
 * Object Destructuring is a new and cleaner way of
 * getting or extracting values from an object or an array.
 */
const employee = {
    firstName: "Marko",
    lastName: "Polo",
    position: "Software Developer",
    yearHired: 2017
};

/*
The syntax for object destructuring is that if we are getting properties
 in an object we use the {} and inside that, we specify the properties
 we want to extract and if we are getting data from an array we use the [].
 */

let { firstName, lastName, position, yearHired } = employee;

/*
If we want to change the variable name we want to extract
we use the propertyName:newName syntax
*/

let { firstName: fName, lastName: lName, position0, yearHired0 } = employee;

/*
We can also have default values when destructuring.
In this example, if the firstName property holds an
undefined value in the object then when we destructure
the firstName variable will hold a default of "Mark".
*/

let { firstName0 = "Mark", lastName: lName0, position1, yearHired1 } = employee;

/**
 Modules lets us split our code base to multiple files for more
 maintainability and this lets us avoid putting all of our code in one big file
 Basically, the sytanx for using modules are straightforward,
 import is used for getting functionality from another file or several functionalities or values while
 export is used for exposing functionality from a file or several functionalities or values.
 */

/*export function isNull(val){
    return val === null;
}*/
/*export default Helpers*/
/*import * as helpers from './helpers.js'; // helpers is an object*/

// or

/*import { isNull, isUndefined, isNullOrUndefined as isValid } from './helpers.js';*/
