/*
* Convert a string to spinal case.
* Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    let tmp = str.replace(/[_]+/g, ' ').replace(/[-]+/g, ' ').split('');
    tmp = tmp.map(character => (character === character.toUpperCase()) ? ` ${character}` : character);
    return tmp.join('').trim().replace(/[ ]+/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
