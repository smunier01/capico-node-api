module.exports = {
    users: {
        type: 'object',
        required: ['id', 'login', 'lastName', 'firstName'],
        properties: {
            id: {
                type: 'integer'
            },
            login: {
                type: 'string'
            },
            lastName: {
                type: 'string'
            },
            firstName: {
                type: 'string'
            }
        }
    }
};

