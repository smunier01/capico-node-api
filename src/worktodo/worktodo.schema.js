var schemas = {};

schemas.assignmentList = {
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

schemas.courseLink = {
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
};

schemas.schedules = {
    type: 'object',
    required: ['assDisplayTime', 'fkAssId', 'fkCouId', 'fkStuId', 'pkTskId', 'tskLabelDisplayTime', 'tskOrder'],
    properties: {
        assDisplayTime: {
            type: 'integer'
        }
        ,
        fkAssId: {
            type: 'integer'
        }
        ,
        fkCouId: {
            type: 'integer'
        }
        ,
        fkStuId: {
            type: 'integer'
        }
        ,
        pkTskId: {
            type: 'integer'
        }
        ,
        tskLabelDisplayTime: {
            type: 'integer'
        }
        ,
        tskOrder: {
            type: 'integer'
        }
    }
};

schemas.worktodo = {
    type: 'object',
    required: ['courseLink', 'schedules'],
    properties: {
        courseLink: {
            type: 'array',
            items: schemas.courseLink
        },
        schedules: {
            type: 'array',
            items: schemas.schedules
        }
    }
};

module.exports = schemas;