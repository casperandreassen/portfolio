import { Router } from 'express';
import { authRouter } from './auth.route';
import { createProject } from './controllers/createProject';
import { getImage } from './controllers/getImage';
import { getProject } from './controllers/getProject';
import { getProjects } from './controllers/getProjects';

const projectRouter = () => {
  const router = Router();

  router.get('/getProjects', getProjects);

  router.get('/getProject/:id', getProject);

  router.post('/createProject', createProject);

  router.get('/img/:imgName', getImage);

  return router;
};

export { projectRouter };
