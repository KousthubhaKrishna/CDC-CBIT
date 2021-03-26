const swaggerAutogen = require('swagger-autogen')()

const outputFile = './server/swagger_output.json'
const endpointsFiles = ['./server/index.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "CDC-CBIT API",
        description: "The following is the list of all the endpoints available for different end-users."
    },
    host: "localhost:3080",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
    ],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",       // can be "header", "query" or "cookie"
            name: "X-API-KEY",  // name of the header, query parameter or cookie
            description: "any description..."
        }
    },
    definitions: {
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index')           // Project's root file
})