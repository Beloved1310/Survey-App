"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    }
    else {
        res.status(403).send({ message: 'Invalid Admin Token' });
    }
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=isAdmin.js.map