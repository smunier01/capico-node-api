var schemas = {};

schemas.availableInCatalogue = {
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
};

schemas.availableInCatalogueList = {
    type: 'object',
    required: ['data'],
    properties: {
        data: {
            type: 'array',
            items: schemas.availableInCatalogue
        }
    }
};

schemas.createLicenceReturn = {
    type: 'object',
    required: [],
    properties: {
        activationDate: {
            type: 'date'
        },
        folderId: {
            type: 'integer'
        },
        id: {
            type: 'integer'
        },
        serial: {
            type: 'string'
        },
        userId: {
            type: 'integer'
        }
    }
};

module.exports = schemas;
