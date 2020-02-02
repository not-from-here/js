function Cat(color, name) {
    this.color = color;
    this.name = name;
}

 const cat = new Cat('black', 'KOT');
console.log(cat);

function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  return constructor.apply(obj, args) || obj;
}

 const cat2 = myNew(Cat, 'black', 'Cat');
 console.log(cat2)

/*
const cat = new Cat();
console.log(cat);*/


/**
 * The new keyword is used with constructor
 * functions to make objects in JavaScript.
 *
 *
 * The new keyword does 4 things.
 *
 *  * Creates an empty object.
 *  * Assigns that empty object to the this value.
 *  * The function will inherit from functionName.prototype.
 *  * Returns the this if no Explicit return statement is used.
 *
 *
 */

/*
it will first create an empty object {} then
it will the this value to that empty object
this = {} and add properties to that this object.
Because we don't have a explicit return statement
it automatically returns the this for us.
*/

function Employee(name, position, yearHired) {
    this.name = name;
    this.position = position;
    this.yearHired = yearHired;
}

const emp = new Employee("Marko Polo", "Software Developer", 2017);
console.log(emp);