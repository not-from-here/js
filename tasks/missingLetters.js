/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    let res = alph.substr(alph.indexOf(str[0]), str.length);
    for (let i = 0; i < str.length; i++) {
        if(res[i]!==str[i])
            return res[i];
    }
    return undefined;
}

fearNotLetter("abce");