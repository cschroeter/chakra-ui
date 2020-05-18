import * as React from "react";
import ReactFocusLock from "react-focus-lock";
/**
 * React component to trap focus within an element or component.
 * Mostly used in Modals, Popovers, etc.
 *
 * @see Docs https://chakra-ui.com/focuslock
 */
export function FocusLock(props) {
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
    return (React.createElement(ReactFocusLock, { autoFocus: autoFocus, disabled: isDisabled, onActivation: onActivation, onDeactivation: onDeactivation, returnFocus: returnFocus }, children));
}
//# sourceMappingURL=index.js.map