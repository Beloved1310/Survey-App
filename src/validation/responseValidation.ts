import Joi from 'joi';

export const responseValidate = function validate(input: {}) {
  const schema = Joi.object({
    responses: Joi.array()
      .items(
        Joi.object({
          no: Joi.number().positive().required(),
          answer: Joi.string().required().trim(),
        })
      )
      .required(),
  });
  return schema.validate(input);
};
