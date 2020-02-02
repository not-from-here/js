/**
 *
 * The Set object is an ES6 feature that lets you store
 * unique values, primitives or object references.
 * A value in a Set can only occur once. It checks if a
 * value exists in the set object using the SameValueZero algorithm.
 *
 *
 *
 * set.keys() – returns an iterable object for values,
 * set.values() – same as set.keys(), for compatibility with Map,
 * set.entries() – returns an iterable object for entries
 * [value, value], exists for compatibility with Map.
 *
 */

const set1 = new Set();
const set2 = new Set(["a", "b", "c", "d", "d", "e"]);
set2.add("f");
set2.add("g").add("h").add("i").add("j").add("k").add("k");
// the last "k" will not be added to the set object because it already exists

console.log(set2); // Set { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' }

/*
We can remove a value from the Set instance using the delete method,
this method returns a boolean indicating true if a value exists in the
Set object and false indicating that value does not exist.
*/

set2.delete("k");// returns true because "k" exists in the set object
set2.delete("z");// returns false because "z" does not exists in the set object

/*We can check if a specific value exists
in the Set instance using the has method.*/

set2.has("a"); // returns true because "a" exists in the set object
set2.has("z"); // returns false because "z" does not exists in the set object

/*We can get the length of the Set instance using the size property.*/

console.log(set2.size);//10

/*We can delete or remove all the elements in the Set instance using the clear.*/

set2.clear();

console.log(set2); //Set {}

/*We can use the Set object for removing duplicate elements in an array.*/

const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
const uniqueNums = [...new Set(numbers)]; // has a value of [1,2,3,4,5,6,7,8]

console.log(uniqueNums);

const v1 = { name:'A'};
const v2 = { name:'A'};
const set3 = new Set([v1, v2]);

console.log(set3); //Set { { name: 'A' }, { name: 'A' } }

let set = new Set(["oranges", "apples", "bananas"]);

/**
 * Iteration over Set
 */
for (let value of set)
    console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
    console.log(value+' - '+valueAgain);
});
