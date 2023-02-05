import { Request, Response } from 'express';
import fs from 'fs';
import Logger from '../../utils/logger';

const getImage = async (req: Request, res: Response) => {
  const { imgId, mode, projectId } = req.body;

  const path = `${process.cwd()}/assets/${projectId}-${mode}-${imgId}.png`;

  if (fs.existsSync(path)) {
    Logger.info(path);
    const data = fs.readFileSync(path, 'base64');

    res.send(Buffer.from(data));
  } else {
    res.sendStatus(404);
  }
};

export { getImage };
