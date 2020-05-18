import { __assign } from "tslib";
import { isEmptyObject } from "@chakra-ui/utils";
/**
 * Check if a theme key refers to a components
 * or sub-component
 */
export function isSubcomponent(themeKey) {
    return themeKey.split(".").length > 1;
}
/**
 * Check if a style object is not empty
 */
export function isNotEmpty(value) {
    return value && !isEmptyObject(value);
}
export function filterUndefined(object) {
    var result = __assign({}, object);
    for (var item in result) {
        if (typeof result[item] === "undefined") {
            delete result[item];
        }
    }
    return result;
}
//# sourceMappingURL=utils.js.map