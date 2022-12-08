"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInValidate = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const signInValidate = function validate(input) {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().min(3).max(70).lowercase().required(),
        password: joi_1.default.string()
            .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
            .required(),
    });
    return schema.validate(input);
};
exports.signInValidate = signInValidate;
//# sourceMappingURL=signInValidation.js.map