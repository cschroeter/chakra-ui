"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsx = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var core_1 = require("@emotion/core");
var css_1 = require("@chakra-ui/css");
function getCSS(props) {
    if (!props.sx && !props.css)
        return undefined;
    // leverage emotion's css function interpolation to access the theme
    return function (theme) {
        // process the theme-aware sx prop
        var sxStyles = css_1.css(props.sx)(theme);
        // process the css prop
        // (NB: This is not theme-aware, and you can't use shorthand style props)
        var cssStyles = utils_1.runIfFn(props.css, theme);
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
exports.jsx = function (type, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return core_1.jsx.apply(undefined, tslib_1.__spreadArrays([type, parse(props)], children));
};
exports.default = exports.jsx;
//# sourceMappingURL=jsx.js.map