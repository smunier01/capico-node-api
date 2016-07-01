var user = require('./user.js');

module.exports = function () {
    describe('users', function () {
        it('should get the current user', function (done) {
            user.getCurrentUser(function(res) {
                // ??
                done();
            });
        });
    });
};