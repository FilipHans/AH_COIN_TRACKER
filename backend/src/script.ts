import express from "express";
import dotenv from 'dotenv';
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'

dotenv.config();
const port = 3000;
const app = express();

app.use(express.json());

const server = new ApolloServer({typeDefs, resolvers, introspection: true});

server.start().then(_e => {
    app.use("/graphql", expressMiddleware(server))
})



app.listen(port, () => {
    console.log(`running on port: ${port}`);
})