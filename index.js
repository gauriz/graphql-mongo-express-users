const express = require('express');
const ApolloServer = require('apollo-server-express').ApolloServer;
const resolvers = require('./graphQL/resolvers.graphql');
const typeDefs = require('./graphQL/schema.graphql');
require('dotenv').config();
const env = process.env;

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

app.listen({ port: env.PORT }, () => {
    console.log(`Server is running at http://localhost:8080}`);
});