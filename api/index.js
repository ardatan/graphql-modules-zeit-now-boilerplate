const { GraphQLModule }  = require('@graphql-modules/core');

const graphqlHTTP = require('express-graphql');

const testModule = new GraphQLModule({
    typeDefs: `
        type Query {
            foo: String
        }
    `,
    resolvers: {
        Query: {
            foo: () => 'FOO',
        }
    }
})

module.exports = graphqlHTTP({
    schema: testModule.schema,
});
