"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocusEffect = void 0;
var utils_1 = require("@chakra-ui/utils");
var useUpdateEffect_1 = require("./useUpdateEffect");
/**
 * React hook to focus an element conditionally
 *
 * @param ref the ref of the element to focus
 * @param options focus management options
 */
function useFocusEffect(ref, options) {
    var shouldFocus = options.shouldFocus, preventScroll = options.preventScroll;
    useUpdateEffect_1.useUpdateEffect(function () {
        var node = ref.current;
        if (!node || !shouldFocus)
            return;
        if (!utils_1.hasFocusWithin(node)) {
            utils_1.ensureFocus(node, { preventScroll: preventScroll });
        }
    }, [shouldFocus, ref]);
}
exports.useFocusEffect = useFocusEffect;
//# sourceMappingURL=useFocusEffect.js.map