import _ from 'lodash';

/**
 * _.flattenDeep - Recursively flattens array.
 * _.flatten - Flattens array a single level deep.
 */

////////////////////////////////////////////
//Flatten
console.log(_.flatten([1, [2, [3, [4]], 5]])); //[1, 2, [3, [4]], 5]

////////////////////////////////////////////
//Flatten Deep
console.log(_.flattenDeep([1, [2, [3, [4]], [[[[5,{name:'qwerty'}]]]]]]));