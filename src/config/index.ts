import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT || 5001,
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
};

export default config;
