// console.log(sum(1, 41))
//
// function sum(a, b) {
//   return a + b
// }

// var i
// console.log(i) //undefined
// i = 42
// console.log(i)

// console.log(num)
// let num = 42 // ERROR
// console.log(num)

/**
 * Function Expression -> can use ONLY AFTER DECLARATION ( = )
 * Function Declaration -> Can use wherever
 */

/*
* Hoisting is the term used to describe the moving of variables and functions
* to the top of their (global or function) scope on where we define that
* variable or function.*/

console.log(squareDeclaration(136)); //Can use wherever

function squareDeclaration(num) {
    return num ** 2
}

/*console.log(squareExpression(25));    ERROR  !!! */
var squareExpression = function (num) {
    return num ** 2
};

console.log(squareExpression(25));


/*console.log(arrowSquareExpression(8)); //ERROR*/
arrowSquareExpression = (num) => {
    return num ** 2
};
console.log(arrowSquareExpression(7));

var arrowSquareExpressionVar = (num) => {
    return num ** 2
};
console.log(arrowSquareExpressionVar(512));