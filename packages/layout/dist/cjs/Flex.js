"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * React component used to create flexbox layouts.
 *
 * It renders a `div` with `display: flex` and
 * comes with helpful style shorthand.
 *
 * @see Docs https://chakra-ui.com/flex
 */
exports.Flex = react_1.forwardRef(function (props, ref) {
    var direction = props.direction, align = props.align, justify = props.justify, wrap = props.wrap, basis = props.basis, grow = props.grow, rest = tslib_1.__rest(props, ["direction", "align", "justify", "wrap", "basis", "grow"]);
    return (React.createElement(system_1.chakra.div, tslib_1.__assign({ ref: ref, display: "flex", flexDirection: props.direction, alignItems: props.align, justifyContent: props.justify, flexWrap: props.wrap, flexBasis: props.basis, flexGrow: props.grow }, rest)));
});
if (utils_1.__DEV__) {
    exports.Flex.displayName = "Flex";
}
//# sourceMappingURL=Flex.js.map