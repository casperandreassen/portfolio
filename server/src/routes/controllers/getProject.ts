import { Request, Response } from 'express';
import Logger from '../../utils/logger';
import { Project } from '../../models/project.model';

const getProject = async (req: Request, res: Response) => {
  const { projectId } = req.params;

  const project = await Project.findOne({ projectId });

  if (!project) {
    Logger.error(`404 Project with id ${projectId} not found `);
    return res.status(404).json({ message: `Project with ${projectId} not found` });
  }
  Logger.info(`Request sucessfully processed`);
  return res.status(200).json({ data: project });
};

export { getProject };
