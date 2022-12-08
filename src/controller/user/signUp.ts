import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../model/user';
import { signUpValidate } from '../../validation/signUpValidation';
import { userInputSignUp } from '../../interfaces/user';

export const signUp = async (req: Request, res: Response) => {
  const { value, error } = signUpValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const { fullname, email, password } = value;

  const createdUser: userInputSignUp = {
    fullname,
    email,
    password,
  };

  const user = await User.findOne({ email });
  if (user)
    return res
      .status(400)
      .send({ error: 'User already registered.Proceed to login' });
  const salt = await bcrypt.genSalt(10);
  createdUser.password = await bcrypt.hash(createdUser.password, salt);
  const savedUser = await User.create(createdUser);
  if (!savedUser) return res.status(422).send({ error: 'Unsaved User' });
  const data = { fullname, email };
  return res.send({
    message: 'Welcome! You have successfully sign up. Proceed to login',
    data,
  });
};
