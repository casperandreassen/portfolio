import { Router } from 'express';
import { getProject } from './controllers/getProject';
import { getProjects } from './controllers/getProjects';

const projectRouter = () => {
  const router = Router();

  router.get('/projects', getProjects);

  router.get('/project/:projectId', getProject);

  return router;
};

export { projectRouter };
