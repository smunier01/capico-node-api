var conf = require('../conf.js');
var schemas = require('./licence.schema.js');
var chai = require('chai');

module.exports = {
    getAvailableLicencesInCatalogue: function (done) {
        conf.api.get('/licenses/availableLicenseInCatalogue')
            .auth(conf.auth_user, conf.auth_pwd)
            .expect(200)
            .end(function (err, res) {
                chai.assert.jsonSchema(res.body, schemas.availableInCatalogueList);
                done(res);
            });
    },
    getAvailableLicencesForUser: function (done) {
        conf.api.post('/licenses/availableForUser')
            .auth(conf.auth_user, conf.auth_pwd)
            .expect(200)
            .end(function(err, res) {
                // @TODO check result of avaiableForUser
                done(res);
            });
    },
    createLicenceForUser: function(userId, folderId, done) {
        conf.api.post('/licenses/createForUser/'+userId+'/'+folderId)
            .auth(conf.auth_user, conf.auth_pwd)
            .expect(200)
            .end(function(err, res) {
                chai.assert.jsonSchema(res.body, schemas.createLicenceReturn);
                done(res);
            });
    }
};