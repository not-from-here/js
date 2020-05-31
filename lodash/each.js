/*const _ = require("lodash");*/
import  _ from 'lodash';

/**
 * _.each - for arrays, objs
 * foreach - for arrays, !not! for objs
 */

///////////////////////////////////////////////////
//Array
const array = ['a', 78, null, 'c', undefined];

console.log(array); //[ 'a', 78, null, 'c', undefined ]
console.log(array.toString()); //a,78,,c,

_.each(array, (value, index, collection) => {
    console.log(index,value,collection);
});

///////////////////////////////////////////////////
//Obj
const obj = {a: 'a', b: array, c: null, d: 'c'};

console.log(obj); //{ a: 'a', b: [ 'a', 78, null, 'c', undefined ], c: null, d: 'c' }
console.log(obj.toString()); //[object Object]

_.each(obj, (value, index, collection) => {
    console.log(index,value);
});