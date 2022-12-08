import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../model/user';
import { signInValidate } from '../../validation/signInValidation';
import { userInput } from '../../interfaces/user';

export const signIn = async (req: Request, res: Response) => {
  const { value, error } = signInValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  const { email, password }: userInput = value;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).send({ error: 'username or password not found' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).send({ error: 'username or password not found ' });

  const token = user.generateAuthToken();
  res.header('x-auth-token', token);
  const data = { email, token };
  return res.send({ message: 'Login Successful', data });
};
