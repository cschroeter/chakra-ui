"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTabIndicator = exports.useTabPanel = exports.useTabPanels = exports.useTab = exports.useTabList = exports.useTabs = void 0;
var tslib_1 = require("tslib");
var clickable_1 = require("@chakra-ui/clickable");
var descendant_1 = require("@chakra-ui/descendant");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var react_1 = require("react");
/**
 * Tabs hooks that provides all the states, and accessibility
 * helpers to keep all things working properly.
 *
 * It's returned object will be passed unto a Context Provider
 * so all child components can read from it.
 *
 * @see Docs https://chakra-ui.com/useTabs
 */
function useTabs(props) {
    var defaultIndex = props.defaultIndex, onChange = props.onChange, index = props.index, isManual = props.isManual, _a = props.orientation, orientation = _a === void 0 ? "horizontal" : _a, htmlProps = tslib_1.__rest(props
    /**
     * We use this to keep track of the index of the focused tab.
     *
     * Tabs can be automatically activated, this means selection follows focus.
     * When we navigate with the arrow keys, we move focus and selection to next/prev tab
     *
     * Tabs can also be manually activated, this means selection does not follow focus.
     * When we navigate with the arrow keys, we only move focus NOT selection. The user
     * will need not manually activate the tab using `Enter` or `Space`.
     *
     * This is why we need to keep track of the `focusedIndex` and `selectedIndex`
     */
    , ["defaultIndex", "onChange", "index", "isManual", "orientation"]);
    /**
     * We use this to keep track of the index of the focused tab.
     *
     * Tabs can be automatically activated, this means selection follows focus.
     * When we navigate with the arrow keys, we move focus and selection to next/prev tab
     *
     * Tabs can also be manually activated, this means selection does not follow focus.
     * When we navigate with the arrow keys, we only move focus NOT selection. The user
     * will need not manually activate the tab using `Enter` or `Space`.
     *
     * This is why we need to keep track of the `focusedIndex` and `selectedIndex`
     */
    var _b = react_1.useState(defaultIndex !== null && defaultIndex !== void 0 ? defaultIndex : 0), focusedIndex = _b[0], setFocusedIndex = _b[1];
    var _c = hooks_1.useControllableState({
        defaultValue: defaultIndex !== null && defaultIndex !== void 0 ? defaultIndex : 0,
        value: index,
        onChange: onChange,
        shouldUpdate: function (prevIndex, nextIndex) { return prevIndex !== nextIndex; },
        propsMap: {
            value: "index",
            defaultValue: "defaultIndex",
        },
    }), selectedIndex = _c[0], setSelectedIndex = _c[1];
    /**
     * Sync focused `index` with controlled `selectedIndex` (which is the `props.index`)
     */
    react_1.useEffect(function () {
        if (!utils_1.isUndefined(index)) {
            setFocusedIndex(index);
        }
    }, [index]);
    /**
     * Think of `useDescendants` as a register for the tab nodes.
     *
     * This manager is used to store only the tab nodes that are not disabled, and focusable.
     * If we have the following code
     *
     * ```jsx
     * <Tab>Tab 1</Tab>
     * <Tab isDisabled>Tab 2</Tab>
     * <Tab>Tab 3</Tab>
     * ```
     *
     * The manager will only hold references to "Tab 1" and "Tab 3", since `Tab 2` is disabled
     */
    var enabledDomContext = descendant_1.useDescendants();
    /**
     * This manager is used to store all tab nodes whether disabled or not.
     * If we have the following code
     *
     * ```jsx
     * <Tab>Tab 1</Tab>
     * <Tab isDisabled>Tab 2</Tab>
     * <Tab>Tab 3</Tab>
     * ```
     *
     * The manager will only hold references to "Tab 1", "Tab 2" "Tab 3".
     *
     * We need this for correct indexing of tabs in event a tab is disabled
     */
    var domContext = descendant_1.useDescendants();
    /**
     * generate a unique id or use user-provided id for
     * the tabs widget
     */
    var id = hooks_1.useId(props.id, "tabs");
    return {
        id: id,
        selectedIndex: selectedIndex,
        focusedIndex: focusedIndex,
        setSelectedIndex: setSelectedIndex,
        setFocusedIndex: setFocusedIndex,
        isManual: isManual,
        orientation: orientation,
        enabledDomContext: enabledDomContext,
        domContext: domContext,
        htmlProps: htmlProps,
    };
}
exports.useTabs = useTabs;
/**
 * Tabs hook to manage multiple tab buttons,
 * and ensures only one tab is selected per time.
 *
 * @param props props object for the tablist
 */
function useTabList(props) {
    var context = props.context, htmlProps = tslib_1.__rest(props, ["context"]);
    var setFocusedIndex = context.setFocusedIndex, focusedIndex = context.focusedIndex, orientation = context.orientation, enabledDomContext = context.enabledDomContext;
    var count = enabledDomContext.descendants.length;
    /**
     * Function to update the selected tab index
     * @param index the next focused index
     */
    var setIndex = function (index) {
        var tab = enabledDomContext.descendants[index];
        if (tab === null || tab === void 0 ? void 0 : tab.element) {
            tab.element.focus();
            setFocusedIndex(index);
        }
    };
    // Helper functions for keyboard navigation
    var nextTab = function () {
        var nextIndex = (focusedIndex + 1) % count;
        setIndex(nextIndex);
    };
    var prevTab = function () {
        var prevIndex = (focusedIndex - 1 + count) % count;
        setIndex(prevIndex);
    };
    var firstTab = function () { return setIndex(0); };
    var lastTab = function () { return setIndex(count - 1); };
    var isHorizontal = orientation === "horizontal";
    var isVertical = orientation === "vertical";
    var onKeyDown = utils_1.createOnKeyDown({
        keyMap: {
            ArrowRight: function () { return isHorizontal && nextTab(); },
            ArrowLeft: function () { return isHorizontal && prevTab(); },
            ArrowDown: function () { return isVertical && nextTab(); },
            ArrowUp: function () { return isVertical && prevTab(); },
            Home: function () { return firstTab(); },
            End: function () { return lastTab(); },
        },
    });
    return tslib_1.__assign(tslib_1.__assign({}, htmlProps), { role: "tablist", "aria-orientation": orientation, onKeyDown: utils_1.callAllHandlers(props.onKeyDown, onKeyDown) });
}
exports.useTabList = useTabList;
/**
 * Tabs hook to manage each tab button.
 *
 * A tab can be disabled and focusable, or both,
 * hence the use of `useClickable` to handle this scenario
 */
function useTab(props) {
    var isDisabled = props.isDisabled, isFocusable = props.isFocusable, context = props.context, htmlProps = tslib_1.__rest(props, ["isDisabled", "isFocusable", "context"]);
    var enabledDomContext = context.enabledDomContext, domContext = context.domContext, selectedIndex = context.selectedIndex, setSelectedIndex = context.setSelectedIndex, isManual = context.isManual, id = context.id;
    var ref = react_1.useRef(null);
    /**
     * Think of `useDescendant` as the function that actually registers this tab
     * to the corresponding `manager`, and returns it's index.
     *
     * In this case, it registers the tab only if it's enabled and focusable
     */
    descendant_1.useDescendant({
        disabled: isDisabled,
        focusable: isFocusable,
        context: enabledDomContext,
        element: ref.current,
    });
    /**
     * In this case, it registers the tab (whether disabled or not)
     */
    descendant_1.useDescendant({
        context: domContext,
        element: ref.current,
    });
    var computedIndex = domContext.descendants.findIndex(function (item) { return item.element === ref.current; });
    var isSelected = computedIndex === selectedIndex;
    var onClick = function () {
        setSelectedIndex(computedIndex);
    };
    var onFocus = function () {
        var isDisabledButFocusable = isDisabled && isFocusable;
        var selectionFollowsFocus = !isManual && !isDisabledButFocusable;
        if (selectionFollowsFocus) {
            setSelectedIndex(computedIndex);
        }
    };
    var clickable = clickable_1.useClickable(tslib_1.__assign(tslib_1.__assign({}, htmlProps), { ref: utils_1.mergeRefs(ref, props.ref), isDisabled: isDisabled,
        isFocusable: isFocusable, onClick: utils_1.callAllHandlers(props.onClick, onClick) }));
    var type = "button";
    return tslib_1.__assign(tslib_1.__assign({}, clickable), { id: makeTabId(id, computedIndex), role: "tab", tabIndex: isSelected ? 0 : -1, type: type, "aria-selected": isSelected ? true : undefined, "aria-controls": makeTabPanelId(id, computedIndex), onFocus: utils_1.callAllHandlers(props.onFocus, onFocus) });
}
exports.useTab = useTab;
/**
 * Tabs hook for managing the visibility of multiple tab panels.
 *
 * Since only one panel can be show at a time, we use `React.cloneElement`
 * to inject `selected` panel to each TabPanel.
 *
 * It returns a cloned version of it's children with
 * all functionality included.
 */
function useTabPanels(props) {
    var context = props.context, htmlProps = tslib_1.__rest(props, ["context"]);
    var id = context.id, selectedIndex = context.selectedIndex;
    var validChildren = utils_1.getValidChildren(props.children);
    var children = validChildren.map(function (child, index) {
        return react_1.cloneElement(child, {
            isSelected: index === selectedIndex,
            id: makeTabPanelId(id, index),
        });
    });
    return tslib_1.__assign(tslib_1.__assign({}, htmlProps), { children: children });
}
exports.useTabPanels = useTabPanels;
/**
 * Tabs hook for managing the visible/hidden states
 * of the tab panel.
 *
 * @param props props object for the tab panel
 */
function useTabPanel(props) {
    var isSelected = props.isSelected, id = props.id, htmlProps = tslib_1.__rest(props, ["isSelected", "id"]);
    return tslib_1.__assign(tslib_1.__assign({}, htmlProps), { role: "tabpanel", hidden: !isSelected, id: id });
}
exports.useTabPanel = useTabPanel;
/**
 * Tabs hook to show an animated indicators that
 * follows the active tab.
 *
 * The way we do it is by measuring the DOM Rect (or dimensions)
 * of the active tab, and return that as CSS style for
 * the indicator.
 */
function useTabIndicator(context) {
    var selectedIndex = context.selectedIndex, orientation = context.orientation, domContext = context.domContext;
    var isHorizontal = orientation === "horizontal";
    var isVertical = orientation === "vertical";
    // Get the clientRect of the selected tab
    var _a = react_1.useState(function () {
        if (isHorizontal)
            return { left: 0, width: 0 };
        if (isVertical)
            return { top: 0, height: 0 };
    }), rect = _a[0], setRect = _a[1];
    var _b = react_1.useState(false), hasMeasured = _b[0], setHasMeasured = _b[1];
    // Update the selected tab rect when the selectedIndex changes
    hooks_1.useSafeLayoutEffect(function () {
        var _a;
        if (utils_1.isUndefined(selectedIndex))
            return;
        var tab = domContext.descendants[selectedIndex];
        var tabRect = (_a = tab === null || tab === void 0 ? void 0 : tab.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        // Horizontal Tab: Calculate width and left distance
        if (isHorizontal && tabRect) {
            var left = tabRect.left, width = tabRect.width;
            setRect({ left: left, width: width });
        }
        // Vertical Tab: Calculate height and top distance
        if (isVertical && tabRect) {
            var top_1 = tabRect.top, height = tabRect.height;
            setRect({ top: top_1, height: height });
        }
        // Prevent unwanted transition from 0 to measured rect
        // by setting the measured state in the next tick
        var frameId = requestAnimationFrame(function () {
            setHasMeasured(true);
        });
        return function () {
            cancelAnimationFrame(frameId);
        };
    }, [selectedIndex, isHorizontal, isVertical, domContext.descendants]);
    return tslib_1.__assign({ position: "absolute", transition: hasMeasured ? "all 200ms cubic-bezier(0, 0, 0.2, 1)" : "none" }, rect);
}
exports.useTabIndicator = useTabIndicator;
function makeTabId(id, index) {
    return id + "--tab-" + index;
}
function makeTabPanelId(id, index) {
    return id + "--tabpanel-" + index;
}
//# sourceMappingURL=Tabs.hook.js.map