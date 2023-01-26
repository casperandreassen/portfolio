import { Request, Response } from 'express';
import { Project } from '../../models/project.model';

const getProjects = async (req: Request, res: Response) => {
  const projects = await Project.find().exec();

  return res.status(200).json({ data: projects });
};

export { getProjects };
