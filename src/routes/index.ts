import { Router } from 'express';
import config from '@/config';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: `Blogger.API is LIVE`,
  });
});


export default router;
