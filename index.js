const { GraphQLModule }  = require('@graphql-modules/core');

const express = require('express');
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

const app = express();
app.use(graphqlHTTP({
    schema: testModule.schema,
    graphiql: true,
}));

app.listen(process.env.PORT || 4000, () => {
    console.info(`Server listening on: ${process.env.PORT || 4000}`)
});
