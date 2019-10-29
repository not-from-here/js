reverseString1 = (str) => {
    return Array.from(str).reverse().join('');
};
reverseString2 = (str) => {
    return str.split('').reverse().join('');
};
reverseString3 = (str) => {
    let newString = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newString += str.charAt(i);
    }
    return newString;
};

let str = 'qwerty';
console.log(reverseString1(str));
console.log(reverseString2(str));
console.log(reverseString3(str));