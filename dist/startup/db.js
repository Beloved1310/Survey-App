"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const winston_1 = tslib_1.__importDefault(require("winston"));
const winston_2 = require("../utilis/winston");
const config_1 = require("../config");
const log = (0, winston_2.logger)();
log.add(new winston_1.default.transports.Console({
    format: winston_1.default.format.simple(),
}));
const { MONGODBURI } = config_1.config;
const dbConnection = async () => {
    const mongooseConnect = await mongoose_1.default.connect(MONGODBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    if (mongooseConnect) {
        log.info('Connected to Database');
    }
    else {
        console.log('Not Connected to Database');
    }
};
exports.dbConnection = dbConnection;
//# sourceMappingURL=db.js.map