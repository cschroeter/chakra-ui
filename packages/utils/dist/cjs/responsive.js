"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapResponsive = void 0;
var assertion_1 = require("./assertion");
var object_1 = require("./object");
function mapResponsive(prop, mapper) {
    if (assertion_1.isArray(prop)) {
        return prop.map(mapper);
    }
    if (assertion_1.isObject(prop)) {
        return object_1.objectKeys(prop).reduce(function (result, key) {
            result[key] = mapper(prop[key]);
            return result;
        }, {});
    }
    if (prop != null) {
        return mapper(prop);
    }
    return null;
}
exports.mapResponsive = mapResponsive;
//# sourceMappingURL=responsive.js.map