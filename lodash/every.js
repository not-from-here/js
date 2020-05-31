import  _ from 'lodash';

/**
 * _.every - checks if predicate returns truthy for all elements of collection
 * _.some  - checks if predicate returns truthy for at least 1 elements of collection
 */

/////////////////////////////////////
//Every
console.log(_.every([true, 1, null, 'yes'], Boolean)); //false


const users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
];
console.log(_.every(users, { 'active': false })); //true

console.log(_.every(users, 'active')); //false