import { Router } from 'express';
import { sendMail } from './controllers/sendMail';

const contactRouter = () => {
  const router = Router();

  router.post('/sendMail', sendMail);

  return router;
};

export { contactRouter };
