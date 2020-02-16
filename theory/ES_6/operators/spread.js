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
console.log(sum); // 11