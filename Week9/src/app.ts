/*import * as dotenv from 'dotenv'
dotenv.config({path:'./config.env'});
import express from "express";
import morgan from "morgan";
import router from './routes/peopleRoutes';
import { expressMiddleware } from '@apollo/server/express4';

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log("Development mode...");
}

app.use(express.json()); // Body parser for JSON data

export default app;*/