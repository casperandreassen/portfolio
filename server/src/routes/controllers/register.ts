import { User } from '../../models/user.model';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Logger from '../../utils/logger';

const registerController = async (req: Request, res: Response) => {
  try {
    const { authToken, email, firstName, lastName, password, role } = req.body;

    if (!(email && password && firstName && lastName && role)) {
      res.status(400).send('All input is required');
    }

    if (authToken != process.env.ADMIN_TOKEN) {
      return res.status(401).send('You need to provide admin authToken to register for now.');
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send('User already exists');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: encryptedPassword,
      role,
    });

    const token = jwt.sign({ userId: user._id, email }, process.env.JWT_TOKEN, { expiresIn: '365d' });

    res.status(201).json(user);
  } catch (error) {
    Logger.error(error);
  }
};

export { registerController };
