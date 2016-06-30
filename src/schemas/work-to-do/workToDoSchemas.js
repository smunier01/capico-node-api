module.exports = function(chai) {
    chai.tv4.addSchema('courseLinkSchema', {
        type: 'object',
        required: ['couAssOrder', 'couAssPageNumber', 'fkAssId', 'fkCouId', 'pkCouAssId'],
        properties: {
            couAssOrder: {
                type: 'number'
            },
            couAssPageNumber: {
                type: 'number'
            },
            fkAssId: {
                type: 'number'
            },
            fkCouId: {
                type: 'number'
            },
            pkCouAssId: {
                type: 'number'
            }
        }
    });

    chai.tv4.addSchema('schedulesSchema', {
        type: 'object',
        required: ['assDisplayTime', 'fkAssId', 'fkCouId', 'fkStuId', 'pkTskId', 'tskLabelDisplayTime', 'tskOrder'],
        properties: {
            assDisplayTime: {
                type: 'number'
            },
            fkAssId: {
                type: 'number'
            },
            fkCouId: {
                type: 'number'
            },
            fkStuId: {
                type: 'number'
            },
            pkTskId: {
                type: 'number'
            },
            tskLabelDisplayTime: {
                type: 'number'
            },
            tskOrder: {
                type: 'number'
            }
        }
    });

    chai.tv4.addSchema('workToDoSchema', {
        type: 'object',
        required: ['courseLink', 'schedules'],
        properties: {
            courseLink: {
                type: 'array',
                items: {'$ref': 'courseLinkSchema'}
            },
            schedules: {
                type: 'array',
                items: {'$ref': 'schedulesSchema'}
            }
        }
    });
};
