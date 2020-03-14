/*
* Compare two arrays and return a new array with any items only found
* in one of the two given arrays, but not both. In other words, return
* the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
    const newArr = [];
    const set1 = new Set(arr1);
    for (let i = 0; i < arr2.length; i++) {
        if (!set1.delete(arr2[i])) {
            newArr.push(arr2[i])
        }
    }
    newArr.push(...set1);
    return newArr;
}

diffArray([1, 2, 3, 5, 78], [1, 2, 3, 4, 5]);