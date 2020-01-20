/**
 * Spread operator and Rest parameters have the same operator ...
 */

/*
Spread operator we give or spread individual data of an array to another data
ARRAY - > individual ITEMS
*/
function add(a, b) {
    return a + b;
}

const nums = [5, 6];
const sum = add(...nums);
console.log(sum);

/*
Rest parameters is used in a function or an array to get all the
arguments or values and put them in an array or extract some pieces of them.
individual ITEMS - > ARRAY
 */

function add2(...rest) {
    console.log(Array.isArray(rest)); //true
    return rest.reduce((total, current) => total + current);
}

console.log(add2(1, 2)); // logs 3
console.log(add2(1, 2, 3, 4, 5)); // logs 15

const [f_rst, ...others] = [undefined, 1, 2, 3, 4, 5, null];
console.log(f_rst); //logs 1
console.log(others); //logs [2,3,4,5]

/**
 * Default Parameters is a new way of defining default variables in JavaScript
 */
//ES5 Version
function add3(a, b) {
    a = a || 0;
    b = b || 0;
    return a + b;
}

//ES6 Version
function add4(a = 0, b = 0) {
    return a + b;
}

//If we don't pass any argument for 'a' or 'b' then
// it's gonna use the "default parameter" value which is 0
console.log(add4(1)); // returns 1

function getFirst([first, ...rest] = [0, 1]) {
    return first;
}

getFirst();  // returns 0
getFirst([10, 20, 30]);  // returns 10

function getArr({nums} = {nums: [1, 2, 3, 4]}) {
    return nums;
}

getArr(); // returns [1, 2, 3, 4]
getArr({nums: [5, 4, 3, 2, 1]}); // returns [5,4,3,2,1]

function doSomethingWithValue(value = "OMG", callback = () => {
    console.log(value + ' !!!')
}) {
    callback(value);
}

doSomethingWithValue(); //logs "OMG !!!"
doSomethingWithValue('Jason', (value) => (console.log(value + '?'))); //logs 'Jason?'

/**
 * Wrapper Objects
 * Primitive Values like string,number and boolean with the exception of
 * null and undefined have properties and methods even though they are not objects.
 * The Wrapper Objects are String,Number,Boolean,Symbol and BigInt.
 */

console.log(new String('marCo').toUpperCase()); // logs  "MARKO"

/**
 * Implicit and Explicit Coercion
 */

/*
* Implicit Coercion is a way of converting values to another type without us programmer doing it directly or by hand.
*/

console.log(1 + '6'); // 16
console.log(false + true); //1
console.log(6 * '2');//12

/*
* While Explicit Coercion is the way of converting values to another type where we (programmers) explicitly do it.
*/

console.log(1 + parseInt('6'));

/**
 * NaN means "Not A Number" is a value in JavaScript that is a result in
 * converting or performing an operation to a number to non-number value hence(therefore) results to NaN
 * */

let a;

console.log(parseInt('abc'));
console.log(parseInt(null));
console.log(parseInt(undefined));
console.log(parseInt(++a));
console.log(parseInt({} * 10));
console.log(parseInt('abc' - 2));
console.log(parseInt(0 / 0));
console.log(parseInt('10a' * 10));

console.log(isNaN()); //logs true
console.log(isNaN(undefined)); //logs true
console.log(isNaN({})); //logs true
console.log(isNaN(String('a'))); //logs true
console.log(isNaN(() => { })); //logs true

console.log(Number.isNaN(NaN));

/**
 * We can check if a value is an Array by using the
 * Array.isArray method available from the Array global object
 *
 * If your environment does not support this method
 * you can use the polyfill implementation.
 */

function isArray(value){
    return Object.prototype.toString.call(value) === "[object Array]"
}

/**
 * How to check if a certain property exists in an object
 * */

/*
* First , using the in operator. The syntax for using the in operator
* is like this propertyName in object.
* */
const object = {
    "prop" : "bwahahah",
    "prop2" : "hweasa"
};

console.log("prop" in object); //This logs true indicating the property "prop" is in "o" object
console.log("prop1" in object); //This logs false indicating the property "prop" is not in  "o" object

/*
* Second, using the hasOwnProperty method in objects.
* This method is available on all objects in JavaScript.
* */

//Still using the o object in the first example.
console.log(object.hasOwnProperty("prop2")); // This logs true
console.log(object.hasOwnProperty("prop1")); // This logs false

/*
* Third, using the bracket notation obj["prop"].
* If the property exists it returns the value of
* that property otherwise this will return undefined.
* */

//Still using the o object in the first example.
console.log(object["prop"]); // This logs "bwahahah"
console.log(object["prop1"]); // This logs undefined

/**
 * The difference between them is that the in operator also checks the objects'
 * Prototype Chain if the property was not found in the current object while the
 * hasOwnProperty method just checks if the property exists in the current object
 * ignoring the Prototype Chain
 */

// We'll still use the object in the previous question.
console.log("prop" in object); // This logs true;
console.log("toString" in object); // This logs true, the toString method is
// available in this object's prototype which is the Object.prototype


console.log(object.hasOwnProperty("prop")); // This logs true
console.log(object.hasOwnProperty("toString")); // This logs false, does not check the object's prototype

/*The notHoistedFunc call throws an error while the hoistedFunc call does
not because the hoistedFunc is hoisted while the notHoistedFunc is not.*/

hoistedFunc();
/*notHoistedFunc(); TypeError: notHoistedFunc is not a function*/

function hoistedFunc(){
    console.log("I am hoisted");
}

var notHoistedFunc = function(){
    console.log("I will not be hoisted!");
};
