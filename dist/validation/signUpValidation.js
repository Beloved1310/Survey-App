"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpValidate = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const signUpValidate = function validate(input) {
    const schema = joi_1.default.object({
        fullname: joi_1.default.string().min(5).trim().required(),
        email: joi_1.default.string().email().min(3).max(50).lowercase().required().trim(),
        password: joi_1.default.string()
            .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
            .required()
            .label('Password must contain atleat one Capital letter, small letter, special symbol and must not be less than 8 characters'),
    });
    return schema.validate(input);
};
exports.signUpValidate = signUpValidate;
//# sourceMappingURL=signUpValidation.js.map