import { __assign, __rest } from "tslib";
import { Portal } from "@chakra-ui/portal";
import { chakra } from "@chakra-ui/system";
import { isString, omit, pick, __DEV__ } from "@chakra-ui/utils";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
import * as React from "react";
import { useTooltip } from "./Tooltip.hook";
var StyledTooltip = chakra("div", { themeKey: "Tooltip" });
/**
 * Tooltips display informative text when users hover, focus on, or tap an element.
 *
 * @see Docs     https://chakra-ui.com/tooltip
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices/#tooltip
 */
export var Tooltip = React.forwardRef(function (props, ref) {
    var children = props.children, label = props.label, shouldWrapChildren = props.shouldWrapChildren, ariaLabel = props["aria-label"], hasArrow = props.hasArrow, rest = __rest(props, ["children", "label", "shouldWrapChildren", "aria-label", "hasArrow"]);
    var _a = useTooltip(props), isOpen = _a.isOpen, getTriggerProps = _a.getTriggerProps, getTooltipProps = _a.getTooltipProps, getArrowProps = _a.getArrowProps;
    var shouldWrap = isString(children) || shouldWrapChildren;
    var trigger;
    if (shouldWrap) {
        trigger = (React.createElement(chakra.span, __assign({ tabIndex: 0 }, getTriggerProps()), children));
    }
    else {
        // ensure tooltip has only one child node
        var child = React.Children.only(children);
        trigger = React.cloneElement(child, getTriggerProps(child.props));
    }
    var hasAriaLabel = !!ariaLabel;
    var _tooltipProps = getTooltipProps(__assign(__assign({}, rest), { ref: ref }));
    var tooltipProps = hasAriaLabel
        ? omit(_tooltipProps, ["role", "id"])
        : _tooltipProps;
    var hiddenProps = pick(_tooltipProps, ["role", "id"]);
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
        isOpen && (React.createElement(Portal, null,
            React.createElement(StyledTooltip, __assign({ "data-chakra-tooltip": "" }, tooltipProps),
                label,
                hasAriaLabel && (React.createElement(VisuallyHidden, __assign({}, hiddenProps), ariaLabel)),
                hasArrow && (React.createElement(chakra.div, __assign({ "data-chakra-arrow": "", bg: "inherit" }, getArrowProps()))))))));
});
if (__DEV__) {
    Tooltip.displayName = "Tooltip";
}
//# sourceMappingURL=Tooltip.js.map