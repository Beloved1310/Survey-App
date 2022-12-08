"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveyValidate = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const surveyValidate = function validate(input) {
    const schema = joi_1.default.object({
        title: joi_1.default.string().min(5).trim().required(),
        questions: joi_1.default.array()
            .items(joi_1.default.object({
            no: joi_1.default.number().positive().required(),
            questionStatement: joi_1.default.string().required().trim(),
        }))
            .required(),
    });
    return schema.validate(input);
};
exports.surveyValidate = surveyValidate;
//# sourceMappingURL=surveyValidation.js.map