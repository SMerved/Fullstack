import app from './app';
import mongoose, { mongo } from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser, { json } from 'body-parser';
import express from 'express';
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import {typeDefs} from './schema';
import Mutation from './Mutation';
import Query from './Query';
import router from './routes/peopleRoutes';
import people from './data';

interface MyContext {
  token?: string;
}

const resolvers = {
  Query,
  Mutation
};

const DB = process.env.DATABASE_DEV!.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD!,
);

const httpServer = http.createServer(app)

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
(async () => {
  try {
      await server.start();
      app.use("/graphql" ,expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token, people }),
      }),)
      app.use('/api/users', router);
      console.log(`🚀 Users API ready at http://localhost:4000/api/users`);
  } catch (e) {
      console.log(e)
  }
})();

mongoose.connect(DB, {
}).then(() => console.log('DB connection successful!'));

const port = process.env.PORT;
(async () => {
  try {
      const text = await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
      console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  } catch (e) {
      console.log(e)
  }
})();