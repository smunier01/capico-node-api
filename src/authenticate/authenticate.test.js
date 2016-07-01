var conf = require('../conf.js');

module.exports = function (chai) {
    describe('Authentication', function () {
        it('should correctly authenticate', function (done) {
            conf.api.get('/worktodo/from/0/count/500')
                .auth(conf.auth_user, conf.auth_pwd)
                .expect(200, done);
        });

        it('should fail authenticate', function (done) {
            conf.api.get('/worktodo/from/0/count/500')
                .auth(conf.auth_user, 'wrong_password')
                .expect(401, done)
        });
    });
};

