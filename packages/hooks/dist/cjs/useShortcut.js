"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShortcut = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
/**
 * Checks if the key pressed is a printable character
 * and can be used for shortcut navigation
 *
 * @param event the keyboard event
 */
function isPrintableCharacter(event) {
    var key = event.key;
    return key.length == 1 || (key.length > 1 && /[^a-zA-Z0-9]/.test(key));
}
/**
 * React hook that provides an enhanced keydown handler,
 * that's used for key navigation within menus, select dropdowns.
 *
 * @param props the shortcut options
 */
function useShortcut(props) {
    if (props === void 0) { props = {}; }
    var _a = props.timeout, timeout = _a === void 0 ? 300 : _a, _b = props.preventDefault, preventDefault = _b === void 0 ? function () { return true; } : _b;
    var _c = react_1.useState([]), keys = _c[0], setKeys = _c[1];
    var timeoutId = react_1.useRef();
    var flush = function () {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }
    };
    var clearKeysAfterDelay = function () {
        flush();
        timeoutId.current = setTimeout(function () {
            setKeys([]);
            timeoutId.current = null;
        }, timeout);
    };
    react_1.useEffect(function () {
        return function () { return flush(); };
    }, []);
    function onKeyDown(callback) {
        return function (event) {
            if (event.key === "Backspace") {
                var keysCopy = tslib_1.__spreadArrays(keys);
                keysCopy.pop();
                setKeys(keysCopy);
                return;
            }
            if (isPrintableCharacter(event)) {
                var keysCopy = keys.concat(event.key);
                if (preventDefault(event)) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                setKeys(keysCopy);
                callback(keysCopy.join(""));
                clearKeysAfterDelay();
            }
        };
    }
    return onKeyDown;
}
exports.useShortcut = useShortcut;
//# sourceMappingURL=useShortcut.js.map