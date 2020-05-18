import { __assign } from "tslib";
import merge from "deepmerge";
export function omit(object, keys) {
    var result = {};
    for (var key in object) {
        if (keys.includes(key))
            continue;
        result[key] = object[key];
    }
    return result;
}
export function pick(object, keys) {
    var result = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (key in object) {
            result[key] = object[key];
        }
    }
    return result;
}
export function split(object, keys) {
    var picked = {};
    var omitted = {};
    for (var key in object) {
        if (keys.includes(key)) {
            picked[key] = object[key];
        }
        else {
            omitted[key] = object[key];
        }
    }
    return [picked, omitted];
}
/**
 * Get value from a deeply nested object using a string path
 * @param obj - the object
 * @param path - the string path
 * @param def  - the fallback value
 */
export function get(obj, path, fallback, index) {
    var _a, _b;
    //@ts-ignore
    path = ((_b = (_a = path === null || path === void 0 ? void 0 : path.split) === null || _a === void 0 ? void 0 : _a.call(path, ".")) !== null && _b !== void 0 ? _b : [path]);
    for (index = 0; index < path.length; index++) {
        obj = obj ? obj[path[index]] : undefined;
    }
    return obj === undefined ? fallback : obj;
}
/**
 * Get value from deeply nested object, based on path
 * It returns the path value if not found in object
 *
 * @param path - the string path or value
 * @param scale - the string path or value
 */
export function getWithDefault(path, scale) {
    return get(scale, path, path);
}
export { merge };
export function filterUndefined(object) {
    var result = __assign({}, object);
    for (var item in result) {
        if (typeof result[item] === "undefined") {
            delete result[item];
        }
    }
    return result;
}
export var objectKeys = function (obj) {
    return Object.keys(obj);
};
//# sourceMappingURL=object.js.map