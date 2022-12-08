import { Request, Response } from 'express';
import { surveyValidate } from '../../validation/surveyValidation';
import Survey from '../../model/survey';
import { createSurveyInput } from '../../interfaces/createSurvey';

export const createSurvey = async (req: Request, res: Response) : Promise<{}>=> {
  const { value, error } = surveyValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  const { title, questions }: createSurveyInput = value;
  await Survey.create(value);

  return res.send({
    message: `Survey with  the title : ${title} Successfully created`,
    data: questions,
  });
};
