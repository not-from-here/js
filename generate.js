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
    /* console.log(genFunc());
       console.log(x);*/
    return arr;
};
let generator = sequence(0, 2);
/*console.log(generator());
console.log(generator());
console.log(generator());*/
let arr = take(generator, 5);
console.log(arr);