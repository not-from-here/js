/**
 * Immediately invoked function expression
 * is a JavaScript function that runs as soon as it is defined.
 * (function(){
 *
 * })()
 */
// setTimeout

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
    (function(j) {
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    })(i)
}

let result = [];
// for (var i = 0; i < 5; i++) {
//   result.push( function() {
//     console.log(i)
//   } )
// }
//
// result[2]()
// result[4]()

for (var h = 0; h < 5; h++) {
    (function() {
        //Own scope
        var g = h;
        result.push( function() { console.log(g) } )
    })()
}

result[2]();
result[4]();