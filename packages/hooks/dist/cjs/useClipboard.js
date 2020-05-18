"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClipboard = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var copy_to_clipboard_1 = tslib_1.__importDefault(require("copy-to-clipboard"));
/**
 * React hook to copy content to clipboard
 *
 * @param text the text or value to copy
 * @param timeout delay (in ms) to switch back to initial state once copied.
 */
function useClipboard(text, timeout) {
    if (timeout === void 0) { timeout = 1500; }
    var _a = react_1.useState(false), hasCopied = _a[0], setHasCopied = _a[1];
    var onCopy = react_1.useCallback(function () {
        var didCopy = copy_to_clipboard_1.default(text);
        setHasCopied(didCopy);
    }, [text]);
    react_1.useEffect(function () {
        if (hasCopied) {
            var id_1 = setTimeout(function () {
                setHasCopied(false);
            }, timeout);
            return function () { return clearTimeout(id_1); };
        }
    }, [timeout, hasCopied]);
    return [hasCopied, onCopy];
}
exports.useClipboard = useClipboard;
//# sourceMappingURL=useClipboard.js.map