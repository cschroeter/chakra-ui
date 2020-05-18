"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Center = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
/**
 * React component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs https://chakra-ui.com/center
 */
exports.Center = React.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, rest = tslib_1.__rest(props
    // enforce a single child
    , ["children", "className"]);
    // enforce a single child
    var child = React.Children.only(children);
    var _className = utils_1.cx("chakra-center", className);
    return (React.createElement(system_1.chakra.div, tslib_1.__assign({ ref: ref, display: "flex", alignItems: "center", justifyContent: "center", className: _className }, rest), child));
});
if (utils_1.__DEV__) {
    exports.Center.displayName = "Center";
}
//# sourceMappingURL=Center.js.map