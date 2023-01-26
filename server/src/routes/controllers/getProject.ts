import { Request, Response } from 'express';
import { Project } from '../../models/project.model';

const getProject = async (req: Request, res: Response) => {
  const { projectId } = req.params;

  const project = await Project.findOne({ projectId }, (err, obj) => {
    console.log(obj);
  });

  if (!project) {
    return res.status(404).json({ message: `Project with ${projectId} not found` });
  }

  return res.status(200).json({ data: project });
};

export { getProject };
