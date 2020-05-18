"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrap = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
/**
 * Layout component used to stack elements that differ in length
 * and are liable to wrap.
 *
 * Common use cases:
 * - Buttons that appear together at the end of forms
 * - Lists of tags and chips
 *
 * @see Docs https://chakra-ui.com/wrap
 */
exports.Wrap = react_1.forwardRef(function (props, ref) {
    var _a = props.spacing, spacing = _a === void 0 ? "0.5rem" : _a, children = props.children, justify = props.justify, direction = props.direction, rest = tslib_1.__rest(props, ["spacing", "children", "justify", "direction"]);
    var theme = system_1.useTheme();
    var liSpacing = utils_1.mapResponsive(spacing, function (value) {
        var margin = system_1.css({ margin: value })(theme).margin;
        return "calc(" + margin + " / 2)";
    });
    var ulSpacing = utils_1.mapResponsive(spacing, function (value) {
        var margin = system_1.css({ margin: value })(theme).margin;
        return "calc(" + margin + " / 2 * -1)";
    });
    var validChildren = utils_1.getValidChildren(children);
    var clones = validChildren.map(function (child, index) { return (React.createElement(system_1.chakra.li, { key: index, margin: liSpacing, display: "inline-flex" }, child)); });
    return (React.createElement(system_1.chakra.div, tslib_1.__assign({ ref: ref }, rest),
        React.createElement(system_1.chakra.ul, { display: "flex", flexWrap: "wrap", justifyContent: justify, flexDirection: direction, listStyleType: "none", padding: "0", margin: ulSpacing, children: clones })));
});
if (utils_1.__DEV__) {
    exports.Wrap.displayName = "Wrap";
}
//# sourceMappingURL=Wrap.js.map