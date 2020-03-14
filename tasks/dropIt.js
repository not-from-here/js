/*
Given the array arr, iterate through and remove each element starting
from the first element (the 0 index) until the function func returns
true when the iterated element is passed through it.Then return the
rest of the array once the condition is satisfied, otherwise,
arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    return arr.slice((arr.indexOf(arr.find(item => func(item))) !== -1 ? arr.indexOf(arr.find(item => func(item))) : arr.length));
}

dropElements([1, 2, 3], function (n) {
    return n < 3;
});
dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
});// should return [3, 4].
dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
});// should return [].