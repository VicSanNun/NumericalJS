const assert = require('assert');

const Statistics = require('../src/classes/Statistics');

const data = [2, 3, 4, 5, 6];

describe('Statistics Tests', () => {
    it('Average', () => {
        const result = Statistics.Average(data);

        assert.deepEqual(result, 4);
    });

    it('Variance', () => {
        const result = Statistics.Variance(data);

        assert.deepEqual(result, 2.5);
    });
    
});

