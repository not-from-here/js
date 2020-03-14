/*
* Create a function that sums two arguments together.
* If only one argument is provided, then return a function that expects one argument and returns the sum.
* For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
* Calling this returned function with a single argument will then return the sum:
* var sumTwoAnd = addTogether(2);
* sumTwoAnd(3) returns 5.
* If either argument isn't a valid number, return undefined.
* */

function addTogether() {
    const f = arguments[0];
    return(arguments.length === 2) ?((+arguments[0] === arguments[0] && +arguments[1] === arguments[1]) ? arguments[0] + arguments[1] : undefined):
        ((+f !== f) ? undefined : function (x) {return (+f === f && +x === x) ? f + x : undefined;});
}

addTogether(2)(3);// should return 5.
console.log(addTogether("http://bit.ly/IqT6zt"));// should return undefined.