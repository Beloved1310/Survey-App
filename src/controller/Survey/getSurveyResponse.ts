import { Request, Response } from 'express';
import Responses from '../../model/responses';

export const getSurveyResponse = async (req: Request, res: Response) => {
  const surveyResponse = await Responses.find(
    {},
    { _id: 1, surveyResponse: 1, user: 1 }
  );

  return res.send({ message: `Survey Responses`, data: surveyResponse });
};
