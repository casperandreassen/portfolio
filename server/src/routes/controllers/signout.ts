import { Response, Request } from 'express';

const signoutController = async (req: Request, res: Response) => {
  return res.status(200).cookie('token', 'invalid', { secure: false, httpOnly: true, sameSite: 'lax', expires: new Date() }).json();
};

export { signoutController };
