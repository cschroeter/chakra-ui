"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDescendants = exports.useDescendant = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var hooks_1 = require("@chakra-ui/hooks");
function useDescendant(props) {
    var context = props.context, element = props.element, indexProp = props.index, disabled = props.disabled, focusable = props.focusable, rest = tslib_1.__rest(props, ["context", "element", "index", "disabled", "focusable"]);
    var forceUpdate = hooks_1.useForceUpdate();
    var register = context.register, unregister = context.unregister, descendants = context.descendants;
    hooks_1.useSafeLayoutEffect(function () {
        if (!element) {
            forceUpdate();
        }
        /**
         * Don't register this descendant if it's disabled and not focusable
         */
        if (disabled && !focusable)
            return;
        /**
         * else, register the descendant
         */
        register(tslib_1.__assign({ element: element }, rest));
        /**
         * when it unmounts, unregister the descendant
         */
        return function () {
            if (element) {
                unregister(element);
            }
        };
        //eslint-disable-next-line
    }, tslib_1.__spreadArrays([element], Object.values(rest)));
    var index = indexProp !== null && indexProp !== void 0 ? indexProp : descendants.findIndex(function (descendant) { return descendant.element === element; });
    return index;
}
exports.useDescendant = useDescendant;
function useDescendants() {
    var _a = react_1.useState([]), descendants = _a[0], setDescendants = _a[1];
    var register = react_1.useCallback(function (_a) {
        var element = _a.element, rest = tslib_1.__rest(_a, ["element"]);
        if (!element)
            return;
        //@ts-ignore
        setDescendants(function (prevDescendants) {
            if (prevDescendants.find(function (item) { return item.element === element; }) == null) {
                var index = prevDescendants.findIndex(function (item) {
                    if (!item.element || !element)
                        return false;
                    return Boolean(item.element.compareDocumentPosition(element) &
                        Node.DOCUMENT_POSITION_PRECEDING);
                });
                var newItem = tslib_1.__assign({ element: element }, rest);
                if (index === -1) {
                    return tslib_1.__spreadArrays(prevDescendants, [newItem]);
                }
                return tslib_1.__spreadArrays(prevDescendants.slice(0, index), [
                    newItem
                ], prevDescendants.slice(index));
            }
            return prevDescendants;
        });
    }, []);
    var unregister = react_1.useCallback(function (element) {
        if (!element)
            return;
        setDescendants(function (descendants) {
            return descendants.filter(function (descendant) { return element !== descendant.element; });
        });
    }, []);
    var context = react_1.useMemo(function () {
        return { descendants: descendants, register: register, unregister: unregister };
    }, [descendants, register, unregister]);
    return context;
}
exports.useDescendants = useDescendants;
//# sourceMappingURL=Descendant.js.map