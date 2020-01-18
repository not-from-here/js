sum = (a) => {
    return (b) => {
        return a + b;
    }
};
let sum1 = sum(-255)(6);
console.log(sum(67)(2));
console.log(sum1);

let name = "John";
sayHi(); // John
function sayHi() {
  /*  name = 'Ella';*/
    console.log("Hi, " + name);
}
name = "Jane"; // (*)
sayHi(); // Jane
name = "Pete"; // (*)
/*console.log(name);*/
sayHi(); // Pete