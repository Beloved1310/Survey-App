"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const surveySchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    questions: [{
            no: {
                type: Number,
                required: true,
            },
            questionStatement: {
                type: String,
                required: true
            }
        }],
}, { timestamps: true });
exports.default = mongoose_1.default.model('Survey', surveySchema);
//# sourceMappingURL=survey.js.map