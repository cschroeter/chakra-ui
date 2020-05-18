import { __assign, __rest } from "tslib";
import { chakra, } from "@chakra-ui/system";
import { createContext, cx, mergeRefs, __DEV__, } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef, isValidElement, cloneElement, Children } from "react";
import { useMenu, useMenuButton, useMenuItem, useMenuList, useMenuOption, useMenuOptionGroup, } from "./Menu.hook";
var _a = createContext({
    strict: false,
    name: "MenuContext",
}), MenuContextProvider = _a[0], useMenuContext = _a[1];
export { useMenuContext };
//////////////////////////////////////////////////////////////////////////
export function useMenuState() {
    var _a = useMenuContext(), isOpen = _a.isOpen, onClose = _a.onClose;
    return { isOpen: isOpen, onClose: onClose };
}
/**
 * The wrapper component that provides context, state, and focus
 * management to its sub-components.
 *
 * It doesn't render any DOM node.
 */
export function Menu(props) {
    var parentCtx = useMenuContext();
    var context = useMenu(__assign({ context: parentCtx }, props));
    return (React.createElement(MenuContextProvider, { value: context }, typeof props.children === "function"
        ? props.children({ isOpen: context.isOpen, onClose: context.onClose })
        : props.children));
}
if (__DEV__) {
    Menu.displayName = "Menu";
}
/**
 * MenuButton - Theming
 *
 * To style the sizes and variants of the MenuButton,
 * Change the styles in `theme.components.Menu` under the `MenuButton`
 */
var StyledMenuButton = chakra("button", {
    themeKey: "Menu.MenuButton",
    baseStyle: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        transition: "all 250ms",
    },
    pure: true,
});
var SubmenuSvg = function (props) { return (React.createElement("svg", __assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 512 512", height: "1.2em", width: "1.2em" }, props),
    React.createElement("path", { d: "M192 128l128 128-128 128z" }))); };
/**
 * The trigger for the menu list. Must be a direct child of `Menu`.
 */
export var MenuButton = forwardRef(function (props, ref) {
    var children = props.children, _a = props.submenuIcon, submenuIcon = _a === void 0 ? React.createElement(SubmenuSvg, null) : _a, rest = __rest(props, ["children", "submenuIcon"]);
    var context = useMenuContext();
    var ownProps = useMenuButton(__assign({ context: context }, rest));
    var ownRef = mergeRefs(ref, ownProps.ref);
    var isSubmenu = context.hasParentMenu;
    var Comp = isSubmenu ? StyledMenuItem : StyledMenuButton;
    var getChildren = function () {
        if (!isSubmenu)
            return props.children;
        return (React.createElement(React.Fragment, null,
            React.createElement(chakra.span, { flex: "1" }, props.children),
            React.createElement(MenuIcon, { mr: "-0.5rem", children: submenuIcon })));
    };
    return (React.createElement(Comp, __assign({}, ownProps, { ref: ownRef }), getChildren()));
});
if (__DEV__) {
    MenuButton.displayName = "MenuButton";
}
var StyledMenuList = chakra("div", {
    themeKey: "Menu.MenuList",
    pure: true,
});
export var MenuList = forwardRef(function (props, ref) {
    var context = useMenuContext();
    var ownProps = useMenuList(__assign({ context: context }, props));
    var ownRef = mergeRefs(ownProps.ref, ref);
    return React.createElement(StyledMenuList, __assign({}, ownProps, { ref: ownRef }));
});
if (__DEV__) {
    MenuList.displayName = "MenuList";
}
//////////////////////////////////////////////////////////////////////////
var StyledMenuItem = chakra("button", {
    themeKey: "Menu.MenuItem",
    baseStyle: {
        color: "inherit",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        flex: "0 0 auto",
    },
    pure: true,
});
export var MenuItem = forwardRef(function (props, ref) {
    var icon = props.icon, _a = props.iconSpacing, iconSpacing = _a === void 0 ? "0.75rem" : _a, command = props.command, children = props.children, htmlProps = __rest(props, ["icon", "iconSpacing", "command", "children"]);
    var context = useMenuContext();
    var ownProps = useMenuItem(__assign({ context: context }, htmlProps));
    var ownRef = mergeRefs(ownProps.ref, ref);
    var shouldWrapInSpan = icon || command;
    var _children = shouldWrapInSpan ? (React.createElement(chakra.span, { flex: "1" }, children)) : (children);
    return (React.createElement(StyledMenuItem, __assign({}, ownProps, { ref: ownRef }),
        icon && React.createElement(MenuIcon, { fontSize: "0.8em", mr: iconSpacing, children: icon }),
        _children,
        command && React.createElement(MenuItemCommand, { children: command })));
});
if (__DEV__) {
    MenuItem.displayName = "MenuItem";
}
var CheckIcon = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 14 14", width: "1em", height: "1em" }, props),
    React.createElement("polygon", { fill: "currentColor", points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" }))); };
export var MenuItemOption = forwardRef(function (props, ref) {
    var _a = props.icon, icon = _a === void 0 ? React.createElement(CheckIcon, null) : _a, _b = props.iconSpacing, iconSpacing = _b === void 0 ? "0.75rem" : _b, htmlProps = __rest(props, ["icon", "iconSpacing"]);
    var context = useMenuContext();
    var ownProps = useMenuOption(__assign({ context: context }, htmlProps));
    var ownRef = mergeRefs(ownProps.ref, ref);
    return (React.createElement(StyledMenuItem, __assign({}, ownProps, { ref: ownRef }),
        React.createElement(MenuIcon, { fontSize: "0.8em", children: icon, mr: iconSpacing, visibility: props.isChecked ? "visible" : "hidden" }),
        React.createElement(chakra.span, { flex: "1" }, ownProps.children)));
});
if (__DEV__) {
    MenuItemOption.displayName = "MenuItemOption";
}
export var MenuOptionGroup = function (props) {
    var _a = useMenuOptionGroup(props), children = _a.children, rest = __rest(_a, ["children"]);
    return React.createElement(MenuGroup, __assign({ title: props.title, children: children }, rest));
};
if (__DEV__) {
    MenuOptionGroup.displayName = "MenuOptionGroup";
}
//////////////////////////////////////////////////////////////////////////
var StyledTitle = chakra("p", {
    themeKey: "Menu.MenuGroupTitle",
    pure: true,
});
export var MenuGroup = function (props) {
    var title = props.title, children = props.children, className = props.className, rest = __rest(props, ["title", "children", "className"]);
    var _className = cx("chakra-menu__group__title", className);
    return (React.createElement(chakra.div, { className: "chakra-menu__group", role: "group" },
        title && (React.createElement(StyledTitle, __assign({ className: _className }, rest), title)),
        children));
};
if (__DEV__) {
    MenuGroup.displayName = "MenuGroup";
}
//////////////////////////////////////////////////////////////////////////
export var MenuItemCommand = chakra("span", {
    baseStyle: { opacity: 0.6 },
    attrs: { className: "chakra-menu__command" },
    pure: true,
});
if (__DEV__) {
    MenuItemCommand.displayName = "MenuItemCommand";
}
//////////////////////////////////////////////////////////////////////////
export var MenuIcon = function (props) {
    var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
    var child = Children.only(children);
    var clone = isValidElement(child)
        ? cloneElement(child, {
            focusable: "false",
            "aria-hidden": true,
            className: cx("chakra-menu__icon", child.props.className),
        })
        : null;
    var _className = cx("chakra-menu__icon-wrapper", className);
    return (React.createElement(chakra.span, __assign({ flexShrink: 0, className: _className }, rest), clone));
};
if (__DEV__) {
    MenuIcon.displayName = "MenuIcon";
}
//////////////////////////////////////////////////////////////////////////
var StyledDivider = chakra("hr", {
    themeKey: "Menu.MenuDivider",
    baseStyle: {
        border: 0,
        borderBottom: "1px solid",
        borderColor: "inherit",
        marginTop: "0.5rem",
        marginBottom: "1rem",
        opacity: 0.6,
    },
    attrs: {
        role: "separator",
        "aria-orientation": "horizontal",
    },
});
export var MenuDivider = function (props) {
    var className = props.className, rest = __rest(props, ["className"]);
    var _className = cx("chakra-menu__divider", className);
    return React.createElement(StyledDivider, __assign({ className: _className }, rest));
};
if (__DEV__) {
    MenuDivider.displayName = "MenuDivider";
}
//# sourceMappingURL=Menu.js.map