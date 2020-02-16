/*console.log(typeof({}));
console.log(typeof([]));
console.log(typeof(new Set));
console.log(typeof(new Map));
let x = null;
console.log(typeof(x));
console.log(typeof(null));
console.log(null===null);//true
console.log(null==undefined);//true
console.log(null===undefined);// а вот тут уже false
console.log(undefined===undefined);//true
console.log(NaN == NaN); //false
console.log(NaN > NaN); //false
console.log(NaN < NaN);  //false … ничего не сходится... стоп, а какой тип данных у NaN?
console.log(typeof(NaN)); // number*/

/**
 * null, undefined, boolean, number, string, object, symbol  ->  types
 */

/*console.log(typeof 0);
console.log(typeof true);
console.log(typeof 'Javascript');
console.log(typeof undefined);
console.log(typeof Math);
console.log(typeof Symbol('JS'));
console.log(typeof null) ;// obj -> error
console.log(typeof function() {});// func
console.log(typeof NaN);*/

// Приведение типов
// let language = 'JavaScript'
// if (language) {
//   console.log('The best language is: ', language)
// }

/**
 * '', 0, null, undefined, NaN, false -> false
 */

/*console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(!!undefined);
//True
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {
}));
console.log(Boolean(' '));*/

// Строки и числа
/*console.log(1 + '2');// string '12'
console.log('' + 1 + 0); // str '10'
console.log('' - 1 + 0);// -1
console.log('3' * '8'); // number 24
console.log(4 + 10 + 'px'); // '14px'
console.log('px' + 5 + 10);// string
console.log('42' - 40); // 2
console.log('42px' - 2);// NaN
console.log(null + 2); // 2
console.log(undefined + 42); // undefined*/

/*// == -> c приведением типов vs === -> без привидения типов
console.log(2 == '2');
console.log(2 === '2');
console.log(undefined == null);
console.log(undefined === null);
console.log('0' == false);
console.log('0' == 0);
console.log(0 == false);*/

/**
 *  == Significantly
 */
/*//true
console.log(false == '');
console.log(false == []); //[]->false
console.log('' == 0);
console.log('' == []);
console.log(0 == []);
//false
console.log(0 == {});//{} -> true
console.log(0 == null); //false ???
console.log(false == {});
console.log('' == {});
console.log(NaN === NaN); //false ???*/

/**
 * Values
 */
/*
let a = 42;
let b = a;
b++;
console.log('a', a);
console.log('b', b);
*/

let a = [1, 2, 3];
let b = a;
b.push(4);

let c = [1, 2, 3, 4];

console.log('a', a);
console.log('b', b);

console.log(a === b);
console.log(a === c);

