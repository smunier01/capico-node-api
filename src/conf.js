process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var supertest = require('supertest');

module.exports = {
    auth_user: 'cnorris',
    auth_pwd: 'cnorris1',
    api: supertest('https://smuniervm.excilys.com/jooq')
};