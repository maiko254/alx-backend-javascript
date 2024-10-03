const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4', function() {
        assert.strictEqual(calculateNumber(1.5, 2), 4);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.9, 3), 5);
    });
    it('should return -12', function() {
        assert.strictEqual(calculateNumber(-3.5, -8.2), -11);
    });
    it('should return 1', function() {
        assert.strictEqual(calculateNumber(1, 0), 1);
    });
    it('should return 0', function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
    it('should return 0', function() {
        assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    });
    it('should return 1', function() {
        assert.strictEqual(calculateNumber(0.6, 0.2), 1);
    });
    it('should return NaN', function() {
        assert.strictEqual(calculateNumber('a', 'b'), NaN);
    });
});
