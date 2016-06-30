module.exports = function (chai, conf) {
    describe('Authentication', function () {
        it('correct auth', function (done) {
            conf.api.get('/worktodo/from/0/count/500')
                .auth(conf.auth_user, conf.auth_pwd)
                .expect(200, done);
        });

        it('wrong auth', function (done) {
            conf.api.get('/worktodo/from/0/count/500')
                .auth(conf.auth_user, 'wrong_password')
                .expect(401, done)
        });
    });
};