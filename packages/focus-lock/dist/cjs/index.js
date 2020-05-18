"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusLock = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_focus_lock_1 = tslib_1.__importDefault(require("react-focus-lock"));
/**
 * React component to trap focus within an element or component.
 * Mostly used in Modals, Popovers, etc.
 *
 * @see Docs https://chakra-ui.com/focuslock
 */
function FocusLock(props) {
    var initialFocusRef = props.initialFocusRef, finalFocusRef = props.finalFocusRef, restoreFocus = props.restoreFocus, children = props.children, isDisabled = props.isDisabled, _a = props.autoFocus, autoFocus = _a === void 0 ? true : _a;
    var onActivation = React.useCallback(function () {
        var _a;
        (_a = initialFocusRef === null || initialFocusRef === void 0 ? void 0 : initialFocusRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [initialFocusRef]);
    var onDeactivation = React.useCallback(function () {
        var _a;
        (_a = finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [finalFocusRef]);
    var returnFocus = restoreFocus && !finalFocusRef;
    return (React.createElement(react_focus_lock_1.default, { autoFocus: autoFocus, disabled: isDisabled, onActivation: onActivation, onDeactivation: onDeactivation, returnFocus: returnFocus }, children));
}
exports.FocusLock = FocusLock;
//# sourceMappingURL=index.js.map