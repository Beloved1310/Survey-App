import mongoose from 'mongoose';
import winston from 'winston';
import { logger } from '../utilis/winston';
import { config } from '../config';

const log = logger();
log.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

const { MONGODBURI } = config;

export const dbConnection = async () => {
  const mongooseConnect = await mongoose.connect(MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  if (mongooseConnect) {
    log.info('Connected to Database');
  } else {
    log.info('Not Connected to Database');
  }
};
