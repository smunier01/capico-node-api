process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var chai = require('chai');
chai.use(require('chai-json-schema'));

var startTests = function () {
    require('./src/authenticate/authenticate.test.js')();
    require('./src/user/user.test.js')();
    require('./src/worktodo/worktodo.test.js')();
    require('./src/licence/licence.test.js')();
};

startTests();



