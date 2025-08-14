import { Router } from 'express';


const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: `Blogger.API is LIVE`,
    api:'version 1.0.0',
  });
});


export default router;
