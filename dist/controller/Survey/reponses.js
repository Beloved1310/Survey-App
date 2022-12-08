"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = void 0;
const tslib_1 = require("tslib");
const responseValidation_1 = require("../../validation/responseValidation");
const survey_1 = tslib_1.__importDefault(require("../../model/survey"));
const responses_1 = tslib_1.__importDefault(require("../../model/responses"));
const createResponse = async (req, res) => {
    const { value, error } = (0, responseValidation_1.responseValidate)(req.body);
    if (error)
        return res.status(400).send({ error: error.details[0].message });
    const { responses } = value;
    const question = await survey_1.default.find({ _id: req.params.id }, { title: 1, questions: 1, _id: 0 });
    if (responses.length !== question[0].questions.length) {
        return res
            .status(409)
            .send({ error: 'Incomplete response, Complete required fields' });
    }
    let surveyResponse = [];
    for (let value of responses) {
        question[0].questions.map((questionvalue) => {
            if (value.no === questionvalue.no) {
                surveyResponse.push(value.no, `${questionvalue.questionStatement}, ${value.answer}`);
            }
        });
    }
    const saveResponse = {
        user: req.user,
        responses,
        surveyId: req.params.id,
        surveyResponse,
    };
    await responses_1.default.create(saveResponse);
    return res.send({
        message: `You responses was successfully recorded`,
        data: responses,
    });
};
exports.createResponse = createResponse;
//# sourceMappingURL=reponses.js.map