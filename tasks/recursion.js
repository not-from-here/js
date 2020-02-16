const factorial = n => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
console.log(factorial(5));  //120
console.log(factorial(1));  //1
console.log(factorial(0));  //1

const fibonacci = n => {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};
console.log(fibonacci(4));//3
console.log(fibonacci(1));//1
console.log(fibonacci(7));//13

function mygcd(x, y) {
    return y === 0 ? x : mygcd(y, x % y)//?
}

console.log(mygcd(30, 12));

// return the magic index
function findMagic(arr) {
    let i = arr.find((item, index) => {
        return item === index
    });
    if (i >= 0)
        return i;
    else
        return -1;
}

/*// return the magic index
function findMagic(arr){
  if(!arr.length) return -1;
  if(arr[arr.length - 1] == arr.length - 1)
    return arr.length - 1;
  return findMagic(arr.slice(0, arr.length-1));
}*/
console.log(findMagic([1, 2, 2, -8, 'u']));
console.log(findMagic([6, 5, 83, 5, 3, 18]));