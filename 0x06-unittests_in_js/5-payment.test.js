const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const assert = chai.assert;

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should log the correct total and be called once', () => {
        sendPaymentRequestToApi(100, 20);
        assert.isTrue(consoleSpy.calledOnceWith('The total is: 120'));
    });

    it('should log the correct total and be called once', () => {
        sendPaymentRequestToApi(10, 10);
        assert.isTrue(consoleSpy.calledOnceWith('The total is: 20'));
    });
});
