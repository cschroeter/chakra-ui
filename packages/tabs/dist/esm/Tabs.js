import { __assign, __rest } from "tslib";
import { chakra, useThemeDefaultProps, } from "@chakra-ui/system";
import { createContext, __DEV__, cx } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef, useMemo } from "react";
import { useTab, useTabIndicator, useTabList, useTabPanel, useTabPanels, useTabs, } from "./Tabs.hook";
var _a = createContext({
    strict: true,
    name: "TabsContext",
    errorMessage: "Chakra UI: Tabs components can only be used within <Tabs> component",
}), TabsCtxProvider = _a[0], useTabsContext = _a[1];
var _b = createContext(), ThemingCtxProvider = _b[0], useThemingContext = _b[1];
/**
 * Tabs
 *
 * Provides context and logic for all tabs components. It doesn't render
 * any DOM node.
 */
export var Tabs = forwardRef(function (props, ref) {
    /**
     * Gets the default props for `variant` and `size` from `theme.components.Tabs`
     */
    var defaults = useThemeDefaultProps("Tabs");
    var children = props.children, _a = props.variant, variant = _a === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _a, _b = props.size, size = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _b, _c = props.colorScheme, colorScheme = _c === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.colorScheme : _c, isFitted = props.isFitted, className = props.className, rest = __rest(props, ["children", "variant", "size", "colorScheme", "isFitted", "className"]);
    var _d = useTabs(rest), htmlProps = _d.htmlProps, context = __rest(_d, ["htmlProps"]);
    var tabs = useMemo(function () { return context; }, [context]);
    var _className = cx("chakra-tabs", className);
    return (React.createElement(TabsCtxProvider, { value: tabs },
        React.createElement(ThemingCtxProvider, { value: { variant: variant, size: size, colorScheme: colorScheme, isFitted: isFitted } },
            React.createElement(chakra.div, __assign({ className: _className, ref: ref }, htmlProps), children))));
});
if (__DEV__) {
    Tabs.displayName = "Tabs";
}
/**
 * Tabs - Theming
 *
 * To change the styles of a tab buttons globally, update the styles in
 * `theme.components.Tabs` under the `Tab` key.
 */
var StyledTab = chakra("button", {
    themeKey: "Tabs.Tab",
    baseStyle: {
        outline: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});
/**
 * Tabs
 *
 * The tab button uses to activate a specific tab panel. It renders a `button`,
 * and is responsible for automatic and manual selection modes.
 */
export var Tab = forwardRef(function (props, ref) {
    var className = props.className, htmlProps = __rest(props, ["className"]);
    var _a = useThemingContext(), isFitted = _a.isFitted, theming = __rest(_a, ["isFitted"]);
    var context = useTabsContext();
    var tabProps = useTab(__assign(__assign({}, htmlProps), { ref: ref, context: context }));
    var _className = cx("chakra-tabs__tab", className);
    return (React.createElement(StyledTab, __assign({ className: _className, flex: isFitted ? 1 : undefined }, theming, tabProps)));
});
if (__DEV__) {
    Tab.displayName = "Tab";
}
/**
 * TabList - Theming
 *
 * To change the styles of a tablist globally, update the styles in
 * `theme.components.Tabs` under the `TabList` key
 */
var StyledTabList = chakra("div", {
    themeKey: "Tabs.TabList",
});
/**
 * TabList
 *
 * Used to manage a list of tab buttons. It renders a `div` by default,
 * and is responsible the keyboard interaction between tabs.
 */
export var TabList = forwardRef(function (props, ref) {
    var className = props.className, htmlProps = __rest(props, ["className"]);
    var _a = useThemingContext(), isFitted = _a.isFitted, theming = __rest(_a, ["isFitted"]);
    var context = useTabsContext();
    var tablistProps = useTabList(__assign(__assign({}, htmlProps), { ref: ref, context: context }));
    var _className = cx("chakra-tabs__tablist", className);
    return (React.createElement(StyledTabList, __assign({ className: _className }, theming, tablistProps)));
});
if (__DEV__) {
    TabList.displayName = "TabList";
}
/**
 * TabPanel - Theming
 *
 * To change the styles of tab panels globally, update the styles in
 * `theme.components.Tabs` under the `TabPanel` key
 */
var StyledTabPanel = chakra("div", {
    themeKey: "Tabs.TabPanel",
});
/**
 * TabPanel
 *
 * Used to render the content for a specific tab.
 */
export var TabPanel = React.forwardRef(function (props, ref) {
    var className = props.className, htmlProps = __rest(props, ["className"]);
    var panelProps = useTabPanel(__assign(__assign({}, htmlProps), { ref: ref }));
    var _className = cx("chakra-tabs__tab-panel", className);
    return React.createElement(StyledTabPanel, __assign({ className: _className }, panelProps));
});
if (__DEV__) {
    TabPanel.displayName = "TabPanel";
}
/**
 * TabPanel
 *
 * Used to manage the rendering of multiple tab panels. It uses
 * `cloneElement` to hide/show tab panels.
 *
 * It renders a `div` by default.
 */
export var TabPanels = forwardRef(function (props, ref) {
    var className = props.className, htmlProps = __rest(props, ["className"]);
    var context = useTabsContext();
    var panelsProp = useTabPanels(__assign(__assign({}, htmlProps), { context: context }));
    var _className = cx("chakra-tabs__tab-panels", className);
    return React.createElement(chakra.div, __assign({ ref: ref, className: _className }, panelsProp));
});
if (__DEV__) {
    TabPanels.displayName = "TabPanels";
}
/**
 * TabIndicator
 *
 * Used to render an active tab indicator that animates between
 * selected tabs.
 */
export var TabIndicator = forwardRef(function (props, ref) {
    var className = props.className, style = props.style, htmlProps = __rest(props, ["className", "style"]);
    var context = useTabsContext();
    var styles = useTabIndicator(context);
    var _className = cx("chakra-tabs__tab-indicator", className);
    var _style = __assign(__assign({}, style), styles);
    return (React.createElement(chakra.div, __assign({ ref: ref, className: _className, style: _style }, htmlProps)));
});
if (__DEV__) {
    TabIndicator.displayName = "TabIndicator";
}
//# sourceMappingURL=Tabs.js.map