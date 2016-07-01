var conf = require('../conf.js');
// var Promise = require('promise');
var chai = require('chai');
var schemas = require('./user.schema.js');

module.exports = {
    getCurrentUser: function (done) {
        conf.api.post('/user/current')
            .auth(conf.auth_user, conf.auth_pwd)
            .expect(200)
            .end(function(err, res) {
                chai.assert.jsonSchema(res.body, schemas.users);
                done(res);
            });
    },
    getCurrentUserPromise: function() {
        var promise = new Promise(function (resolve, reject) {
            conf.api.post('/user/current')
                .auth(conf.auth_user, conf.auth_pwd)
                .expect(200)
                .end(function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        });
        return promise;
    }
};
