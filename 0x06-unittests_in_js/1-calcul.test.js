const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('should return 4', function() {
        assert.strictEqual(calculateNumber('SUM', 1.5, 2), 4);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber('SUM', 1.9, 3), 5);
    });
    it('should return -11', function() {
        assert.strictEqual(calculateNumber('SUM', -3.5, -8.2), -11);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', -9.3, -15), 6);
    });
    it('should return 10', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 20.5, 11), 10);
    });
    it('should return -1', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.5), -2);
    });
    it('should return 2', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 8, 4), 2);
    });
    it('should return 2', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 8, 3.5), 2);
    });
    it('should return 2.6666666666666665', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 8, 3.4), 2.6666666666666665);
    });
    it('should return Error', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 8, 0), 'Error');
    });
});