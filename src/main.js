process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var chai = require('chai');
chai.use(require('chai-json-schema'));

var startTests = function (chai) {
    require('./authenticate/authenticate.test.js')(chai);
    require('./user/user.test.js')(chai);
    // require('./worktodo/worktodo.test.js')(chai);
    require('./licence/licence.test.js')(chai);
};

startTests(chai);



