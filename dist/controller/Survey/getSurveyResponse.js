"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSurveyResponse = void 0;
const tslib_1 = require("tslib");
const responses_1 = tslib_1.__importDefault(require("../../model/responses"));
const getSurveyResponse = async (req, res) => {
    const surveyResponse = await responses_1.default.find({}, { _id: 1, surveyResponse: 1, user: 1 });
    return res.send({ message: `Survey Responses`, data: surveyResponse });
};
exports.getSurveyResponse = getSurveyResponse;
//# sourceMappingURL=getSurveyResponse.js.map