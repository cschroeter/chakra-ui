import { __assign, __rest } from "tslib";
import { CloseButton } from "@chakra-ui/close-button";
import { useSafeLayoutEffect } from "@chakra-ui/hooks";
import { Portal } from "@chakra-ui/portal";
import { chakra } from "@chakra-ui/system";
import { createContext, isFunction, __DEV__, } from "@chakra-ui/utils";
import * as React from "react";
import { usePopover } from "./Popover.hook";
var _a = createContext(), PopoverCtxProvider = _a[0], usePopoverContext = _a[1];
/**
 * Popover
 *
 * React component used to Popovers are used to bring attention
 * to specific user interface elements, typically to suggest an
 * action or to guide users through a new experience.
 */
export var Popover = function (props) {
    var children = props.children, usePortal = props.usePortal, hookProps = __rest(props, ["children", "usePortal"]);
    var context = usePopover(hookProps);
    return (React.createElement(PopoverCtxProvider, { value: __assign(__assign({}, context), { usePortal: usePortal }) }, isFunction(children)
        ? children({ isOpen: context.isOpen, onClose: context.onClose })
        : children));
};
if (__DEV__) {
    Popover.displayName = "Popover";
}
/**
 * PopoverTrigger
 *
 * The trigger for the popover. It must be an interactive element
 * such as `button` or `a`.
 */
export var PopoverTrigger = function (props) {
    // enforce a single child
    var child = React.Children.only(props.children);
    var getTriggerProps = usePopoverContext().getTriggerProps;
    return React.cloneElement(child, getTriggerProps(child.props));
};
if (__DEV__) {
    PopoverTrigger.displayName = "PopoverTrigger";
}
/**
 * Theming
 *
 * To change the global styles of Popover Content,
 * go to `theme.components.Popover` under the `Content` key
 */
var StyledContent = chakra("section", {
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
export var PopoverContent = React.forwardRef(function (props, ref) {
    var _a = usePopoverContext(), getPopoverProps = _a.getPopoverProps, usePortal = _a.usePortal;
    var Wrapper = usePortal ? Portal : React.Fragment;
    return (React.createElement(Wrapper, null,
        React.createElement(StyledContent, __assign({ "data-chakra-popover-content": "" }, getPopoverProps(__assign(__assign({}, props), { ref: ref }))))));
});
if (__DEV__) {
    PopoverContent.displayName = "PopoverContent";
}
/**
 * Theming
 *
 * To change the global styles of Popover Header,
 * go to `theme.components.Popover` under the `Header` key
 */
var StyledHeader = chakra("header", {
    themeKey: "Popover.Header",
});
/**
 * Popover Header
 *
 * This servers as the accessible header or label
 * for the popover's content and it's first announced by
 * screenreaders.
 */
export var PopoverHeader = React.forwardRef(function (props, ref) {
    var _a = usePopoverContext(), headerId = _a.headerId, setHasHeader = _a.setHasHeader;
    useSafeLayoutEffect(function () {
        setHasHeader.on();
        return function () { return setHasHeader.off(); };
    }, []);
    return (React.createElement(StyledHeader, __assign({ "data-chakra-popover-header": "" }, props, { id: headerId, ref: ref })));
});
if (__DEV__) {
    PopoverHeader.displayName = "PopoverHeader";
}
/**
 * Theming
 *
 * To change the global styles of Popover Body,
 * go to `theme.components.Popover` under the `Body` key
 */
var StyledBody = chakra("div", {
    themeKey: "Popover.Body",
});
/**
 * PopoverBody
 *
 * Serves as the main content area for the popover. Should contain
 * at least one interactive element.
 */
export var PopoverBody = React.forwardRef(function (props, ref) {
    var _a = usePopoverContext(), bodyId = _a.bodyId, setHasBody = _a.setHasBody;
    useSafeLayoutEffect(function () {
        setHasBody.on();
        return function () { return setHasBody.off(); };
    }, []);
    return React.createElement(StyledBody, __assign({}, props, { id: bodyId, ref: ref }));
});
if (__DEV__) {
    PopoverBody.displayName = "PopoverBody";
}
export var PopoverFooter = chakra("footer", { themeKey: "Popover.Footer" });
/**
 * PopoverCloseButton
 *
 * The button to close the popover
 */
export var PopoverCloseButton = function (props) {
    var onClose = usePopoverContext().onClose;
    return (React.createElement(CloseButton, __assign({ size: "sm", onClick: onClose, position: "absolute", borderRadius: "md", top: 1, right: 2, padding: 2 }, props)));
};
if (__DEV__) {
    PopoverCloseButton.displayName = "PopoverCloseButton";
}
var StyledArrow = chakra("div", {
    themeKey: "Popover.Arrow",
});
export var PopoverArrow = function (props) {
    var getArrowProps = usePopoverContext().getArrowProps;
    return React.createElement(StyledArrow, __assign({ bg: "inherit" }, getArrowProps(props)));
};
if (__DEV__) {
    PopoverArrow.displayName = "PopoverArrow";
}
//# sourceMappingURL=Popover.js.map