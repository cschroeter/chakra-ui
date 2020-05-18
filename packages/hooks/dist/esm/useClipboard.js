import { useCallback, useEffect, useState } from "react";
import copy from "copy-to-clipboard";
/**
 * React hook to copy content to clipboard
 *
 * @param text the text or value to copy
 * @param timeout delay (in ms) to switch back to initial state once copied.
 */
export function useClipboard(text, timeout) {
    if (timeout === void 0) { timeout = 1500; }
    var _a = useState(false), hasCopied = _a[0], setHasCopied = _a[1];
    var onCopy = useCallback(function () {
        var didCopy = copy(text);
        setHasCopied(didCopy);
    }, [text]);
    useEffect(function () {
        if (hasCopied) {
            var id_1 = setTimeout(function () {
                setHasCopied(false);
            }, timeout);
            return function () { return clearTimeout(id_1); };
        }
    }, [timeout, hasCopied]);
    return [hasCopied, onCopy];
}
//# sourceMappingURL=useClipboard.js.map