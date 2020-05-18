"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDivider = exports.MenuIcon = exports.MenuItemCommand = exports.MenuGroup = exports.MenuOptionGroup = exports.MenuItemOption = exports.MenuItem = exports.MenuList = exports.MenuButton = exports.Menu = exports.useMenuState = exports.useMenuContext = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Menu_hook_1 = require("./Menu.hook");
var _a = utils_1.createContext({
    strict: false,
    name: "MenuContext",
}), MenuContextProvider = _a[0], useMenuContext = _a[1];
exports.useMenuContext = useMenuContext;
//////////////////////////////////////////////////////////////////////////
function useMenuState() {
    var _a = useMenuContext(), isOpen = _a.isOpen, onClose = _a.onClose;
    return { isOpen: isOpen, onClose: onClose };
}
exports.useMenuState = useMenuState;
/**
 * The wrapper component that provides context, state, and focus
 * management to its sub-components.
 *
 * It doesn't render any DOM node.
 */
function Menu(props) {
    var parentCtx = useMenuContext();
    var context = Menu_hook_1.useMenu(tslib_1.__assign({ context: parentCtx }, props));
    return (React.createElement(MenuContextProvider, { value: context }, typeof props.children === "function"
        ? props.children({ isOpen: context.isOpen, onClose: context.onClose })
        : props.children));
}
exports.Menu = Menu;
if (utils_1.__DEV__) {
    Menu.displayName = "Menu";
}
/**
 * MenuButton - Theming
 *
 * To style the sizes and variants of the MenuButton,
 * Change the styles in `theme.components.Menu` under the `MenuButton`
 */
var StyledMenuButton = system_1.chakra("button", {
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
var SubmenuSvg = function (props) { return (React.createElement("svg", tslib_1.__assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 512 512", height: "1.2em", width: "1.2em" }, props),
    React.createElement("path", { d: "M192 128l128 128-128 128z" }))); };
/**
 * The trigger for the menu list. Must be a direct child of `Menu`.
 */
exports.MenuButton = react_1.forwardRef(function (props, ref) {
    var children = props.children, _a = props.submenuIcon, submenuIcon = _a === void 0 ? React.createElement(SubmenuSvg, null) : _a, rest = tslib_1.__rest(props, ["children", "submenuIcon"]);
    var context = useMenuContext();
    var ownProps = Menu_hook_1.useMenuButton(tslib_1.__assign({ context: context }, rest));
    var ownRef = utils_1.mergeRefs(ref, ownProps.ref);
    var isSubmenu = context.hasParentMenu;
    var Comp = isSubmenu ? StyledMenuItem : StyledMenuButton;
    var getChildren = function () {
        if (!isSubmenu)
            return props.children;
        return (React.createElement(React.Fragment, null,
            React.createElement(system_1.chakra.span, { flex: "1" }, props.children),
            React.createElement(exports.MenuIcon, { mr: "-0.5rem", children: submenuIcon })));
    };
    return (React.createElement(Comp, tslib_1.__assign({}, ownProps, { ref: ownRef }), getChildren()));
});
if (utils_1.__DEV__) {
    exports.MenuButton.displayName = "MenuButton";
}
var StyledMenuList = system_1.chakra("div", {
    themeKey: "Menu.MenuList",
    pure: true,
});
exports.MenuList = react_1.forwardRef(function (props, ref) {
    var context = useMenuContext();
    var ownProps = Menu_hook_1.useMenuList(tslib_1.__assign({ context: context }, props));
    var ownRef = utils_1.mergeRefs(ownProps.ref, ref);
    return React.createElement(StyledMenuList, tslib_1.__assign({}, ownProps, { ref: ownRef }));
});
if (utils_1.__DEV__) {
    exports.MenuList.displayName = "MenuList";
}
//////////////////////////////////////////////////////////////////////////
var StyledMenuItem = system_1.chakra("button", {
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
exports.MenuItem = react_1.forwardRef(function (props, ref) {
    var icon = props.icon, _a = props.iconSpacing, iconSpacing = _a === void 0 ? "0.75rem" : _a, command = props.command, children = props.children, htmlProps = tslib_1.__rest(props, ["icon", "iconSpacing", "command", "children"]);
    var context = useMenuContext();
    var ownProps = Menu_hook_1.useMenuItem(tslib_1.__assign({ context: context }, htmlProps));
    var ownRef = utils_1.mergeRefs(ownProps.ref, ref);
    var shouldWrapInSpan = icon || command;
    var _children = shouldWrapInSpan ? (React.createElement(system_1.chakra.span, { flex: "1" }, children)) : (children);
    return (React.createElement(StyledMenuItem, tslib_1.__assign({}, ownProps, { ref: ownRef }),
        icon && React.createElement(exports.MenuIcon, { fontSize: "0.8em", mr: iconSpacing, children: icon }),
        _children,
        command && React.createElement(exports.MenuItemCommand, { children: command })));
});
if (utils_1.__DEV__) {
    exports.MenuItem.displayName = "MenuItem";
}
var CheckIcon = function (props) { return (React.createElement("svg", tslib_1.__assign({ viewBox: "0 0 14 14", width: "1em", height: "1em" }, props),
    React.createElement("polygon", { fill: "currentColor", points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" }))); };
exports.MenuItemOption = react_1.forwardRef(function (props, ref) {
    var _a = props.icon, icon = _a === void 0 ? React.createElement(CheckIcon, null) : _a, _b = props.iconSpacing, iconSpacing = _b === void 0 ? "0.75rem" : _b, htmlProps = tslib_1.__rest(props, ["icon", "iconSpacing"]);
    var context = useMenuContext();
    var ownProps = Menu_hook_1.useMenuOption(tslib_1.__assign({ context: context }, htmlProps));
    var ownRef = utils_1.mergeRefs(ownProps.ref, ref);
    return (React.createElement(StyledMenuItem, tslib_1.__assign({}, ownProps, { ref: ownRef }),
        React.createElement(exports.MenuIcon, { fontSize: "0.8em", children: icon, mr: iconSpacing, visibility: props.isChecked ? "visible" : "hidden" }),
        React.createElement(system_1.chakra.span, { flex: "1" }, ownProps.children)));
});
if (utils_1.__DEV__) {
    exports.MenuItemOption.displayName = "MenuItemOption";
}
exports.MenuOptionGroup = function (props) {
    var _a = Menu_hook_1.useMenuOptionGroup(props), children = _a.children, rest = tslib_1.__rest(_a, ["children"]);
    return React.createElement(exports.MenuGroup, tslib_1.__assign({ title: props.title, children: children }, rest));
};
if (utils_1.__DEV__) {
    exports.MenuOptionGroup.displayName = "MenuOptionGroup";
}
//////////////////////////////////////////////////////////////////////////
var StyledTitle = system_1.chakra("p", {
    themeKey: "Menu.MenuGroupTitle",
    pure: true,
});
exports.MenuGroup = function (props) {
    var title = props.title, children = props.children, className = props.className, rest = tslib_1.__rest(props, ["title", "children", "className"]);
    var _className = utils_1.cx("chakra-menu__group__title", className);
    return (React.createElement(system_1.chakra.div, { className: "chakra-menu__group", role: "group" },
        title && (React.createElement(StyledTitle, tslib_1.__assign({ className: _className }, rest), title)),
        children));
};
if (utils_1.__DEV__) {
    exports.MenuGroup.displayName = "MenuGroup";
}
//////////////////////////////////////////////////////////////////////////
exports.MenuItemCommand = system_1.chakra("span", {
    baseStyle: { opacity: 0.6 },
    attrs: { className: "chakra-menu__command" },
    pure: true,
});
if (utils_1.__DEV__) {
    exports.MenuItemCommand.displayName = "MenuItemCommand";
}
//////////////////////////////////////////////////////////////////////////
exports.MenuIcon = function (props) {
    var className = props.className, children = props.children, rest = tslib_1.__rest(props, ["className", "children"]);
    var child = react_1.Children.only(children);
    var clone = react_1.isValidElement(child)
        ? react_1.cloneElement(child, {
            focusable: "false",
            "aria-hidden": true,
            className: utils_1.cx("chakra-menu__icon", child.props.className),
        })
        : null;
    var _className = utils_1.cx("chakra-menu__icon-wrapper", className);
    return (React.createElement(system_1.chakra.span, tslib_1.__assign({ flexShrink: 0, className: _className }, rest), clone));
};
if (utils_1.__DEV__) {
    exports.MenuIcon.displayName = "MenuIcon";
}
//////////////////////////////////////////////////////////////////////////
var StyledDivider = system_1.chakra("hr", {
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
exports.MenuDivider = function (props) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var _className = utils_1.cx("chakra-menu__divider", className);
    return React.createElement(StyledDivider, tslib_1.__assign({ className: _className }, rest));
};
if (utils_1.__DEV__) {
    exports.MenuDivider.displayName = "MenuDivider";
}
//# sourceMappingURL=Menu.js.map