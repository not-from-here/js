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