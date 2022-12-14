import path from 'path';
import { config as dotenv } from 'dotenv';
import { IConfig } from './interfaces/iConfig';

const { env } = process;

dotenv({
  path: path.resolve(__dirname, '../.env'),
});

export const config: IConfig = {
  JWT: <string>env.JWT_KEY,
  PORT: parseInt(env.PORT!, 10) || 7000,
  MONGODBURI: <string>env.MONGODBURI,
};
