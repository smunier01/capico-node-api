var user = require('../user/user.js');
var licence = require('./licence.js');

describe('licences', function () {
    it('should get available licences for user', function (done) {
        licence.getAvailableLicencesForUser(function (res) {
            // ??
            done();
        });
    });

    it('should get available licences in catalogue', function (done) {

        licence.getAvailableLicencesInCatalogue(function (res) {
            // ??
            done();
        });
    });

    it('should create licence for the current user', function (done) {
        user.getCurrentUser(function (res) {
            var userId = res.body.id;
            var folderId = 0;
            licence.createLicenceForUser(userId, folderId, function (res) {
                done();
            });
        });
    });

    xit('should create licence for the current user (3)', function (done) {
        user.getCurrentUserPromise()
            .then(res => {
                console.log('hello');
                console.log(res.body.id);
            }, err => {
                console.log('err');
            })
            .finally(() => done());
    });

});
