import Joi from 'joi';

export const surveyValidate = function validate(input : {}) {
  const schema = Joi.object({
    title:Joi.string().min(5).trim().required(),
    questions: Joi.array()
      .items(
        Joi.object({
          no: Joi.number().positive().required(),
          questionStatement: Joi.string().required().trim(),
        })
      )
      .required(),
  });
  return schema.validate(input);
};