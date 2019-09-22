const assert = require('assert');

const Integrate = require('../src/classes/Integrate');

const fn = function(x) {
    return 2*x;
}

describe('Integrate Tests', () => {
    it('Simpson Method', () => {
        const result = Integrate.Simpson(fn, 0, 10);
        
        assert.deepEqual(result, 100);
    });

    it('Trapezoidal Method', () => {
        const result = Integrate.Trapezio(fn, 0, 10);

        assert.deepEqual(result, 100);
    });
});
