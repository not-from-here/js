Array.prototype.map = handMap;

function handMap(callbackFunc) {
    let array = [];
    if (Array.isArray(this) || this.length || typeof callbackFunc === 'function') {
        array = this;
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callbackFunc(array[i], i, array);
    }
    return newArray;
}

const testArr = [1, 'io', {}, [], 89, null];
testArr['name'] = 'Jane';
console.log(testArr);
const newArr = testArr.map((value, index, array) => {
    return `Value: ${value}  Key: ${index} In array: ${array}`;
});
console.log(newArr);
