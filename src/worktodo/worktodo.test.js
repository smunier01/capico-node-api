var worktodo = require('./worktodo.js');

module.exports = function () {
    describe('worktodo', function () {
        it('should get work to do', function (done) {
            worktodo.getWorkToDo(function(res) {
                done();
            });
        });

        it('should get assignment list', function (done) {
            var from = 0;
            var count = 500;
            worktodo.getAssignmentList(from, count, function (res) {
               done();
            });
        });
    });
};