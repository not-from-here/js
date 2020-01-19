/*Scope - видимость опреднлённых элементов
Scope in JavaScript is the area where we have valid access
to variables or functions
JavaScript has three types of Scopes.

Global Scope - variables or functions declared in the global namespace
are in the global scope and therefore is accessible everywhere in our code.

Function Scope - Function Scope - variables,functions and parameters declared
 within a function are accessible inside that function but not outside of it.

Block Scope - variables (let,const) declared within a
block {} can only be access within it.

Scope is also a set of rules for finding variables.
If a variable does not exist in the current scope it look ups
and searches for a variable in the outer scope and
if does not exist again it looks up again until it reaches the global scope
if the variable exists then we can use it if not it throws an error.
It searches for the nearest variable and it stops searching or looking up
once it finds it. This is called Scope Chain.
*/

//Context - пределяет как ф-я была вызвана ( this )

const person = {
    surname: 'Старк',
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
};
const john = { surname: 'Сноу' };

person.knows('все', 'Арья');

/**
 * The call invokes a function specifying the this or the "owner"
 * object of that function on that time of invocation.
 * !!! arguments separating them with a comma , for every argument
 * call immediate
 */
person.knows.call(john,'nothing','John');
/**
 * arguments must be in array
 */
person.knows.apply(john,['nothing','John']);
/**
 * RETURN FUNC
 */
const b_func = person.knows.bind(john);
b_func('don\'t','James');
b_func('don\'t','Sam');

function Cat(color) {
    this.color = color;
    console.log('This', this);
    ( () => console.log('Arrow this', this) )()
}

new Cat('red');

/**
 * First, the expression b = 0 evaluated and in this example b
 * is not declared. So, The JS Engine makes a global variable b
 * outside this function after that the return value of the expression
 * b = 0 would be 0 and it's assigned to
 * the new local variable a with a let keyword.
 */
function myFunc() {
    let a = b = 0;
}

myFunc();
console.log('B - '+b);