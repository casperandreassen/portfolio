import { Request, Response } from 'express';
import fs from 'fs';
import Logger from '../../utils/logger';

const getImage = async (req: Request, res: Response) => {
  const { imgName } = req.params;

  const path = `${process.cwd()}/assets/${imgName}`;

  if (fs.existsSync(path)) {
    Logger.info(path);
/*     const data = fs.readFileSync(path, 'base64');

    res.send(Buffer.from(data)); */
    res.sendFile(path);
  } else {
    res.sendStatus(404);
  }
};

export { getImage };
