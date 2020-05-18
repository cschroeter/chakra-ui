import { useEffect } from "react";
import { isBrowser } from "@chakra-ui/utils";
import { useLatestRef } from "./useLatestRef";
/**
 * React hook to manage browser event listeners
 *
 * @param event the event name
 * @param handler the event handler function to execute
 * @param doc the dom environment to execute against (defaults to `document`)
 * @param options the event listener options
 */
export function useEventListener(event, handler, doc, options) {
    if (doc === void 0) { doc = isBrowser ? document : null; }
    var savedHandler = useLatestRef(handler);
    useEffect(function () {
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
//# sourceMappingURL=useEventListener.js.map