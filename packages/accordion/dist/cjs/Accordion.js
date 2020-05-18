"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionIcon = exports.AccordionPanel = exports.AccordionButton = exports.useAccordionItemState = exports.AccordionItem = exports.Accordion = void 0;
var tslib_1 = require("tslib");
var collapse_1 = require("@chakra-ui/collapse");
var icons_1 = require("@chakra-ui/icons");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Accordion_hook_1 = require("./Accordion.hook");
var _a = utils_1.createContext(), AccordionCtxProvider = _a[0], useAccordionContext = _a[1];
/**
 * Theming
 *
 * To style the wrapper `div` of the accordion,change the styles in
 * `theme.components.Accordion` under the `Root` key
 */
var StyledRoot = system_1.chakra("div", {
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
exports.Accordion = react_1.forwardRef(function (props, ref) {
    var _a = Accordion_hook_1.useAccordion(props), children = _a.children, htmlProps = _a.htmlProps, context = tslib_1.__rest(_a, ["children", "htmlProps"]);
    var _className = utils_1.cx("chakra-accordion", props.className);
    return (React.createElement(AccordionCtxProvider, { value: context },
        React.createElement(StyledRoot, tslib_1.__assign({}, htmlProps, { className: _className }), children)));
});
if (utils_1.__DEV__) {
    exports.Accordion.displayName = "Accordion";
}
var _b = utils_1.createContext(), AccordionItemCtxProvider = _b[0], useAccordionItemContext = _b[1];
/**
 * Theming
 *
 * To style the wrapper `div` of the accordion item,change the styles in
 * `theme.components.Accordion` under the `Item` key
 */
var StyledItem = system_1.chakra("div", {
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
exports.AccordionItem = react_1.forwardRef(function (props, ref) {
    var accordionContext = useAccordionContext();
    var _a = Accordion_hook_1.useAccordionItem(tslib_1.__assign(tslib_1.__assign({}, props), { context: accordionContext })), getRootProps = _a.getRootProps, context = tslib_1.__rest(_a, ["getRootProps"]);
    var children = props.children, className = props.className;
    var _className = utils_1.cx("chakra-accordion__item", className);
    return (React.createElement(AccordionItemCtxProvider, { value: context },
        React.createElement(StyledItem, tslib_1.__assign({}, getRootProps({ ref: ref }), { className: _className }), utils_1.isFunction(children)
            ? children({
                isExpanded: !!context.isOpen,
                isDisabled: !!context.isDisabled,
            })
            : children)));
});
if (utils_1.__DEV__) {
    exports.AccordionItem.displayName = "AccordionItem";
}
/**
 * React hook to get the state and actions of an accordion item
 */
function useAccordionItemState() {
    var _a = useAccordionItemContext(), isOpen = _a.isOpen, isDisabled = _a.isDisabled, onClose = _a.onClose, onOpen = _a.onOpen;
    return { isOpen: isOpen, onClose: onClose, isDisabled: isDisabled, onOpen: onOpen };
}
exports.useAccordionItemState = useAccordionItemState;
///////////////////////////////////////////////////////////////////////////
/**
 * Theming
 *
 * To style all accordion buttons, change the styles in
 * `theme.components.Accordion` under the `Button` key
 */
var StyledButton = system_1.chakra("button", {
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
exports.AccordionButton = react_1.forwardRef(function (props, ref) {
    var _className = utils_1.cx("chakra-accordion__button", props.className);
    var getButtonProps = useAccordionItemContext().getButtonProps;
    var buttonProps = getButtonProps(tslib_1.__assign(tslib_1.__assign({}, props), { ref: ref }));
    return React.createElement(StyledButton, tslib_1.__assign({}, buttonProps, { className: _className }));
});
if (utils_1.__DEV__) {
    exports.AccordionButton.displayName = "AccordionButton";
}
///////////////////////////////////////////////////////////////////////////
/**
 * Theming
 *
 * To style all accordion panels,change the styles in
 * `theme.components.Accordion` under the `Panel` key
 */
var StyledPanel = system_1.chakra("div", {
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
exports.AccordionPanel = react_1.forwardRef(function (props, ref) {
    var _a = useAccordionItemContext(), getPanelProps = _a.getPanelProps, isOpen = _a.isOpen;
    /**
     * remove `hidden` prop, 'coz we're using height animation
     */
    var _b = getPanelProps(tslib_1.__assign(tslib_1.__assign({}, props), { ref: ref })), hidden = _b.hidden, panelProps = tslib_1.__rest(_b, ["hidden"]);
    var _className = utils_1.cx("chakra-accordion__panel", props.className);
    return (React.createElement(collapse_1.Collapse, { isOpen: isOpen },
        React.createElement(StyledPanel, tslib_1.__assign({}, panelProps, { className: _className, transition: "height 150ms ease-in-out, opacity 150ms ease-in-out, transform 150ms ease-in-out" }))));
});
if (utils_1.__DEV__) {
    exports.AccordionPanel.displayName = "AccordionPanel";
}
/**
 * AccordionIcon
 *
 * The icon that gives a visual cue of the open/close state of the accordion item.
 *
 * It rotates `180deg` based on the open/close state.
 */
function AccordionIcon(props) {
    var _a = useAccordionItemContext(), isOpen = _a.isOpen, isDisabled = _a.isDisabled;
    return (React.createElement(icons_1.ChevronDownIcon, tslib_1.__assign({ "aria-hidden": true, focusable: "false", width: "1.25em", height: "1.25em", opacity: isDisabled ? 0.4 : 1, transform: isOpen ? "rotate(-180deg)" : undefined, transition: "transform 0.2s", transformOrigin: "center" }, props)));
}
exports.AccordionIcon = AccordionIcon;
if (utils_1.__DEV__) {
    AccordionIcon.displayName = "AccordionIcon";
}
//# sourceMappingURL=Accordion.js.map