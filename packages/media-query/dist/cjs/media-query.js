"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuery = exports.Show = exports.Hide = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var React = tslib_1.__importStar(require("react"));
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * Visibility
 *
 * React component to control the visibility of it's
 * children based on the current breakpoint

 * @see Docs https://chakra-ui.com/visibility
 */
function Visibility(props) {
    var breakpoint = props.breakpoint, hide = props.hide, children = props.children;
    var show = hooks_1.useMediaQuery(breakpoint)[0];
    var isVisible = hide ? !show : show;
    var rendered = isVisible ? children : null;
    return rendered;
}
exports.Hide = function (props) {
    var query = exports.useQuery(props);
    return (React.createElement(Visibility, { breakpoint: query, hide: true }, props.children));
};
exports.Show = function (props) {
    var query = exports.useQuery(props);
    return React.createElement(Visibility, { breakpoint: query }, props.children);
};
var getBreakpoint = function (theme, value) {
    return utils_1.get(theme, "breakpoints." + value, value);
};
exports.useQuery = function (props) {
    var _a = props.breakpoint, breakpoint = _a === void 0 ? "" : _a, below = props.below, above = props.above;
    var theme = system_1.useTheme();
    var bpBelow = getBreakpoint(theme, below);
    var bpAbove = getBreakpoint(theme, above);
    var query = bpBelow
        ? "(max-width: " + bpBelow + ")"
        : bpAbove
            ? "(min-width: " + bpAbove + ")"
            : breakpoint;
    return query;
};
//# sourceMappingURL=media-query.js.map