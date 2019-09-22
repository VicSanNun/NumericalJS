const assert = require ('assert');

const FindRoot = require('../src/classes/FindRoot');

describe('Find Root Tests', () => {
    it('Bhaskara Method', () => {
        const result = FindRoot.Bhaskara(2, -7, 3);
        console.log(result);
    });
});