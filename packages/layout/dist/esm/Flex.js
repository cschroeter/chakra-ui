import { __assign, __rest } from "tslib";
import * as React from "react";
import { forwardRef } from "react";
import { chakra } from "@chakra-ui/system";
import { __DEV__ } from "@chakra-ui/utils";
/**
 * React component used to create flexbox layouts.
 *
 * It renders a `div` with `display: flex` and
 * comes with helpful style shorthand.
 *
 * @see Docs https://chakra-ui.com/flex
 */
export var Flex = forwardRef(function (props, ref) {
    var direction = props.direction, align = props.align, justify = props.justify, wrap = props.wrap, basis = props.basis, grow = props.grow, rest = __rest(props, ["direction", "align", "justify", "wrap", "basis", "grow"]);
    return (React.createElement(chakra.div, __assign({ ref: ref, display: "flex", flexDirection: props.direction, alignItems: props.align, justifyContent: props.justify, flexWrap: props.wrap, flexBasis: props.basis, flexGrow: props.grow }, rest)));
});
if (__DEV__) {
    Flex.displayName = "Flex";
}
//# sourceMappingURL=Flex.js.map