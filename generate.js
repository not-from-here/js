sequence = (start = 0, step = 1) => {
    let res = start - step;
    return () => {
       return  res += step;
    }
};
take = (genFunc, x) => {
    let arr = [];
    for (let i = 0; i < x; i++) {
        arr[i] = genFunc();
    }
    return arr;
};
let generator = sequence(0, 2);
let arr = take(generator, 5);
console.log(arr);