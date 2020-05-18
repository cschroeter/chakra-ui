import { __assign, __rest } from "tslib";
import { chakra } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
var fallbackIcon = {
    path: (React.createElement("g", { fillRule: "evenodd" },
        React.createElement("circle", { fill: "currentColor", cx: "12", cy: "12", r: "10" }),
        React.createElement("circle", { fill: "inherit", cx: "12", cy: "18", r: "1" }),
        React.createElement("path", { d: "M15.89 9.05a3.975 3.975 0 0 0-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 0 0 .982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 0 1 4.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 0 0-1 .987v2.014a1.001 1.001 0 0 0 2.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0 0 15.89 9.05", fill: "inherit" }))),
    viewBox: "0 0 24 24",
};
var StyledSvg = chakra("svg", { themeKey: "Icon" });
export var Icon = React.forwardRef(function (props, ref) {
    var as = props.as, size = props.size, _a = props.boxSize, boxSize = _a === void 0 ? "1em" : _a, viewBox = props.viewBox, _b = props.color, color = _b === void 0 ? "currentColor" : _b, _c = props.role, role = _c === void 0 ? "presentation" : _c, _d = props.focusable, focusable = _d === void 0 ? false : _d, children = props.children, className = props.className, rest = __rest(props, ["as", "size", "boxSize", "viewBox", "color", "role", "focusable", "children", "className"]);
    var _className = cx("chakra-icon", className);
    var sharedProps = {
        ref: ref,
        display: "inline-block",
        lineHeight: "1em",
        size: size,
        color: color,
        focusable: focusable,
        role: role,
        flexShrink: 0,
        boxSize: boxSize,
        className: _className,
    };
    /**
     * If you're using an icon library like `react-icons`
     */
    if (as && typeof as !== "string") {
        return React.createElement(StyledSvg, __assign({ as: as }, sharedProps, rest));
    }
    var _path = children !== null && children !== void 0 ? children : fallbackIcon.path;
    var _viewBox = viewBox !== null && viewBox !== void 0 ? viewBox : fallbackIcon.viewBox;
    return (React.createElement(StyledSvg, __assign({ verticalAlign: "middle", viewBox: _viewBox }, sharedProps, rest), _path));
});
if (__DEV__) {
    Icon.displayName = "Icon";
}
export default Icon;
//# sourceMappingURL=Icon.js.map