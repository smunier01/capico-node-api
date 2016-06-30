process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var chai = require('chai');
var init = require('./schemas');
chai.use(require('chai-json-schema'));
console.log(init);
init.init(chai);

var supertest = require('supertest');
var api = supertest('https://smuniervm.excilys.com/jooq');

var auth_user = 'cnorris';
var auth_pwd = 'cnorris1';

var assignmentListSchema = {
    type: 'array',
    required: ['id', 'position', 'name'],
    properties: {
        id: {
            type: 'number'
        },
        position: {
            type: 'number'
        },
        name: {
            type: 'string'
        }
    }
};

describe('Authentication', function () {
    it('correct auth', function (done) {
        api.get('/worktodo/from/0/count/500')
            .auth(auth_user, auth_pwd)
            .expect(200, done);
    });

    it('wrong auth', function (done) {
        api.get('/worktodo/from/0/count/500')
            .auth(auth_user, 'wrong_password')
            .expect(401, done)
    });
});

describe('worktodo', function () {
    it('get', function (done) {
        api.get('/worktodo')
            .auth(auth_user, auth_pwd)
            .expect(200)
            .end(function (err, res) {
                chai.assert.jsonSchema(res.body, 'workToDoSchema');
                done();
            });
    });

    it('get from count', function (done) {
        api.get('/worktodo/from/0/count/500')
            .auth(auth_user, auth_pwd)
            .expect(200)
            .end(function (err, res) {
                chai.assert.jsonSchema(res.body.data, assignmentListSchema);
                done();
            });
    });
});



