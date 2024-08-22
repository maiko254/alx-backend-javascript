const chai = require('chai');
const calculateNumber = require('./1-calcul');

const expect = chai.expect;

describe('calculateNumber', function() {
    it('should return 4', function() {
        expect(calculateNumber('SUM', 1.5, 2)).to.equal(4);
    });
    it('should return 5', function() {
        expect(calculateNumber('SUM', 1.9, 3)).to.equal(5);
    });
    it('should return -11', function() {
        expect(calculateNumber('SUM', -3.5, -8.2)).to.equal(-11);
    });
    it('should return 6', function() {
        expect(calculateNumber('SUBTRACT', -9.3, -15)).to.equal(6);
    });
    it('should return 10', function() {
        expect(calculateNumber('SUBTRACT', 20.5, 11)).to.equal(10);
    });
    it('should return -1', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 2.5)).to.equal(-2);
    });
    it('should return 2', function() {
        expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });
    it('should return 2', function() {
        expect(calculateNumber('DIVIDE', 8, 3.5)).to.equal(2);
    });
    it('should return 2.6666666666666665', function() {
        expect(calculateNumber('DIVIDE', 8, 3.4)).to.equal(2.6666666666666665);
    });
    it('should return Error', function() {
        expect(calculateNumber('DIVIDE', 8, 0)).to.equal('Error');
    });
});
