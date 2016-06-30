process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var supertest = require('supertest');
var chai = require('chai');
chai.use(require('chai-json-schema'));

var resources = {
    loadSchemas: function (chai) {
        require('./schemas/worktodo-schemas.js')(chai);
        require('./schemas/licences-schemas.js')(chai);
    },
    test: function (chai, conf) {
        require('./tests/worktodo.js')(chai, conf);
        require('./tests/authenticate.js')(chai, conf);
        require('./tests/licences.js')(chai, conf);
    }
};

var conf = {
    auth_user: 'cnorris',
    auth_pwd: 'cnorris1',
    api: supertest('https://smuniervm.excilys.com/jooq')
};

resources.loadSchemas(chai);
resources.test(chai, conf);



