/**
 * Spread operator and Rest parameters have the same operator ...
 */

/*
Rest parameters is used in a FUNCTION or an ARRAY to get all the
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
