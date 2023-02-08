import { User } from '../../models/user.model';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Logger from '../../utils/logger';

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send('All input is required');
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user._id, email }, process.env.JWT_TOKEN, { expiresIn: '365d' });

      return res
        .status(200)
        .cookie('token', token, { secure: false, httpOnly: true, sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 })
        .json(user);
    }
    return res.status(400).send('Invalid Credentials');
  } catch (error) {
    Logger.error(error);
  }
};

export { loginController };
