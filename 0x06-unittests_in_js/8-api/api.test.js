// Used to test the API in 8-api/api.js
const expect = require('chai').expect;
const request = require('request');
const app = require('./api');


describe('Index page', function () {
    it('should respond with message "Welcome to the payment system" and status 200', function (done) {
        request('http://localhost:7865', function (error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
    it('should respond with status 200', function (done) {
        request('http://localhost:7865', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
