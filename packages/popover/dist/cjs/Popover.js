"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverArrow = exports.PopoverCloseButton = exports.PopoverFooter = exports.PopoverBody = exports.PopoverHeader = exports.PopoverContent = exports.PopoverTrigger = exports.Popover = void 0;
var tslib_1 = require("tslib");
var close_button_1 = require("@chakra-ui/close-button");
var hooks_1 = require("@chakra-ui/hooks");
var portal_1 = require("@chakra-ui/portal");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Popover_hook_1 = require("./Popover.hook");
var _a = utils_1.createContext(), PopoverCtxProvider = _a[0], usePopoverContext = _a[1];
/**
 * Popover
 *
 * React component used to Popovers are used to bring attention
 * to specific user interface elements, typically to suggest an
 * action or to guide users through a new experience.
 */
exports.Popover = function (props) {
    var children = props.children, usePortal = props.usePortal, hookProps = tslib_1.__rest(props, ["children", "usePortal"]);
    var context = Popover_hook_1.usePopover(hookProps);
    return (React.createElement(PopoverCtxProvider, { value: tslib_1.__assign(tslib_1.__assign({}, context), { usePortal: usePortal }) }, utils_1.isFunction(children)
        ? children({ isOpen: context.isOpen, onClose: context.onClose })
        : children));
};
if (utils_1.__DEV__) {
    exports.Popover.displayName = "Popover";
}
/**
 * PopoverTrigger
 *
 * The trigger for the popover. It must be an interactive element
 * such as `button` or `a`.
 */
exports.PopoverTrigger = function (props) {
    // enforce a single child
    var child = React.Children.only(props.children);
    var getTriggerProps = usePopoverContext().getTriggerProps;
    return React.cloneElement(child, getTriggerProps(child.props));
};
if (utils_1.__DEV__) {
    exports.PopoverTrigger.displayName = "PopoverTrigger";
}
/**
 * Theming
 *
 * To change the global styles of Popover Content,
 * go to `theme.components.Popover` under the `Content` key
 */
var StyledContent = system_1.chakra("section", {
    themeKey: "Popover.Content",
    baseStyle: {
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
    },
});
/**
 * PopoverContent
 *
 * The popover's content wrapper that includes all
 * accessibility requirements for a popover
 */
exports.PopoverContent = React.forwardRef(function (props, ref) {
    var _a = usePopoverContext(), getPopoverProps = _a.getPopoverProps, usePortal = _a.usePortal;
    var Wrapper = usePortal ? portal_1.Portal : React.Fragment;
    return (React.createElement(Wrapper, null,
        React.createElement(StyledContent, tslib_1.__assign({ "data-chakra-popover-content": "" }, getPopoverProps(tslib_1.__assign(tslib_1.__assign({}, props), { ref: ref }))))));
});
if (utils_1.__DEV__) {
    exports.PopoverContent.displayName = "PopoverContent";
}
/**
 * Theming
 *
 * To change the global styles of Popover Header,
 * go to `theme.components.Popover` under the `Header` key
 */
var StyledHeader = system_1.chakra("header", {
    themeKey: "Popover.Header",
});
/**
 * Popover Header
 *
 * This servers as the accessible header or label
 * for the popover's content and it's first announced by
 * screenreaders.
 */
exports.PopoverHeader = React.forwardRef(function (props, ref) {
    var _a = usePopoverContext(), headerId = _a.headerId, setHasHeader = _a.setHasHeader;
    hooks_1.useSafeLayoutEffect(function () {
        setHasHeader.on();
        return function () { return setHasHeader.off(); };
    }, []);
    return (React.createElement(StyledHeader, tslib_1.__assign({ "data-chakra-popover-header": "" }, props, { id: headerId, ref: ref })));
});
if (utils_1.__DEV__) {
    exports.PopoverHeader.displayName = "PopoverHeader";
}
/**
 * Theming
 *
 * To change the global styles of Popover Body,
 * go to `theme.components.Popover` under the `Body` key
 */
var StyledBody = system_1.chakra("div", {
    themeKey: "Popover.Body",
});
/**
 * PopoverBody
 *
 * Serves as the main content area for the popover. Should contain
 * at least one interactive element.
 */
exports.PopoverBody = React.forwardRef(function (props, ref) {
    var _a = usePopoverContext(), bodyId = _a.bodyId, setHasBody = _a.setHasBody;
    hooks_1.useSafeLayoutEffect(function () {
        setHasBody.on();
        return function () { return setHasBody.off(); };
    }, []);
    return React.createElement(StyledBody, tslib_1.__assign({}, props, { id: bodyId, ref: ref }));
});
if (utils_1.__DEV__) {
    exports.PopoverBody.displayName = "PopoverBody";
}
exports.PopoverFooter = system_1.chakra("footer", { themeKey: "Popover.Footer" });
/**
 * PopoverCloseButton
 *
 * The button to close the popover
 */
exports.PopoverCloseButton = function (props) {
    var onClose = usePopoverContext().onClose;
    return (React.createElement(close_button_1.CloseButton, tslib_1.__assign({ size: "sm", onClick: onClose, position: "absolute", borderRadius: "md", top: 1, right: 2, padding: 2 }, props)));
};
if (utils_1.__DEV__) {
    exports.PopoverCloseButton.displayName = "PopoverCloseButton";
}
var StyledArrow = system_1.chakra("div", {
    themeKey: "Popover.Arrow",
});
exports.PopoverArrow = function (props) {
    var getArrowProps = usePopoverContext().getArrowProps;
    return React.createElement(StyledArrow, tslib_1.__assign({ bg: "inherit" }, getArrowProps(props)));
};
if (utils_1.__DEV__) {
    exports.PopoverArrow.displayName = "PopoverArrow";
}
//# sourceMappingURL=Popover.js.map