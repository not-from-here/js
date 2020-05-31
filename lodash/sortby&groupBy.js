import _ from 'lodash';

/**
 * _.sortBy - creates an array of elements, sorted in ascending order by the results
 * _.groupBy - creates an object composed of keys generated from the results
 */

///////////////////////////////////
//Sort By
const users = [
    { user: 'fred1',   'age': 48 },
    { user: 'barney1', 'age': 36 },
    { user: 'fred2',   'age': 40 },
    { user: 'barney2', 'age': 34 }
];

const newArr = _.sortBy(users,(user)=>user.age);
console.log(newArr);

const newArr2 = _.sortBy(users,'age');
console.log(newArr2);


//////////////////////////////////////
//Group By
console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor));
//{ '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }