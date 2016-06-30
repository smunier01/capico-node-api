module.exports = function (chai) {
    chai.tv4.addSchema('schemas.worktodo.assignmentList', {
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
    });

    chai.tv4.addSchema('schemas.worktodo.course-link', {
        type: 'object',
        required: ['couAssOrder', 'couAssPageNumber', 'fkAssId', 'fkCouId', 'pkCouAssId'],
        properties: {
            couAssOrder: {
                type: 'integer'
            },
            couAssPageNumber: {
                type: 'integer'
            },
            fkAssId: {
                type: 'integer'
            },
            fkCouId: {
                type: 'integer'
            },
            pkCouAssId: {
                type: 'integer'
            }
        }
    });

    chai.tv4.addSchema('schemas.worktodo.schedules', {
        type: 'object',
        required: ['assDisplayTime', 'fkAssId', 'fkCouId', 'fkStuId', 'pkTskId', 'tskLabelDisplayTime', 'tskOrder'],
        properties: {
            assDisplayTime: {
                type: 'integer'
            },
            fkAssId: {
                type: 'integer'
            },
            fkCouId: {
                type: 'integer'
            },
            fkStuId: {
                type: 'integer'
            },
            pkTskId: {
                type: 'integer'
            },
            tskLabelDisplayTime: {
                type: 'integer'
            },
            tskOrder: {
                type: 'integer'
            }
        }
    });

    chai.tv4.addSchema('schemas.worktodo', {
        type: 'object',
        required: ['courseLink', 'schedules'],
        properties: {
            courseLink: {
                type: 'array',
                items: {'$ref': 'schemas.worktodo.course-link'}
            },
            schedules: {
                type: 'array',
                items: {'$ref': 'schemas.worktodo.schedules'}
            }
        }
    });
};
