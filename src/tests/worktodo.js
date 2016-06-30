module.exports = function (chai, conf) {
    describe('worktodo', function () {
        it('get', function (done) {
            conf.api.get('/worktodo')
                .auth(conf.auth_user, conf.auth_pwd)
                .expect(200)
                .end(function (err, res) {
                    chai.assert.jsonSchema(res.body, 'schemas.worktodo');
                    done();
                });
        });

        it('get from count', function (done) {
            conf.api.get('/worktodo/from/0/count/500')
                .auth(conf.auth_user, conf.auth_pwd)
                .expect(200)
                .end(function (err, res) {
                    chai.assert.jsonSchema(res.body.data, chai.tv4.getSchema('schemas.worktodo.assignmentList'));
                    done();
                });
        });
    });
};