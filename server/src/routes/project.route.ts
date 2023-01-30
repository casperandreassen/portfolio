import { Router } from 'express';
import { authRouter } from './auth.route';
import { getProject } from './controllers/getProject';
import { getProjects } from './controllers/getProjects';

const projectRouter = () => {
  const router = Router();

  router.get('/getProjects', getProjects);

  router.get('/getProject/:projectId', getProject);

  return router;
};

export { projectRouter };
