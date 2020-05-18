import { useMediaQuery } from "@chakra-ui/hooks";
import * as React from "react";
import { useTheme } from "@chakra-ui/system";
import { get } from "@chakra-ui/utils";
/**
 * Visibility
 *
 * React component to control the visibility of it's
 * children based on the current breakpoint

 * @see Docs https://chakra-ui.com/visibility
 */
function Visibility(props) {
    var breakpoint = props.breakpoint, hide = props.hide, children = props.children;
    var show = useMediaQuery(breakpoint)[0];
    var isVisible = hide ? !show : show;
    var rendered = isVisible ? children : null;
    return rendered;
}
export var Hide = function (props) {
    var query = useQuery(props);
    return (React.createElement(Visibility, { breakpoint: query, hide: true }, props.children));
};
export var Show = function (props) {
    var query = useQuery(props);
    return React.createElement(Visibility, { breakpoint: query }, props.children);
};
var getBreakpoint = function (theme, value) {
    return get(theme, "breakpoints." + value, value);
};
export var useQuery = function (props) {
    var _a = props.breakpoint, breakpoint = _a === void 0 ? "" : _a, below = props.below, above = props.above;
    var theme = useTheme();
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