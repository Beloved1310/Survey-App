"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const isAdmin_1 = require("../middleware/isAdmin");
const async_1 = require("../middleware/async");
const auth_1 = require("../middleware/auth");
const createSurvey_1 = require("../controller/Survey/createSurvey");
const router = express_1.default.Router();
router.post('/createsurvey', auth_1.auth, isAdmin_1.isAdmin, (0, async_1.asyncErrorhandling)(createSurvey_1.createSurvey));
exports.default = router;
//# sourceMappingURL=survey.js.map