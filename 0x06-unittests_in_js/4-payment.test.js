const chai = require('chai');
const assert = chai.assert;
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    it('should return 120', function() {
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        assert(consoleSpy.calledOnceWithExactly('The total is: 120'));
        consoleSpy.restore();
    });
    it('should call Utils.calculateNumber with the correct arguments', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
        calculateNumberSpy.restore();
    });
    it('should return 10 and called once with the exact arguments', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));
        assert(consoleSpy.calledOnceWithExactly('The total is: 10'));
        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
