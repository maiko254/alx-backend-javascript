const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const app = require('./api');

describe('Index page', function () {
    it('should respond with message "Welcome to the payment system" and status 200', function (done) {
        request('http://localhost:7865', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', function () {
    it('should respond with message "Payment methods for cart 1" and status 200', function (done) {
        request('http://localhost:7865/cart/1', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 1');
            done();
        });
    });
    it('should respond with status 404', function (done) {
        request('http://localhost:7865/cart/mycart', function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
