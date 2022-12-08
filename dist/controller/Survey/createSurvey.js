"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSurvey = void 0;
const tslib_1 = require("tslib");
const surveyValidation_1 = require("../../validation/surveyValidation");
const survey_1 = tslib_1.__importDefault(require("../../model/survey"));
const createSurvey = async (req, res) => {
    const { value, error } = (0, surveyValidation_1.surveyValidate)(req.body);
    if (error)
        return res.status(400).send({ error: error.details[0].message });
    const { title, questions } = value;
    await survey_1.default.create(value);
    return res.send({
        message: `Survey with  the title : ${title} Successfully created`,
        data: questions,
    });
};
exports.createSurvey = createSurvey;
//# sourceMappingURL=createSurvey.js.map