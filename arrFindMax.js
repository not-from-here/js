arrFindMax1 = (arr) => {
    let resArr = [];
    arr.forEach((item) => {
        resArr.push(item.sort((a, b) => a - b)[item.length - 1]);
    });
    return resArr;
};
arrFindMax2 = (arr) => {
    let resArr = [];
    arr.forEach((item) => {
        resArr.push(Math.max(...item));
    });
    return resArr;
};
arrFindMax3 = (arr) => [].concat(...(arr.map((item) => item.sort((a, b) => a - b).slice(item.length - 1))));
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 4, 3, 2];
let arr3 = [999, 999, 999, 999, 999];
let arr4 = [-1, -2, -3, -4, 0, -88];
let genArr = [];
genArr.push(arr1, arr2, arr3, arr4);
console.log('1 = ' + arrFindMax1(genArr));
console.log('2 = ' + arrFindMax2(genArr));
console.log('3 = ' + arrFindMax3(genArr));