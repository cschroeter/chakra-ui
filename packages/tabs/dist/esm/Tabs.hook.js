import { __assign, __rest } from "tslib";
import { useClickable } from "@chakra-ui/clickable";
import { useDescendant, useDescendants } from "@chakra-ui/descendant";
import { useControllableState, useId, useSafeLayoutEffect, } from "@chakra-ui/hooks";
import { callAllHandlers, createOnKeyDown, getValidChildren, isUndefined, mergeRefs, } from "@chakra-ui/utils";
import { cloneElement, useEffect, useRef, useState } from "react";
/**
 * Tabs hooks that provides all the states, and accessibility
 * helpers to keep all things working properly.
 *
 * It's returned object will be passed unto a Context Provider
 * so all child components can read from it.
 *
 * @see Docs https://chakra-ui.com/useTabs
 */
export function useTabs(props) {
    var defaultIndex = props.defaultIndex, onChange = props.onChange, index = props.index, isManual = props.isManual, _a = props.orientation, orientation = _a === void 0 ? "horizontal" : _a, htmlProps = __rest(props
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
    var _b = useState(defaultIndex !== null && defaultIndex !== void 0 ? defaultIndex : 0), focusedIndex = _b[0], setFocusedIndex = _b[1];
    var _c = useControllableState({
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
    useEffect(function () {
        if (!isUndefined(index)) {
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
    var enabledDomContext = useDescendants();
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
    var domContext = useDescendants();
    /**
     * generate a unique id or use user-provided id for
     * the tabs widget
     */
    var id = useId(props.id, "tabs");
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
/**
 * Tabs hook to manage multiple tab buttons,
 * and ensures only one tab is selected per time.
 *
 * @param props props object for the tablist
 */
export function useTabList(props) {
    var context = props.context, htmlProps = __rest(props, ["context"]);
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
    var onKeyDown = createOnKeyDown({
        keyMap: {
            ArrowRight: function () { return isHorizontal && nextTab(); },
            ArrowLeft: function () { return isHorizontal && prevTab(); },
            ArrowDown: function () { return isVertical && nextTab(); },
            ArrowUp: function () { return isVertical && prevTab(); },
            Home: function () { return firstTab(); },
            End: function () { return lastTab(); },
        },
    });
    return __assign(__assign({}, htmlProps), { role: "tablist", "aria-orientation": orientation, onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown) });
}
/**
 * Tabs hook to manage each tab button.
 *
 * A tab can be disabled and focusable, or both,
 * hence the use of `useClickable` to handle this scenario
 */
export function useTab(props) {
    var isDisabled = props.isDisabled, isFocusable = props.isFocusable, context = props.context, htmlProps = __rest(props, ["isDisabled", "isFocusable", "context"]);
    var enabledDomContext = context.enabledDomContext, domContext = context.domContext, selectedIndex = context.selectedIndex, setSelectedIndex = context.setSelectedIndex, isManual = context.isManual, id = context.id;
    var ref = useRef(null);
    /**
     * Think of `useDescendant` as the function that actually registers this tab
     * to the corresponding `manager`, and returns it's index.
     *
     * In this case, it registers the tab only if it's enabled and focusable
     */
    useDescendant({
        disabled: isDisabled,
        focusable: isFocusable,
        context: enabledDomContext,
        element: ref.current,
    });
    /**
     * In this case, it registers the tab (whether disabled or not)
     */
    useDescendant({
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
    var clickable = useClickable(__assign(__assign({}, htmlProps), { ref: mergeRefs(ref, props.ref), isDisabled: isDisabled,
        isFocusable: isFocusable, onClick: callAllHandlers(props.onClick, onClick) }));
    var type = "button";
    return __assign(__assign({}, clickable), { id: makeTabId(id, computedIndex), role: "tab", tabIndex: isSelected ? 0 : -1, type: type, "aria-selected": isSelected ? true : undefined, "aria-controls": makeTabPanelId(id, computedIndex), onFocus: callAllHandlers(props.onFocus, onFocus) });
}
/**
 * Tabs hook for managing the visibility of multiple tab panels.
 *
 * Since only one panel can be show at a time, we use `React.cloneElement`
 * to inject `selected` panel to each TabPanel.
 *
 * It returns a cloned version of it's children with
 * all functionality included.
 */
export function useTabPanels(props) {
    var context = props.context, htmlProps = __rest(props, ["context"]);
    var id = context.id, selectedIndex = context.selectedIndex;
    var validChildren = getValidChildren(props.children);
    var children = validChildren.map(function (child, index) {
        return cloneElement(child, {
            isSelected: index === selectedIndex,
            id: makeTabPanelId(id, index),
        });
    });
    return __assign(__assign({}, htmlProps), { children: children });
}
/**
 * Tabs hook for managing the visible/hidden states
 * of the tab panel.
 *
 * @param props props object for the tab panel
 */
export function useTabPanel(props) {
    var isSelected = props.isSelected, id = props.id, htmlProps = __rest(props, ["isSelected", "id"]);
    return __assign(__assign({}, htmlProps), { role: "tabpanel", hidden: !isSelected, id: id });
}
/**
 * Tabs hook to show an animated indicators that
 * follows the active tab.
 *
 * The way we do it is by measuring the DOM Rect (or dimensions)
 * of the active tab, and return that as CSS style for
 * the indicator.
 */
export function useTabIndicator(context) {
    var selectedIndex = context.selectedIndex, orientation = context.orientation, domContext = context.domContext;
    var isHorizontal = orientation === "horizontal";
    var isVertical = orientation === "vertical";
    // Get the clientRect of the selected tab
    var _a = useState(function () {
        if (isHorizontal)
            return { left: 0, width: 0 };
        if (isVertical)
            return { top: 0, height: 0 };
    }), rect = _a[0], setRect = _a[1];
    var _b = useState(false), hasMeasured = _b[0], setHasMeasured = _b[1];
    // Update the selected tab rect when the selectedIndex changes
    useSafeLayoutEffect(function () {
        var _a;
        if (isUndefined(selectedIndex))
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
    return __assign({ position: "absolute", transition: hasMeasured ? "all 200ms cubic-bezier(0, 0, 0.2, 1)" : "none" }, rect);
}
function makeTabId(id, index) {
    return id + "--tab-" + index;
}
function makeTabPanelId(id, index) {
    return id + "--tabpanel-" + index;
}
//# sourceMappingURL=Tabs.hook.js.map