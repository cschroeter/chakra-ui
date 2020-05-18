"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var tslib_1 = require("tslib");
var portal_1 = require("@chakra-ui/portal");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var visually_hidden_1 = require("@chakra-ui/visually-hidden");
var React = tslib_1.__importStar(require("react"));
var Tooltip_hook_1 = require("./Tooltip.hook");
var StyledTooltip = system_1.chakra("div", { themeKey: "Tooltip" });
/**
 * Tooltips display informative text when users hover, focus on, or tap an element.
 *
 * @see Docs     https://chakra-ui.com/tooltip
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices/#tooltip
 */
exports.Tooltip = React.forwardRef(function (props, ref) {
    var children = props.children, label = props.label, shouldWrapChildren = props.shouldWrapChildren, ariaLabel = props["aria-label"], hasArrow = props.hasArrow, rest = tslib_1.__rest(props, ["children", "label", "shouldWrapChildren", "aria-label", "hasArrow"]);
    var _a = Tooltip_hook_1.useTooltip(props), isOpen = _a.isOpen, getTriggerProps = _a.getTriggerProps, getTooltipProps = _a.getTooltipProps, getArrowProps = _a.getArrowProps;
    var shouldWrap = utils_1.isString(children) || shouldWrapChildren;
    var trigger;
    if (shouldWrap) {
        trigger = (React.createElement(system_1.chakra.span, tslib_1.__assign({ tabIndex: 0 }, getTriggerProps()), children));
    }
    else {
        // ensure tooltip has only one child node
        var child = React.Children.only(children);
        trigger = React.cloneElement(child, getTriggerProps(child.props));
    }
    var hasAriaLabel = !!ariaLabel;
    var _tooltipProps = getTooltipProps(tslib_1.__assign(tslib_1.__assign({}, rest), { ref: ref }));
    var tooltipProps = hasAriaLabel
        ? utils_1.omit(_tooltipProps, ["role", "id"])
        : _tooltipProps;
    var hiddenProps = utils_1.pick(_tooltipProps, ["role", "id"]);
    /**
     * If the `label` or `aria-label` is empty, there's no
     * point showing the tooltip. Let's simply return back the children
     *
     * @see https://github.com/chakra-ui/chakra-ui/issues/601
     */
    if (!(label || ariaLabel)) {
        return React.createElement(React.Fragment, null, children);
    }
    return (React.createElement(React.Fragment, null,
        trigger,
        isOpen && (React.createElement(portal_1.Portal, null,
            React.createElement(StyledTooltip, tslib_1.__assign({ "data-chakra-tooltip": "" }, tooltipProps),
                label,
                hasAriaLabel && (React.createElement(visually_hidden_1.VisuallyHidden, tslib_1.__assign({}, hiddenProps), ariaLabel)),
                hasArrow && (React.createElement(system_1.chakra.div, tslib_1.__assign({ "data-chakra-arrow": "", bg: "inherit" }, getArrowProps()))))))));
});
if (utils_1.__DEV__) {
    exports.Tooltip.displayName = "Tooltip";
}
//# sourceMappingURL=Tooltip.js.map