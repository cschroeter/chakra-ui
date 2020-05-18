"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisplayName = exports.applyProp = exports.layerStyleProp = exports.truncateProp = exports.pseudoProps = exports.domElements = void 0;
var tslib_1 = require("tslib");
var parser_1 = require("@chakra-ui/parser");
var css_1 = require("@chakra-ui/css");
var utils_1 = require("@chakra-ui/utils");
/**
 * Carefully selected html elements for chakra components.
 * This is mostly for `chakra.<element>` syntax.
 */
exports.domElements = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "b",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "button",
    "caption",
    "cite",
    "circle",
    "code",
    "col",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hr",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "nav",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "path",
    "picture",
    "pre",
    "q",
    "rect",
    "s",
    "svg",
    "section",
    "select",
    "small",
    "span",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "u",
    "ul",
    "video",
];
function pseudoProps(_a) {
    var _b;
    var theme = _a.theme, props = tslib_1.__rest(_a, ["theme"]);
    var result = {};
    for (var prop in props) {
        if (prop in parser_1.pseudoSelectors) {
            var style = css_1.css((_b = {}, _b[prop] = props[prop], _b))(theme);
            result = tslib_1.__assign(tslib_1.__assign({}, result), style);
        }
    }
    return result;
}
exports.pseudoProps = pseudoProps;
function truncateProp(_a) {
    var isTruncated = _a.isTruncated, noOfLines = _a.noOfLines;
    if (utils_1.isNumber(noOfLines)) {
        return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: noOfLines,
        };
    }
    if (isTruncated) {
        return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        };
    }
}
exports.truncateProp = truncateProp;
function layerStyleProp(_a) {
    var layerStyle = _a.layerStyle, textStyle = _a.textStyle, theme = _a.theme;
    if (layerStyle) {
        return utils_1.get(theme, "layerStyles." + layerStyle);
    }
    if (textStyle) {
        return utils_1.get(theme, "textStyles." + textStyle);
    }
}
exports.layerStyleProp = layerStyleProp;
function applyProp(tag) {
    return function (props) {
        var _a;
        var theme = props.theme, applyProp = props.apply;
        var shouldAutoApply = (_a = theme === null || theme === void 0 ? void 0 : theme.config) === null || _a === void 0 ? void 0 : _a.shouldMapElementToStyles;
        var defaultApply = !!shouldAutoApply ? "styles." + tag : undefined;
        var apply = applyProp !== null && applyProp !== void 0 ? applyProp : defaultApply;
        if (!apply)
            return undefined;
        /**
         * css function knows how to resolve the `apply` prop
         * so need to use `get(...)` function.
         */
        return css_1.css({ apply: apply })(theme);
    };
}
exports.applyProp = applyProp;
function isTag(target) {
    return (utils_1.isString(target) &&
        (utils_1.__DEV__ ? target.charAt(0) === target.charAt(0).toLowerCase() : true));
}
exports.default = isTag;
/**
 * Get the display name of a component.
 * It's really useful when debugging in Dev Tools.
 *
 * @param primitive the react element or component type
 */
function getDisplayName(primitive) {
    return isTag(primitive) ? "chakra." + primitive : getComponentName(primitive);
}
exports.getDisplayName = getDisplayName;
function getComponentName(primitive) {
    return ((utils_1.__DEV__ ? utils_1.isString(primitive) && primitive : false) ||
        (!utils_1.isString(primitive) && primitive.displayName) ||
        (!utils_1.isString(primitive) && primitive.name) ||
        "ChakraComponent");
}
//# sourceMappingURL=system.utils.js.map