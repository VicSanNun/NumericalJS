const Integrate = require('./classes/Integrate');
const Derivative = require('./classes/Derivative');
const FindRoot = require('./classes/FindRoot');

const fn = function(x) {
    return 2*(x*x);
}

const a = Integrate.Trapezio(fn, 1, 5);
const b = Integrate.Simpson(fn, 1, 5);
const c = Derivative.Diff(fn, 2, 0.000000001);

const result = FindRoot.Bhaskara(1, -10, 24);

console.log(a);
console.log(b);
console.log(c);
console.log(result);
