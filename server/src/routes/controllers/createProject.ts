import { Request, Response } from 'express';
import Logger from '../../utils/logger';
import { Project } from '../../models/project.model';

const createProject = async (req: Request, res: Response) => {
  console.log(req.body);
  const { author, body, cover, created, name, shortDescription } = req.body;

  const newProject = new Project({
    projectAuthor: author,
    projectName: name,
    projectShortDescription: shortDescription,
    createdDate: created,
    coverUrl: cover,
    documentBody: body,
  });

  await newProject.validate();

  newProject.save((err, project) => {
    if (err) {
      return res.sendStatus(500);
    }
    Logger.info(`Saved!`);
    return res.status(201).send(project._id);
  });
};

export { createProject };
