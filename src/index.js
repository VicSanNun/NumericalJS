const Integrate = require('./classes/Integrate');
const Derivative = require('./classes/Derivative');

const fn = function(x) {
    return 2*(x*x);
}

const a = Integrate.Trapezio(fn, 1, 5);
const b = Integrate.Simpson(fn, 1, 5);
const c = Derivative.Diff(fn, 2, 0.000000001);

console.log(a);
console.log(b);
console.log(c);