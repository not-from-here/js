Array.prototype.reduce = handReduce;

function handReduce(callbackFunc, initValue) {
    let arr = [];
    if (typeof callbackFunc === "function" && Array.isArray(this) && this.length) {
        arr = this;
    }
    let i;
    initValue === undefined ? i = 1 : i = 0;
    initValue === undefined ? initValue = this[0] : initValue;
    let res = initValue;
    for (; i < arr.length; i++) {
        res = callbackFunc(res, arr[i], i, arr);
    }
    return res;
}

const strs = [1, 2, 3, 4, 5];
const result = strs.reduce((acc, currentStr) => acc + currentStr,100);
console.log(result);

