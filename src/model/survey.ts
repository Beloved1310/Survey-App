import { model, Schema, Model, Document } from 'mongoose';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { config }  from '../config';


const surveySchema : Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    questions: [{
      no: {
       type: Number,
        required: true,
      },
      questionStatement: {
        type: String,
        required: true
     
    }
  }],
  },
  { timestamps: true }
);


export default mongoose.model('Survey', surveySchema);