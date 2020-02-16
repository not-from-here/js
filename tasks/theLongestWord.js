theLongestWord1 = (sentence) => {
    let arr = sentence.replace(',', '')
        .replace('.', '')
        .replace(':', '')
        .replace(';', '')
        .replace('-', '')
        .split(' ');
    arr.sort((a, b) => {
        return a.length - b.length
    });
    return arr[arr.length - 1].length;
};
theLongestWord2 = (sentence) => {
    let max = 0;
    let arr = sentence.replace(',', '')
        .replace('.', '')
        .replace(':', '')
        .replace(';', '')
        .replace('-', '')
        .split(' ');
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    return max;
};
let sentence = "I'm obsessed with you, I don't know how to get rid of this.";
let sentence2 = "I wanna know everything about you, your life, etc.";
let sentence3 = "QWERTY 23";
console.log(theLongestWord1(sentence));
console.log(theLongestWord1(sentence2));
console.log(theLongestWord1(sentence3));
console.log(theLongestWord2(sentence));
console.log(theLongestWord2(sentence2));
console.log(theLongestWord2(sentence3));