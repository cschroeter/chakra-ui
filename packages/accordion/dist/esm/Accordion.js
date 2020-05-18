import { __assign, __rest } from "tslib";
import { Collapse } from "@chakra-ui/collapse";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { chakra } from "@chakra-ui/system";
import { createContext, isFunction, __DEV__, cx, } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef } from "react";
import { useAccordion, useAccordionItem, } from "./Accordion.hook";
var _a = createContext(), AccordionCtxProvider = _a[0], useAccordionContext = _a[1];
/**
 * Theming
 *
 * To style the wrapper `div` of the accordion,change the styles in
 * `theme.components.Accordion` under the `Root` key
 */
var StyledRoot = chakra("div", {
    themeKey: "Accordion.Root",
});
/**
 * Accordion
 *
 * The wrapper that provides context and focus management
 * for all accordion items.
 *
 * It wraps all accordion items in a `div` for better grouping.
 */
export var Accordion = forwardRef(function (props, ref) {
    var _a = useAccordion(props), children = _a.children, htmlProps = _a.htmlProps, context = __rest(_a, ["children", "htmlProps"]);
    var _className = cx("chakra-accordion", props.className);
    return (React.createElement(AccordionCtxProvider, { value: context },
        React.createElement(StyledRoot, __assign({}, htmlProps, { className: _className }), children)));
});
if (__DEV__) {
    Accordion.displayName = "Accordion";
}
var _b = createContext(), AccordionItemCtxProvider = _b[0], useAccordionItemContext = _b[1];
/**
 * Theming
 *
 * To style the wrapper `div` of the accordion item,change the styles in
 * `theme.components.Accordion` under the `Item` key
 */
var StyledItem = chakra("div", {
    themeKey: "Accordion.Item",
});
/**
 * AccordionItem
 *
 * This represents a single accordion and provides the open-close
 * behavior when the accordion button is clicked.
 *
 * It also provides context for the accordion button and panel.
 */
export var AccordionItem = forwardRef(function (props, ref) {
    var accordionContext = useAccordionContext();
    var _a = useAccordionItem(__assign(__assign({}, props), { context: accordionContext })), getRootProps = _a.getRootProps, context = __rest(_a, ["getRootProps"]);
    var children = props.children, className = props.className;
    var _className = cx("chakra-accordion__item", className);
    return (React.createElement(AccordionItemCtxProvider, { value: context },
        React.createElement(StyledItem, __assign({}, getRootProps({ ref: ref }), { className: _className }), isFunction(children)
            ? children({
                isExpanded: !!context.isOpen,
                isDisabled: !!context.isDisabled,
            })
            : children)));
});
if (__DEV__) {
    AccordionItem.displayName = "AccordionItem";
}
/**
 * React hook to get the state and actions of an accordion item
 */
export function useAccordionItemState() {
    var _a = useAccordionItemContext(), isOpen = _a.isOpen, isDisabled = _a.isDisabled, onClose = _a.onClose, onOpen = _a.onOpen;
    return { isOpen: isOpen, onClose: onClose, isDisabled: isDisabled, onOpen: onOpen };
}
///////////////////////////////////////////////////////////////////////////
/**
 * Theming
 *
 * To style all accordion buttons, change the styles in
 * `theme.components.Accordion` under the `Button` key
 */
var StyledButton = chakra("button", {
    themeKey: "Accordion.Button",
    baseStyle: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        transition: "all 0.2s",
        outline: 0,
    },
});
/**
 * AccordionButton
 *
 * The button that expands and collapses an accordion item.
 * It must be a child of `AccordionItem`.
 *
 * Note 🚨: Each accordion button must be wrapped in an heading tag,
 * that is appropriate for the information architecture of the page.
 */
export var AccordionButton = forwardRef(function (props, ref) {
    var _className = cx("chakra-accordion__button", props.className);
    var getButtonProps = useAccordionItemContext().getButtonProps;
    var buttonProps = getButtonProps(__assign(__assign({}, props), { ref: ref }));
    return React.createElement(StyledButton, __assign({}, buttonProps, { className: _className }));
});
if (__DEV__) {
    AccordionButton.displayName = "AccordionButton";
}
///////////////////////////////////////////////////////////////////////////
/**
 * Theming
 *
 * To style all accordion panels,change the styles in
 * `theme.components.Accordion` under the `Panel` key
 */
var StyledPanel = chakra("div", {
    themeKey: "Accordion.Panel",
});
/**
 * AccordionPanel
 *
 * The panel that holds the content for each accordion.
 * It shows and hides based on the state login from the `AccordionItem`.
 *
 * It uses the `Collapse` component to animate it's height.
 */
export var AccordionPanel = forwardRef(function (props, ref) {
    var _a = useAccordionItemContext(), getPanelProps = _a.getPanelProps, isOpen = _a.isOpen;
    /**
     * remove `hidden` prop, 'coz we're using height animation
     */
    var _b = getPanelProps(__assign(__assign({}, props), { ref: ref })), hidden = _b.hidden, panelProps = __rest(_b, ["hidden"]);
    var _className = cx("chakra-accordion__panel", props.className);
    return (React.createElement(Collapse, { isOpen: isOpen },
        React.createElement(StyledPanel, __assign({}, panelProps, { className: _className, transition: "height 150ms ease-in-out, opacity 150ms ease-in-out, transform 150ms ease-in-out" }))));
});
if (__DEV__) {
    AccordionPanel.displayName = "AccordionPanel";
}
/**
 * AccordionIcon
 *
 * The icon that gives a visual cue of the open/close state of the accordion item.
 *
 * It rotates `180deg` based on the open/close state.
 */
export function AccordionIcon(props) {
    var _a = useAccordionItemContext(), isOpen = _a.isOpen, isDisabled = _a.isDisabled;
    return (React.createElement(ChevronDownIcon, __assign({ "aria-hidden": true, focusable: "false", width: "1.25em", height: "1.25em", opacity: isDisabled ? 0.4 : 1, transform: isOpen ? "rotate(-180deg)" : undefined, transition: "transform 0.2s", transformOrigin: "center" }, props)));
}
if (__DEV__) {
    AccordionIcon.displayName = "AccordionIcon";
}
//# sourceMappingURL=Accordion.js.map