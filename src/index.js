'use strict'

const Integrate = require('./classes/Integrate');
const Derivative = require('./classes/Derivative');
const FindRoot = require('./classes/FindRoot');
const Matrix = require('./classes/Matrix');

const fn = function(x) {
    return 2*(x*x);
}

const a = Integrate.Trapezio(fn, 1, 5);
const b = Integrate.Simpson(fn, 1, 5);
const c = Derivative.Diff(fn, 2, 0.000000001);

const result = FindRoot.Bhaskara(1, -10, 24);

const mtrx = [[0, 1, 2], [1, 2, 3], [4, 5, 6]];
Matrix.show(mtrx);

console.log(a);
console.log(b);
console.log(c);
console.log(result);
