var conf = require('../conf.js');
var chai = require('chai');
chai.use(require('chai-json-schema'));
var schemas = require('./worktodo.schema.js');

module.exports = {
    getWorkToDo: function (done) {
        conf.api.get('/worktodo')
            .auth(conf.auth_user, conf.auth_pwd)
            .expect(200)
            .end(function (err, res) {
                chai.assert.jsonSchema(res.body, schemas.worktodo);
                done(res);
            });
    },
    getAssignmentList: function (from, count, done) {
        conf.api.get('/worktodo/from/' + from + '/count/' + count)
            .auth(conf.auth_user, conf.auth_pwd)
            .expect(200)
            .end(function (err, res) {
                chai.assert.jsonSchema(res.body.data, schemas.assignmentList);
                done();
            });
    }
};
