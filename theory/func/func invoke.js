/**
 * !!! Invocation as a function - If a function
 * isn't invoked as a method, as a constructor
 * or with the apply, call methods then it is
 * invoked as a function. The "owner" object
 * of this function will be the window object.
 */
let x=0, y=0;

function add(a, b) {
    x = this;
    console.log(this);
    return a + b;
}

add(1, 5); // logs the "window"(global) object and returns 6
/**
 * Arrow functions don't have their own this value.
 */
const arrowAdd = (a, b) => {
    y = this;
    console.log(this);
    return a + b;
};

arrowAdd(5, 6); // logs the {} object and returns 11

console.log(y == x); //false

/**
 * !!! Invocation as a method - If a property of an object has a value
 * of a function we call it a method. When that method is invoked
 * the this value of that method will be that object.
 */

const details = {
    name : "Alyona",
    getName(){
        return this.name;
    }
};

console.log(details.getName()); // returns Alyona
// the "this" value inside "getName" method will be the "details" object

/**
 * !!! Invocation as a constructor - If a function was invoked with
 * a new keyword before it then it's called a function constructor.
 * An empty object will be created and this will point to that object.
 */

function Employee(name, position, yearHired) {
    // creates an empty object {}
    // then assigns the empty object to the "this" keyword
    // this = {};
    this.name = name;
    this.position = position;
    this.yearHired = yearHired;
    // inherits from Employee.prototype
    // returns the "this" value implicitly if no
    // explicit return statement is specified
}

const emp = new Employee("Marko Polo", "Software Developer", 2017);

/**
 * !!! Invocation with the apply and call methods - If we want to
 * explicitly specify the this value or the "owner" object of
 * a function we can use these methods. These methods are
 * available for all functions.
 */
