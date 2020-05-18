import { __spreadArrays } from "tslib";
import { propNames } from "@chakra-ui/parser";
import { memoizeOne, omit } from "@chakra-ui/utils";
import isValidAttribute from "@emotion/is-prop-valid";
var stylePropNames = __spreadArrays(propNames, [
    "variant",
    "size",
    "colorScheme",
    "orientation",
]);
function createShouldForwardProp(props) {
    var regex = new RegExp("^(" + props.join("|") + ")$");
    return memoizeOne(function (prop) { return isValidAttribute(prop) && !regex.test(prop); });
}
var shouldForwardProp = createShouldForwardProp(stylePropNames);
export var validHTMLProps = {
    htmlWidth: "width",
    htmlHeight: "height",
    htmlSize: "size",
};
var isValidHTMLProp = function (value) {
    return value in validHTMLProps;
};
function isPropValid(prop) {
    var shouldPassThrough = validHTMLProps.hasOwnProperty(prop) || prop === "sx" || prop === "css";
    return shouldPassThrough ? true : shouldForwardProp(prop);
}
export function filterProps(props) {
    var validProps = {};
    for (var prop in props) {
        if (!isPropValid(prop))
            continue;
        var propKey = isValidHTMLProp(prop) ? validHTMLProps[prop] : prop;
        validProps[propKey] = props[prop];
    }
    return validProps;
}
export function removeStyleProps(props) {
    return omit(props, stylePropNames);
}
export function customShouldForwardProp(fn, props) {
    var validProps = {};
    for (var prop in props) {
        if (fn(prop)) {
            validProps[prop] = props[prop];
        }
    }
    return validProps;
}
//# sourceMappingURL=should-forward-prop.js.map