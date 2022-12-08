import { model, Schema, Model, Document } from 'mongoose';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { config } from '../config';

export interface UserInput {
  fullname: string;
  email: string;
  password: string;
}

export interface UserDocument extends UserInput, Document {
  fullname: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const UserSchema: Schema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

UserSchema.methods.generateAuthToken = function generatedToken() {
  const user = this as UserDocument;
  const token = jwt.sign(
    {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT as jwt.Secret
  );
  return token;
};

export default mongoose.model('User', UserSchema);
