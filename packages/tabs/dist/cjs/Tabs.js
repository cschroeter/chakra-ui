"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabIndicator = exports.TabPanels = exports.TabPanel = exports.TabList = exports.Tab = exports.Tabs = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Tabs_hook_1 = require("./Tabs.hook");
var _a = utils_1.createContext({
    strict: true,
    name: "TabsContext",
    errorMessage: "Chakra UI: Tabs components can only be used within <Tabs> component",
}), TabsCtxProvider = _a[0], useTabsContext = _a[1];
var _b = utils_1.createContext(), ThemingCtxProvider = _b[0], useThemingContext = _b[1];
/**
 * Tabs
 *
 * Provides context and logic for all tabs components. It doesn't render
 * any DOM node.
 */
exports.Tabs = react_1.forwardRef(function (props, ref) {
    /**
     * Gets the default props for `variant` and `size` from `theme.components.Tabs`
     */
    var defaults = system_1.useThemeDefaultProps("Tabs");
    var children = props.children, _a = props.variant, variant = _a === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _a, _b = props.size, size = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _b, _c = props.colorScheme, colorScheme = _c === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.colorScheme : _c, isFitted = props.isFitted, className = props.className, rest = tslib_1.__rest(props, ["children", "variant", "size", "colorScheme", "isFitted", "className"]);
    var _d = Tabs_hook_1.useTabs(rest), htmlProps = _d.htmlProps, context = tslib_1.__rest(_d, ["htmlProps"]);
    var tabs = react_1.useMemo(function () { return context; }, [context]);
    var _className = utils_1.cx("chakra-tabs", className);
    return (React.createElement(TabsCtxProvider, { value: tabs },
        React.createElement(ThemingCtxProvider, { value: { variant: variant, size: size, colorScheme: colorScheme, isFitted: isFitted } },
            React.createElement(system_1.chakra.div, tslib_1.__assign({ className: _className, ref: ref }, htmlProps), children))));
});
if (utils_1.__DEV__) {
    exports.Tabs.displayName = "Tabs";
}
/**
 * Tabs - Theming
 *
 * To change the styles of a tab buttons globally, update the styles in
 * `theme.components.Tabs` under the `Tab` key.
 */
var StyledTab = system_1.chakra("button", {
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
exports.Tab = react_1.forwardRef(function (props, ref) {
    var className = props.className, htmlProps = tslib_1.__rest(props, ["className"]);
    var _a = useThemingContext(), isFitted = _a.isFitted, theming = tslib_1.__rest(_a, ["isFitted"]);
    var context = useTabsContext();
    var tabProps = Tabs_hook_1.useTab(tslib_1.__assign(tslib_1.__assign({}, htmlProps), { ref: ref, context: context }));
    var _className = utils_1.cx("chakra-tabs__tab", className);
    return (React.createElement(StyledTab, tslib_1.__assign({ className: _className, flex: isFitted ? 1 : undefined }, theming, tabProps)));
});
if (utils_1.__DEV__) {
    exports.Tab.displayName = "Tab";
}
/**
 * TabList - Theming
 *
 * To change the styles of a tablist globally, update the styles in
 * `theme.components.Tabs` under the `TabList` key
 */
var StyledTabList = system_1.chakra("div", {
    themeKey: "Tabs.TabList",
});
/**
 * TabList
 *
 * Used to manage a list of tab buttons. It renders a `div` by default,
 * and is responsible the keyboard interaction between tabs.
 */
exports.TabList = react_1.forwardRef(function (props, ref) {
    var className = props.className, htmlProps = tslib_1.__rest(props, ["className"]);
    var _a = useThemingContext(), isFitted = _a.isFitted, theming = tslib_1.__rest(_a, ["isFitted"]);
    var context = useTabsContext();
    var tablistProps = Tabs_hook_1.useTabList(tslib_1.__assign(tslib_1.__assign({}, htmlProps), { ref: ref, context: context }));
    var _className = utils_1.cx("chakra-tabs__tablist", className);
    return (React.createElement(StyledTabList, tslib_1.__assign({ className: _className }, theming, tablistProps)));
});
if (utils_1.__DEV__) {
    exports.TabList.displayName = "TabList";
}
/**
 * TabPanel - Theming
 *
 * To change the styles of tab panels globally, update the styles in
 * `theme.components.Tabs` under the `TabPanel` key
 */
var StyledTabPanel = system_1.chakra("div", {
    themeKey: "Tabs.TabPanel",
});
/**
 * TabPanel
 *
 * Used to render the content for a specific tab.
 */
exports.TabPanel = React.forwardRef(function (props, ref) {
    var className = props.className, htmlProps = tslib_1.__rest(props, ["className"]);
    var panelProps = Tabs_hook_1.useTabPanel(tslib_1.__assign(tslib_1.__assign({}, htmlProps), { ref: ref }));
    var _className = utils_1.cx("chakra-tabs__tab-panel", className);
    return React.createElement(StyledTabPanel, tslib_1.__assign({ className: _className }, panelProps));
});
if (utils_1.__DEV__) {
    exports.TabPanel.displayName = "TabPanel";
}
/**
 * TabPanel
 *
 * Used to manage the rendering of multiple tab panels. It uses
 * `cloneElement` to hide/show tab panels.
 *
 * It renders a `div` by default.
 */
exports.TabPanels = react_1.forwardRef(function (props, ref) {
    var className = props.className, htmlProps = tslib_1.__rest(props, ["className"]);
    var context = useTabsContext();
    var panelsProp = Tabs_hook_1.useTabPanels(tslib_1.__assign(tslib_1.__assign({}, htmlProps), { context: context }));
    var _className = utils_1.cx("chakra-tabs__tab-panels", className);
    return React.createElement(system_1.chakra.div, tslib_1.__assign({ ref: ref, className: _className }, panelsProp));
});
if (utils_1.__DEV__) {
    exports.TabPanels.displayName = "TabPanels";
}
/**
 * TabIndicator
 *
 * Used to render an active tab indicator that animates between
 * selected tabs.
 */
exports.TabIndicator = react_1.forwardRef(function (props, ref) {
    var className = props.className, style = props.style, htmlProps = tslib_1.__rest(props, ["className", "style"]);
    var context = useTabsContext();
    var styles = Tabs_hook_1.useTabIndicator(context);
    var _className = utils_1.cx("chakra-tabs__tab-indicator", className);
    var _style = tslib_1.__assign(tslib_1.__assign({}, style), styles);
    return (React.createElement(system_1.chakra.div, tslib_1.__assign({ ref: ref, className: _className, style: _style }, htmlProps)));
});
if (utils_1.__DEV__) {
    exports.TabIndicator.displayName = "TabIndicator";
}
//# sourceMappingURL=Tabs.js.map