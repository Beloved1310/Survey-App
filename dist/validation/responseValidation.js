"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseValidate = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const responseValidate = function validate(input) {
    const schema = joi_1.default.object({
        responses: joi_1.default.array()
            .items(joi_1.default.object({
            no: joi_1.default.number().positive().required(),
            answer: joi_1.default.string().required().trim(),
        }))
            .required(),
    });
    return schema.validate(input);
};
exports.responseValidate = responseValidate;
//# sourceMappingURL=responseValidation.js.map