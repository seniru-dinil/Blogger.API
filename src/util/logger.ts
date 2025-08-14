import { createLogger, format, transports } from 'winston';
import config from '@/config';

const { combine, timestamp, printf, colorize, errors } = format;


const customFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

const logger = createLogger({
  level: config.LOG_LEVEL, 
  format: combine(
    colorize(),              
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    customFormat
  ),
  transports: [    
    new transports.Console(),    
    new transports.File({ filename: 'logs/error.log', level: 'error' }),    
    new transports.File({ filename: 'logs/combined.log' })
  ],
  exitOnError: false, // Don't exit on handled exceptions
});

export default logger;
