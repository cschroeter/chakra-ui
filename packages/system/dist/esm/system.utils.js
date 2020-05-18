import { __assign, __rest } from "tslib";
import { pseudoSelectors } from "@chakra-ui/parser";
import { css } from "@chakra-ui/css";
import { isString, __DEV__, isNumber, get, } from "@chakra-ui/utils";
/**
 * Carefully selected html elements for chakra components.
 * This is mostly for `chakra.<element>` syntax.
 */
export var domElements = [
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
export function pseudoProps(_a) {
    var _b;
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    var result = {};
    for (var prop in props) {
        if (prop in pseudoSelectors) {
            var style = css((_b = {}, _b[prop] = props[prop], _b))(theme);
            result = __assign(__assign({}, result), style);
        }
    }
    return result;
}
export function truncateProp(_a) {
    var isTruncated = _a.isTruncated, noOfLines = _a.noOfLines;
    if (isNumber(noOfLines)) {
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
export function layerStyleProp(_a) {
    var layerStyle = _a.layerStyle, textStyle = _a.textStyle, theme = _a.theme;
    if (layerStyle) {
        return get(theme, "layerStyles." + layerStyle);
    }
    if (textStyle) {
        return get(theme, "textStyles." + textStyle);
    }
}
export function applyProp(tag) {
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
        return css({ apply: apply })(theme);
    };
}
export default function isTag(target) {
    return (isString(target) &&
        (__DEV__ ? target.charAt(0) === target.charAt(0).toLowerCase() : true));
}
/**
 * Get the display name of a component.
 * It's really useful when debugging in Dev Tools.
 *
 * @param primitive the react element or component type
 */
export function getDisplayName(primitive) {
    return isTag(primitive) ? "chakra." + primitive : getComponentName(primitive);
}
function getComponentName(primitive) {
    return ((__DEV__ ? isString(primitive) && primitive : false) ||
        (!isString(primitive) && primitive.displayName) ||
        (!isString(primitive) && primitive.name) ||
        "ChakraComponent");
}
//# sourceMappingURL=system.utils.js.map