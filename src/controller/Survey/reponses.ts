import { Request, Response } from 'express';
import { responseValidate } from '../../validation/responseValidation';
import Survey from '../../model/survey';
import Responses from '../../model/responses';
import { createResponseInput } from '../../interfaces/createResponse';

export const createResponse = async (req: Request, res: Response) => {
  const { value, error } = responseValidate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  const { responses }: createResponseInput = value;
  const question = await Survey.find(
    { _id: req.params.id },
    { title: 1, questions: 1, _id: 0 }
  );

  if (responses.length !== question[0].questions.length) {
    return res
      .status(409)
      .send({ error: 'Incomplete response, Complete required fields' });
  }
  let surveyResponse: any = [];
  for (let value of responses) {
    question[0].questions.map((questionvalue: any) => {
      if (value.no === questionvalue.no) {
        surveyResponse.push(
          value.no,
          `${questionvalue.questionStatement}, ${value.answer}`
        );
      }
    });
  }
  const saveResponse = {
    user: req.user,
    responses,
    surveyId: req.params.id,
    surveyResponse,
  };

  await Responses.create(saveResponse);

  return res.send({
    message: `You responses was successfully recorded`,
    data: responses,
  });
};
