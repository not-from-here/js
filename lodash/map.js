import _ from 'lodash';

/**
 * _.map - for arrays, objs
 */

///////////////////////////////////////////////////
//Array
const array = [1, 3, 56.78, -78];

const arr = _.map(array, (value, index, collection) => {
    return value * 2;
});

console.log(arr);


///////////////////////////////////////////////////
//Obj
const obj = {a: 'a', b: array, c: null, d: 'c'};

const arr2 = _.map(obj, (value, index, collection) => {
    return value + ':' + index;
});

console.log(arr2);


///////////////////////////////////////////////////
//Array of Objs
const array2 = [{id: 0, code: 503}, {id: 3, code: 404}, {id: 7, code: 403}];

const arr3 = _.map(array2, (value, index, collection) => {
    return value.id;
});

console.log(arr3);

const arr4 = _.map(array2, 'code');

console.log(arr4);