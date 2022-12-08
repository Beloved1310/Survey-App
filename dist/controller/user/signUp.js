"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const user_1 = tslib_1.__importDefault(require("../../model/user"));
const signUpValidation_1 = require("../../validation/signUpValidation");
const signUp = async (req, res) => {
    const { value, error } = (0, signUpValidation_1.signUpValidate)(req.body);
    if (error)
        return res.status(400).send({ error: error.details[0].message });
    const { fullname, email, password } = value;
    const createdUser = {
        fullname,
        email,
        password,
    };
    const user = await user_1.default.findOne({ email });
    if (user)
        return res
            .status(400)
            .send({ error: 'User already registered.Proceed to login' });
    const salt = await bcrypt_1.default.genSalt(10);
    createdUser.password = await bcrypt_1.default.hash(createdUser.password, salt);
    const savedUser = await user_1.default.create(createdUser);
    if (!savedUser)
        return res.status(422).send({ error: 'Unsaved User' });
    const data = { fullname, email };
    return res.send({
        message: 'Welcome! You have successfully sign up. Proceed to login',
        data,
    });
};
exports.signUp = signUp;
//# sourceMappingURL=signUp.js.map