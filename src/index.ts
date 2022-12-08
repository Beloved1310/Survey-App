import winston from 'winston';
import { logger } from './utilis/winston';
import { config } from './config';

import app from './app';

import { dbConnection } from './startup/db';

dbConnection();

const log = logger();

log.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

app.listen(config.PORT, () => {
  log.info(`Web server is running ${config.PORT}`);
});
