"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warn = void 0;
var assertion_1 = require("./assertion");
function warn(options) {
    if (options.condition && assertion_1.__DEV__) {
        console.warn(options.message);
    }
}
exports.warn = warn;
function error(options) {
    if (options.condition && assertion_1.__DEV__) {
        console.error(options.message);
    }
}
exports.error = error;
//# sourceMappingURL=logger.js.map