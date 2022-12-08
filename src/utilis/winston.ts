import winston, { Logger } from 'winston';

export const logger = (): Logger => {
  const winstonLogger: Logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'Survey-App' },
    transports: [],
  });
  return winstonLogger;
};
