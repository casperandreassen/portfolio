import { Router } from 'express';
import { registerController } from './controllers/register';
import { loginController } from './controllers/login';
import { verifyController } from './controllers/verify';
import { signoutController } from './controllers/signout';

const authRouter = () => {
  const router = Router();

  router.post('/register', registerController);

  router.post('/login', loginController);

  router.post('/signout', signoutController);

  router.post('/verify', verifyController);

  return router;
};

export { authRouter };
