import express from 'express';
import config from '@/config';
import cors from 'cors';
import logger from './util/logger';
import router from './routes';

const app = express();
const PORT = config.PORT;

app.use(cors());
app.use(express());
app.use(router);

app.listen(PORT, () => {
  logger.info(`server is running on  http://localhost:${PORT}`);
});
