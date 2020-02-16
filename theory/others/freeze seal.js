/**
 * When we use the Object.seal method we CAN change !!!
 * those existing properties, but CAN NOT add & delete.
 */
const object1 = {
    property1: 42
};

Object.seal(object1);
object1.property1 = 33;
object1.property2 = 55;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1);
// expected output: { property1: 33 }

/**
 * When we use the Object.freeze method to an object,
 * that object's properties are immutable meaning we
 * can't change or edit the values of those properties
 */

const obj = {
    prop: 42
};

Object.freeze(obj);

obj.prop = 33; // Throws an error in strict mode
obj.prop2 = 55;


console.log(obj);
// expected output: { prop: 42 }

/**
 * The Object.entries() method returns an array of a given object's
 * own enumerable string-keyed property [key, value] pairs,
 * in the same order as that provided by a for...in loop.
 */

const object3 = {
    a: 'somestring',
    b: 42
};

for (let [key, value] of Object.entries(object3)) {
    console.log(`${key}: ${value}`);
}
// a: somestring
// b: 42

console.log(Object.entries(object3));
//[ [ 'a', 'somestring' ], [ 'b', 42 ] ]