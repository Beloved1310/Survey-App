"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const async_1 = require("../middleware/async");
const auth_1 = require("../middleware/auth");
const reponses_1 = require("../controller/Survey/reponses");
const getSurveyResponse_1 = require("../controller/Survey/getSurveyResponse");
const isAdmin_1 = require("../middleware/isAdmin");
const router = express_1.default.Router();
router.get('/surveyresponse', auth_1.auth, isAdmin_1.isAdmin, (0, async_1.asyncErrorhandling)(getSurveyResponse_1.getSurveyResponse));
router.post('/createsurveyresponse/:id', auth_1.auth, (0, async_1.asyncErrorhandling)(reponses_1.createResponse));
exports.default = router;
//# sourceMappingURL=responses.js.map