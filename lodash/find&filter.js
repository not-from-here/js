import _ from 'lodash';


/**
 * _.find - return 1 element
 * _.filter - return array
 */


////////////////////////////////////////////
// Filter
const res = _.filter([{id: 1}, {id: 2}, {id: 3}], (item) => item.id > 1);
console.log(res);
const res2 = _.filter([{id: 1, code: 404}, {id: 2, code: 202}, {id: 1, code: 503}], {id: 1});
console.log(res2);


////////////////////////////////////////////
// Find
const res3 = _.find([{id: 1}, {id: 2}, {id: 3}], (item) => item.id > 1);
console.log(res3);
const res4 = _.find([{id: 1, code: 404}, {id: 2, code: 202}, {id: 1, code: 503}], {id: 1});
console.log(res4);