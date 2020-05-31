import _ from 'lodash';

/**
 * without - rm els from ARRAY of primitives (not work with arr of obj)
 * remove - modify current arr
 * reject - opposite of filter (rm with condition)
 */

//////////////////////////////////////////
//Without
const initArr = [1, '1', 1.0, 2, "", 4];
const arr1 = _.without(initArr, 1);
console.log(initArr);
console.log(arr1);


//////////////////////////////////////////
//Remove
const initArr2 = [{id: 4}, {id: 5}, {id: 8}];
_.remove(initArr2, (item) => item.id > 5);
console.log(initArr2);


//////////////////////////////////////////
//Reject
const initArr3 = [{id: 4}, {id: 5}, {id: 8}];
const arr2 = _.reject(initArr3, (item) => item.id > 5);
console.log(initArr3);
console.log(arr2);