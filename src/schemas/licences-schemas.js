module.exports = function (chai) {

    chai.tv4.addSchema('schemas.licences.availableInCatalogue', {
        type: 'object',
        required: ['userLogin'],
        properties: {
            activation: {
                type: 'date'
            },
            downloaded: {
                type: 'integer'
            },
            downloading: {
                type: 'boolean'
            },
            end: {
                type: 'date'
            },
            folderId: {
                type: 'integer'
            },
            id: {
                type: 'string'
            },
            name: {
                type: 'string'
            },
            order: {
                type: 'integer'
            },
            purchased: {
                type: 'boolean'
            },
            start: {
                type: 'date'
            },
            trainingId: {
                type: 'integer'
            },
            userLogin: {
                type: 'string'
            }
        }
    });

    chai.tv4.addSchema('schemas.licences.availableInCatalogueList', {
        type: 'object',
        required: ['data'],
        properties: {
            data: {
                type: 'array',
                items: {'$ref': 'schemas.licences.availableInCatalogue'}
            }
        }
    });

};
