import { hasFocusWithin, ensureFocus } from "@chakra-ui/utils";
import { useUpdateEffect } from "./useUpdateEffect";
/**
 * React hook to focus an element conditionally
 *
 * @param ref the ref of the element to focus
 * @param options focus management options
 */
export function useFocusEffect(ref, options) {
    var shouldFocus = options.shouldFocus, preventScroll = options.preventScroll;
    useUpdateEffect(function () {
        var node = ref.current;
        if (!node || !shouldFocus)
            return;
        if (!hasFocusWithin(node)) {
            ensureFocus(node, { preventScroll: preventScroll });
        }
    }, [shouldFocus, ref]);
}
//# sourceMappingURL=useFocusEffect.js.map