import { Router } from 'express';
import { authRouter } from './auth.route';
import { getImage } from './controllers/getImage';
import { getProject } from './controllers/getProject';
import { getProjects } from './controllers/getProjects';

const projectRouter = () => {
  const router = Router();

  router.get('/getProjects', getProjects);

  router.get('/getProject/:projectId', getProject);

  router.post('/img', getImage);

  return router;
};

export { projectRouter };
