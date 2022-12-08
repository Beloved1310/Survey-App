"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const user_1 = tslib_1.__importDefault(require("../../model/user"));
const signInValidation_1 = require("../../validation/signInValidation");
const signIn = async (req, res) => {
    const { value, error } = (0, signInValidation_1.signInValidate)(req.body);
    if (error)
        return res.status(400).send({ error: error.details[0].message });
    const { email, password } = value;
    const user = await user_1.default.findOne({ email });
    if (!user)
        return res.status(400).send({ error: 'username or password not found' });
    const validPassword = await bcrypt_1.default.compare(password, user.password);
    if (!validPassword)
        return res.status(400).send({ error: 'username or password not found ' });
    const token = user.generateAuthToken();
    res.header('x-auth-token', token);
    const data = { email, token };
    return res.send({ message: 'Login Successful', data });
};
exports.signIn = signIn;
//# sourceMappingURL=signIn.js.map