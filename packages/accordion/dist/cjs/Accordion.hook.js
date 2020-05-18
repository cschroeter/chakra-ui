"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAccordionItem = exports.useAccordion = void 0;
var tslib_1 = require("tslib");
var descendant_1 = require("@chakra-ui/descendant");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var react_1 = require("react");
var warn = tslib_1.__importStar(require("./Accordion.warning"));
/**
 * useAccordion
 *
 * React hook that provides all the state and focus management logic
 * for accordion items.
 *
 * It is consumed by the `Accordion` component
 */
function useAccordion(props) {
    var onChange = props.onChange, defaultIndex = props.defaultIndex, indexProp = props.index, allowMultiple = props.allowMultiple, allowToggle = props.allowToggle, htmlProps = tslib_1.__rest(props
    // validate the props and `warn` if used incorrectly
    , ["onChange", "defaultIndex", "index", "allowMultiple", "allowToggle"]);
    // validate the props and `warn` if used incorrectly
    warn.allowMultiple(props);
    warn.allowMultipleAndAllowToggle(props);
    /**
     * Think of this as the register to each accordion item.
     * We used to manage focus between accordion item buttons.
     *
     * Every accordion item, registers their button refs in this context
     */
    var descendantsContext = descendant_1.useDescendants();
    /**
     * This state is used to track the index focused accordion
     * button when click on the button, tab on the button, or
     * use the down/up arrow to navigate.
     */
    var _a = react_1.useState(-1), focusedIndex = _a[0], setFocusedIndex = _a[1];
    /**
     * Hook that manages the controlled and un-controlled state
     * for the accordion.
     */
    var _b = hooks_1.useControllableState({
        value: indexProp,
        defaultValue: function () {
            if (allowMultiple) {
                return defaultIndex !== null && defaultIndex !== void 0 ? defaultIndex : [];
            }
            else {
                return defaultIndex !== null && defaultIndex !== void 0 ? defaultIndex : -1;
            }
        },
        onChange: onChange,
        propsMap: {
            value: "index",
            defaultValue: "defaultIndex",
        },
    }), index = _b[0], setIndex = _b[1];
    /**
     * Filter out invalid children (null, false), in the case
     * of conditional rendering
     */
    var validChildren = utils_1.getValidChildren(props.children);
    /**
     * Clone the accordion items and pass them the `onChange`
     * and `isOpen`
     */
    var children = validChildren.map(function (child, _index) {
        var isExpanded = utils_1.isArray(index)
            ? index.includes(_index)
            : index === _index;
        return react_1.cloneElement(child, {
            isOpen: isExpanded,
            onChange: function (nextIsOpen) {
                if (allowMultiple && utils_1.isArray(index)) {
                    var nextState = nextIsOpen
                        ? utils_1.addItem(index, _index)
                        : utils_1.removeItem(index, _index);
                    setIndex(nextState);
                }
                else {
                    if (nextIsOpen) {
                        setIndex(_index);
                    }
                    else if (allowToggle) {
                        setIndex(-1);
                    }
                }
            },
        });
    });
    return {
        children: children,
        htmlProps: htmlProps,
        focusedIndex: focusedIndex,
        setFocusedIndex: setFocusedIndex,
        descendantsContext: descendantsContext,
    };
}
exports.useAccordion = useAccordion;
/**
 * useAccordionItem
 *
 * React hook that provides the open/close functionality
 * for an accordion item and it's children
 */
function useAccordionItem(props) {
    var isDisabled = props.isDisabled, isFocusable = props.isFocusable, onChange = props.onChange, context = props.context, isOpen = props.isOpen, id = props.id, htmlProps = tslib_1.__rest(props, ["isDisabled", "isFocusable", "onChange", "context", "isOpen", "id"]);
    var descendantsContext = context.descendantsContext, focusedIndex = context.focusedIndex, setFocusedIndex = context.setFocusedIndex;
    var onOpen = function () { return onChange === null || onChange === void 0 ? void 0 : onChange(true); };
    var onClose = function () { return onChange === null || onChange === void 0 ? void 0 : onChange(false); };
    var buttonRef = react_1.useRef(null);
    /**
     * generate unique ids for all accordion item components (button and panel)
     */
    var _a = hooks_1.useIds(id, "accordion-button", "accordion-panel"), buttonId = _a[0], panelId = _a[1];
    warn.focusableNotDisabled(props);
    /**
     * Think of this as a way to register this accordion item
     * with it's parent `useAccordion`
     */
    var index = descendant_1.useDescendant({
        element: buttonRef.current,
        context: descendantsContext,
        disabled: isDisabled,
        focusable: isFocusable,
    });
    var descendants = descendantsContext.descendants;
    var shouldFocus = index === focusedIndex;
    /**
     * Autofocus the accordion button when
     * the active index matched the accordion item's index
     */
    hooks_1.useFocusEffect(buttonRef, { shouldFocus: shouldFocus });
    /**
     * Toggle the visibility of the accordion item
     */
    var onClick = function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(!isOpen);
        setFocusedIndex(index);
    };
    /**
     * Manage keyboard navigation between accordion items.
     * `createOnKeyDown` makes it easy to write actions
     * for each event key
     */
    var onKeyDown = utils_1.createOnKeyDown({
        keyMap: {
            ArrowDown: function () {
                var _a;
                var nextIndex = utils_1.getNextIndex(index, descendants.length);
                var nextAccordion = descendants[nextIndex];
                (_a = nextAccordion === null || nextAccordion === void 0 ? void 0 : nextAccordion.element) === null || _a === void 0 ? void 0 : _a.focus();
            },
            ArrowUp: function () {
                var _a;
                var prevIndex = utils_1.getPrevIndex(index, descendants.length);
                var prevAccordion = descendants[prevIndex];
                (_a = prevAccordion === null || prevAccordion === void 0 ? void 0 : prevAccordion.element) === null || _a === void 0 ? void 0 : _a.focus();
            },
            Home: function () {
                var _a;
                var firstAccordion = descendants[0];
                (_a = firstAccordion === null || firstAccordion === void 0 ? void 0 : firstAccordion.element) === null || _a === void 0 ? void 0 : _a.focus();
            },
            End: function () {
                var _a;
                var lastAccordion = descendants[descendants.length - 1];
                (_a = lastAccordion === null || lastAccordion === void 0 ? void 0 : lastAccordion.element) === null || _a === void 0 ? void 0 : _a.focus();
            },
        },
    });
    /**
     * Since each accordion item's button still remains tabbable, let's
     * update the focusedIndex when it receives focus
     */
    var onFocus = function () { return setFocusedIndex(index); };
    return {
        isOpen: isOpen,
        isDisabled: isDisabled,
        isFocusable: isFocusable,
        onOpen: onOpen,
        onClose: onClose,
        /**
         * Prop getters
         */
        getButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { ref: utils_1.mergeRefs(buttonRef, props.ref), id: buttonId, disabled: isDisabled, "aria-expanded": isOpen, "aria-controls": panelId, onClick: utils_1.callAllHandlers(props.onClick, onClick), onFocus: utils_1.callAllHandlers(props.onFocus, onFocus), onKeyDown: utils_1.callAllHandlers(props.onKeyDown, onKeyDown) }));
        },
        getPanelProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { role: "region", id: panelId, "aria-labelledby": buttonId, hidden: !isOpen }));
        },
        getRootProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, htmlProps), { ref: props.ref }));
        },
    };
}
exports.useAccordionItem = useAccordionItem;
//# sourceMappingURL=Accordion.hook.js.map