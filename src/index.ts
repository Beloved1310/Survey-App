import Debug from 'debug';
const debug = Debug('app');
// const debug = require('debug')('app');
import { config } from './config';

import app from './app';

import { dbConnection } from './startup/db';

dbConnection();
app.listen(config.PORT, () => {
  debug(`Web server is running ${config.PORT}`);
  console.log(`Web server is running ${config.PORT}`);
});
