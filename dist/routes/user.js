"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const async_1 = require("../middleware/async");
const signUp_1 = require("../controller/user/signUp");
const signIn_1 = require("../controller/user/signIn");
const router = express_1.default.Router();
router.post('/signup', (0, async_1.asyncErrorhandling)(signUp_1.signUp));
router.post('/signin', (0, async_1.asyncErrorhandling)(signIn_1.signIn));
exports.default = router;
//# sourceMappingURL=user.js.map