import express from 'express';
import config from '@/config';
import cors from 'cors';
import logger from './util/logger';
import router from './routes';
import type { CorsOptions } from 'cors';

const app = express();
const PORT = config.PORT;

const corsOption: CorsOptions = {
  origin(origin, callbak) {
    callbak(new Error('CORS Error'), false);
  },
};

app.use(cors(corsOption));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  logger.info(`server is running on  http://localhost:${PORT}`);
});
