/*
* You will be provided with an initial array
* (the first argument in the destroyer function),
* followed by one or more arguments.
* Remove all elements from the initial array that are
* of the same value as these arguments.
* */

function destroyer(arr) {
    const args = [...arguments];
    args.shift();
    for (let i = 0; i < args.length; i++) {
        arr = arr.filter((item)=>args[i]!==item);
    }
   // console.log(arr);
    return arr;
}

destroyer([2, 3, 2, 3], 2, 3);
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
    "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");