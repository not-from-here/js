sequence = (start = 0, step = 1) => {
    let res = start - step;
    return () => {
       return  res += step;
    }
};

generator = sequence(10,3);
console.log(generator());
console.log(generator());
console.log(generator());