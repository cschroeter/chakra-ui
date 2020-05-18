import { __spreadArrays } from "tslib";
import { runIfFn } from "@chakra-ui/utils";
import { jsx as emotion } from "@emotion/core";
import { css } from "@chakra-ui/css";
function getCSS(props) {
    if (!props.sx && !props.css)
        return undefined;
    // leverage emotion's css function interpolation to access the theme
    return function (theme) {
        // process the theme-aware sx prop
        var sxStyles = css(props.sx)(theme);
        // process the css prop
        // (NB: This is not theme-aware, and you can't use shorthand style props)
        var cssStyles = runIfFn(props.css, theme);
        /**
         * return an array value and allow emotion do the rest.
         * By default, emotion can handle array style values
         */
        return [sxStyles, cssStyles];
    };
}
function parse(props) {
    if (!props)
        return null;
    var computedProps = {};
    for (var prop in props) {
        if (prop === "sx")
            continue;
        computedProps[prop] = props[prop];
    }
    var css = getCSS(props);
    if (css)
        computedProps.css = css;
    return computedProps;
}
export var jsx = function (type, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return emotion.apply(undefined, __spreadArrays([type, parse(props)], children));
};
export default jsx;
//# sourceMappingURL=jsx.js.map