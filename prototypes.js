/**
 * __proto__ - доступ к родительскому типу = Object.getPrototypeOf()
 *
 */

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} says myay`)
};

const cat = new Cat('Kot', 'white');
cat.voice();
console.log(Cat.prototype);
console.log(cat.__proto__ === Cat.prototype);
console.log(cat.constructor);

const p = {year:987};
const myP = Object.create(p);

console.log(myP.year);

