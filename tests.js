console.log(typeof({}));
console.log(typeof([]));
console.log(typeof(new Set));
console.log(typeof(new Map));
let x = null;
console.log(typeof(x));
console.log(null==undefined);//true
console.log(null===undefined);// а вот тут уже false
console.log(NaN == NaN); //false
console.log(NaN > NaN); //false
console.log(NaN < NaN);  //false … ничего не сходится... стоп, а какой тип данных у NaN?
console.log(typeof(NaN)); // number