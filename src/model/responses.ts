import { model, Schema, Model, Document } from 'mongoose';
import mongoose from 'mongoose';

const responsesSchema: Schema = new mongoose.Schema(
  {
    user: {
      _id: mongoose.Types.ObjectId,
      fullname: String,
      email: String,
    },
    responses: [
      {
        no: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
      },
    ],
    surveyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Survey',
    },
    surveyResponse: Array,
  },
  { timestamps: true }
);

export default mongoose.model('Responses', responsesSchema);
