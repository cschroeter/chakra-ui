"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventListener = void 0;
var react_1 = require("react");
var utils_1 = require("@chakra-ui/utils");
var useLatestRef_1 = require("./useLatestRef");
/**
 * React hook to manage browser event listeners
 *
 * @param event the event name
 * @param handler the event handler function to execute
 * @param doc the dom environment to execute against (defaults to `document`)
 * @param options the event listener options
 */
function useEventListener(event, handler, doc, options) {
    if (doc === void 0) { doc = utils_1.isBrowser ? document : null; }
    var savedHandler = useLatestRef_1.useLatestRef(handler);
    react_1.useEffect(function () {
        if (!doc)
            return;
        var listener = function (event) {
            savedHandler.current(event);
        };
        doc.addEventListener(event, listener, options);
        return function () {
            doc.removeEventListener(event, listener, options);
        };
    }, [event, doc, options, savedHandler]);
    return function () {
        doc === null || doc === void 0 ? void 0 : doc.removeEventListener(event, savedHandler.current, options);
    };
}
exports.useEventListener = useEventListener;
//# sourceMappingURL=useEventListener.js.map