"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customShouldForwardProp = exports.removeStyleProps = exports.filterProps = exports.validHTMLProps = void 0;
var tslib_1 = require("tslib");
var parser_1 = require("@chakra-ui/parser");
var utils_1 = require("@chakra-ui/utils");
var is_prop_valid_1 = tslib_1.__importDefault(require("@emotion/is-prop-valid"));
var stylePropNames = tslib_1.__spreadArrays(parser_1.propNames, [
    "variant",
    "size",
    "colorScheme",
    "orientation",
]);
function createShouldForwardProp(props) {
    var regex = new RegExp("^(" + props.join("|") + ")$");
    return utils_1.memoizeOne(function (prop) { return is_prop_valid_1.default(prop) && !regex.test(prop); });
}
var shouldForwardProp = createShouldForwardProp(stylePropNames);
exports.validHTMLProps = {
    htmlWidth: "width",
    htmlHeight: "height",
    htmlSize: "size",
};
var isValidHTMLProp = function (value) {
    return value in exports.validHTMLProps;
};
function isPropValid(prop) {
    var shouldPassThrough = exports.validHTMLProps.hasOwnProperty(prop) || prop === "sx" || prop === "css";
    return shouldPassThrough ? true : shouldForwardProp(prop);
}
function filterProps(props) {
    var validProps = {};
    for (var prop in props) {
        if (!isPropValid(prop))
            continue;
        var propKey = isValidHTMLProp(prop) ? exports.validHTMLProps[prop] : prop;
        validProps[propKey] = props[prop];
    }
    return validProps;
}
exports.filterProps = filterProps;
function removeStyleProps(props) {
    return utils_1.omit(props, stylePropNames);
}
exports.removeStyleProps = removeStyleProps;
function customShouldForwardProp(fn, props) {
    var validProps = {};
    for (var prop in props) {
        if (fn(prop)) {
            validProps[prop] = props[prop];
        }
    }
    return validProps;
}
exports.customShouldForwardProp = customShouldForwardProp;
//# sourceMappingURL=should-forward-prop.js.map