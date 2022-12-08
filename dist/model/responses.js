"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const responsesSchema = new mongoose_1.default.Schema({
    user: {
        _id: mongoose_1.default.Types.ObjectId,
        fullname: String,
        email: String,
    },
    responses: [
        {
            no: {
                type: String,
                required: true,
            },
            answer: {
                type: String,
                required: true,
            },
        },
    ],
    surveyId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Survey',
    },
    surveyResponse: Array,
}, { timestamps: true });
exports.default = mongoose_1.default.model('Responses', responsesSchema);
//# sourceMappingURL=responses.js.map