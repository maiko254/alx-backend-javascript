const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const app = require('./api');

describe('api', function () {
    it('should respond with message "Welcome to the payment system" and status 200', function (done) {
        request('http://localhost:7865', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
