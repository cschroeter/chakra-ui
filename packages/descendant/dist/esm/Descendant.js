import { __assign, __rest, __spreadArrays } from "tslib";
import { useState, useCallback, useMemo } from "react";
import { useSafeLayoutEffect, useForceUpdate } from "@chakra-ui/hooks";
export function useDescendant(props) {
    var context = props.context, element = props.element, indexProp = props.index, disabled = props.disabled, focusable = props.focusable, rest = __rest(props, ["context", "element", "index", "disabled", "focusable"]);
    var forceUpdate = useForceUpdate();
    var register = context.register, unregister = context.unregister, descendants = context.descendants;
    useSafeLayoutEffect(function () {
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
        register(__assign({ element: element }, rest));
        /**
         * when it unmounts, unregister the descendant
         */
        return function () {
            if (element) {
                unregister(element);
            }
        };
        //eslint-disable-next-line
    }, __spreadArrays([element], Object.values(rest)));
    var index = indexProp !== null && indexProp !== void 0 ? indexProp : descendants.findIndex(function (descendant) { return descendant.element === element; });
    return index;
}
export function useDescendants() {
    var _a = useState([]), descendants = _a[0], setDescendants = _a[1];
    var register = useCallback(function (_a) {
        var element = _a.element, rest = __rest(_a, ["element"]);
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
                var newItem = __assign({ element: element }, rest);
                if (index === -1) {
                    return __spreadArrays(prevDescendants, [newItem]);
                }
                return __spreadArrays(prevDescendants.slice(0, index), [
                    newItem
                ], prevDescendants.slice(index));
            }
            return prevDescendants;
        });
    }, []);
    var unregister = useCallback(function (element) {
        if (!element)
            return;
        setDescendants(function (descendants) {
            return descendants.filter(function (descendant) { return element !== descendant.element; });
        });
    }, []);
    var context = useMemo(function () {
        return { descendants: descendants, register: register, unregister: unregister };
    }, [descendants, register, unregister]);
    return context;
}
//# sourceMappingURL=Descendant.js.map