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