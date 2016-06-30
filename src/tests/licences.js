module.exports = function(chai, conf) {
    describe('licences', function () {
        xit('get available licences for user', function (done) {
            conf.api.get('/licenses/availableForUser')
                .auth(conf.auth_user, conf.auth_pwd)
                .expect(200, done)
        });

        it('get available licences in catalogue', function (done) {
            conf.api.get('/licenses/availableLicenseInCatalogue')
                .auth(conf.auth_user, conf.auth_pwd)
                .expect(200)
                .end(function (err, res) {
                    chai.assert.jsonSchema(res.body, chai.tv4.getSchema('schemas.licences.availableInCatalogueList'));
                    done();
                });
        });
    });
};