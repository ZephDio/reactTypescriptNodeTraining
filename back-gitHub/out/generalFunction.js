"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = void 0;
function verify(req) {
    if (!(req.body.x && req.body.x > 0 && req.body.x < 200))
        return false;
    if (!(req.body.y && req.body.y > 0 && req.body.y < 200))
        return false;
    return true;
}
exports.verify = verify;
