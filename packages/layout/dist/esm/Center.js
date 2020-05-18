import { __assign, __rest } from "tslib";
import { chakra } from "@chakra-ui/system";
import { __DEV__, cx } from "@chakra-ui/utils";
import * as React from "react";
/**
 * React component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs https://chakra-ui.com/center
 */
export var Center = React.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, rest = __rest(props
    // enforce a single child
    , ["children", "className"]);
    // enforce a single child
    var child = React.Children.only(children);
    var _className = cx("chakra-center", className);
    return (React.createElement(chakra.div, __assign({ ref: ref, display: "flex", alignItems: "center", justifyContent: "center", className: _className }, rest), child));
});
if (__DEV__) {
    Center.displayName = "Center";
}
//# sourceMappingURL=Center.js.map