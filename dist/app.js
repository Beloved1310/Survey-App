"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const user_1 = tslib_1.__importDefault(require("./routes/user"));
const survey_1 = tslib_1.__importDefault(require("./routes/survey"));
const responses_1 = tslib_1.__importDefault(require("./routes/responses"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: '*' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    return res.send('OK');
});
app.use('/user', user_1.default);
app.use('/survey', survey_1.default);
app.use('/response', responses_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map