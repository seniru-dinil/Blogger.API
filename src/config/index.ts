import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT || 5001,
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

export default config;
