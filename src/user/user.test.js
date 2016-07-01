var user = require('./user.js');

describe('users', function () {
    it('should get the current user', function (done) {
        user.getCurrentUser(function (res) {
            // ??
            done();
        });
    });
});
