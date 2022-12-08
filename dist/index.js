"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const winston_1 = tslib_1.__importDefault(require("winston"));
const winston_2 = require("./utilis/winston");
const config_1 = require("./config");
const app_1 = tslib_1.__importDefault(require("./app"));
const db_1 = require("./startup/db");
(0, db_1.dbConnection)();
const log = (0, winston_2.logger)();
log.add(new winston_1.default.transports.Console({
    format: winston_1.default.format.simple(),
}));
app_1.default.listen(config_1.config.PORT, () => {
    log.info(`Web server is running ${config_1.config.PORT}`);
});
//# sourceMappingURL=index.js.map