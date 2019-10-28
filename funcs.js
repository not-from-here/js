sum = (a) => {
    return (b) => {
        return a + b;
    }
};
let sum1 = sum(-255)(6);
console.log(sum(67)(2));
console.log(sum1);
