const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should resolve with Successful response from the API', function(done) {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.eql({ data: 'Successful response from the API' });
            done();
        });
    });
});