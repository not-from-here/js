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