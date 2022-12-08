import mongoose from 'mongoose';
import { config } from '../config';
// const debug = require('debug')('app');

const { MONGODBURI } = config;

export const dbConnection = async () => {
  const mongooseConnect = await mongoose.connect(MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  if (mongooseConnect) {
    console.log('Connected to Database');
  } else {
    console.log('Not Connected to Database');
  }
};
