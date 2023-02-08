import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { User } from '../../models/user.model';

type User = {
  email: string;
  firstName: string;
  lastName: string;
  role: number;
};

const verifyController = (req: Request, res: Response) => {
  const { token } = req.cookies;

  if (token != undefined) {
    jwt.verify(token, process.env.JWT_TOKEN, async (err, decoded) => {
      if (err) {
        res.status(401).send();
      } else {
        console.log(decoded);
        const user = await User.findOne({ _id: decoded.userId }, 'email firstName lastName role');

        res.status(200).json(user);
      }
    });
  }
};

export { verifyController };
