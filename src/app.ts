import express, { Application, Request, response, Response } from 'express';
import user from './routes/user';
import survey from './routes/survey';
import responses from './routes/responses';

import cors from 'cors';
import { config } from 'dotenv';
config();

declare global {
  namespace Express {
    interface Request {
      user?: {};
    }
  }
}

const app: Application = express();

app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', user);
app.use('/survey', survey);
app.use('/response', responses);

export default app;
