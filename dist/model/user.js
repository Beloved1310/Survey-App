"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = require("../config");
const UserSchema = new mongoose_1.default.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });
UserSchema.methods.generateAuthToken = function generatedToken() {
    const user = this;
    const token = jsonwebtoken_1.default.sign({
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        isAdmin: user.isAdmin,
    }, config_1.config.JWT);
    return token;
};
exports.default = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map