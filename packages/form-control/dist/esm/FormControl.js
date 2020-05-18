import { __assign, __rest } from "tslib";
import { useBoolean, useId, useSafeLayoutEffect } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { chakra, useComponentStyle } from "@chakra-ui/system";
import { callAllHandlers, createContext, cx, dataAttr, __DEV__, } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef } from "react";
var _a = createContext({
    strict: false,
    name: "FormControlContext",
}), FormControlCtxProvider = _a[0], useFormControlContext = _a[1];
export { useFormControlContext };
function useProvider(props) {
    var idProp = props.id, isRequired = props.isRequired, isInvalid = props.isInvalid, isDisabled = props.isDisabled, isLoading = props.isLoading, isReadOnly = props.isReadOnly, htmlProps = __rest(props
    // Generate all the required ids
    , ["id", "isRequired", "isInvalid", "isDisabled", "isLoading", "isReadOnly"]);
    // Generate all the required ids
    var uuid = useId();
    var id = idProp || "field-" + uuid;
    var labelId = id + "-label";
    var feedbackId = id + "-feedback";
    var helpTextId = id + "-helptext";
    /**
     * Track of when the `FormHelperText` has been rendered.
     * We use this to append it's id the the `aria-describedby` of the `input`
     */
    var _a = useBoolean(), hasHelpText = _a[0], setHasHelpText = _a[1];
    // Let's keep track of when we focus the form element (e.g, `input`)
    var _b = useBoolean(), isFocused = _b[0], setFocus = _b[1];
    var context = {
        isRequired: isRequired,
        isInvalid: isInvalid,
        isLoading: isLoading,
        isReadOnly: isReadOnly,
        isDisabled: isDisabled,
        isFocused: isFocused,
        onFocus: setFocus.on,
        onBlur: setFocus.off,
        hasHelpText: hasHelpText,
        setHasHelpText: setHasHelpText,
        id: id,
        labelId: labelId,
        feedbackId: feedbackId,
        helpTextId: helpTextId,
        htmlProps: htmlProps,
    };
    return context;
}
var StyledFormControl = chakra("div", {
    themeKey: "Form.Root",
    baseStyle: {
        width: "100%",
        position: "relative",
    },
    attrs: {
        role: "group",
    },
});
/**
 * FormControl
 *
 * React component that provides context such as
 * `isInvalid`, `isDisabled`, and `isRequired` to form elements.
 *
 * This is commonly used in form elements such as `input`,
 * `select`, `textarea`, etc.
 */
export var FormControl = forwardRef(function (props, ref) {
    var _a = useProvider(props), htmlProps = _a.htmlProps, context = __rest(_a, ["htmlProps"]);
    var _className = cx("chakra-form-control", props.className);
    return (React.createElement(FormControlCtxProvider, { value: context },
        React.createElement(StyledFormControl, __assign({ ref: ref }, htmlProps, { className: _className }))));
});
if (__DEV__) {
    FormControl.displayName = "FormControl";
}
/**
 * Label - Theming
 *
 * To style form labels globally, change the styles in `theme.components.FormLabel`
 */
var StyledLabel = chakra("label", {
    themeKey: "Form.Label",
    baseStyle: {
        display: "block",
        textAlign: "left",
    },
});
/**
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibilty: Every form field should have a form label.
 */
export var FormLabel = forwardRef(function (props, ref) {
    var _a, _b;
    var field = useFormControlContext();
    return (React.createElement(StyledLabel, __assign({}, props, { className: cx("chakra-form__label", props.className), ref: ref, "data-focus": dataAttr(field === null || field === void 0 ? void 0 : field.isFocused), "data-disabled": dataAttr(field === null || field === void 0 ? void 0 : field.isDisabled), "data-invalid": dataAttr(field === null || field === void 0 ? void 0 : field.isInvalid), "data-loading": dataAttr(field === null || field === void 0 ? void 0 : field.isLoading), "data-readonly": dataAttr(field === null || field === void 0 ? void 0 : field.isReadOnly), id: (_a = props.id) !== null && _a !== void 0 ? _a : field === null || field === void 0 ? void 0 : field.labelId, htmlFor: (_b = props.htmlFor) !== null && _b !== void 0 ? _b : field === null || field === void 0 ? void 0 : field.id })));
});
if (__DEV__) {
    FormLabel.displayName = "FormLabel";
}
/**
 * RequiredIndicator - Theming
 *
 * To style the required indicator globally, change the styled in
 * `theme.components.Form` under the `RequiredIndicator` key
 */
var StyledIndicator = chakra("span", {
    themeKey: "Form.RequiredIndicator",
    attrs: {
        role: "presentation",
        "aria-hidden": true,
    },
});
/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export var RequiredIndicator = forwardRef(function (props, ref) {
    var field = useFormControlContext();
    if (!(field === null || field === void 0 ? void 0 : field.isRequired))
        return null;
    var _className = cx("chakra-form__required-indicator", props.className);
    return React.createElement(StyledIndicator, __assign({ ref: ref }, props, { className: _className }));
});
if (__DEV__) {
    RequiredIndicator.displayName = "RequiredIndicator";
}
/**
 * FormHelperText - Theming
 *
 * To style the required indicator globally, change the styled in
 * `theme.components.Form` under the `HelperText` key
 */
var StyledHelperText = chakra("div", {
    themeKey: "Form.HelperText",
});
/**
 * FormHelperText
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided
 */
export var FormHelperText = forwardRef(function (props, ref) {
    var _a;
    var field = useFormControlContext();
    /**
     * Notify the field context when the help text is rendered on
     * screen, so we can apply the correct `aria-describedby` to the field (e.g. input, textarea)
     */
    useSafeLayoutEffect(function () {
        field === null || field === void 0 ? void 0 : field.setHasHelpText.on();
        return function () { return field === null || field === void 0 ? void 0 : field.setHasHelpText.off(); };
    }, []);
    var _className = cx("chakra-form__helper-text", props.className);
    return (React.createElement(StyledHelperText, __assign({ ref: ref }, props, { className: _className, id: (_a = props.id) !== null && _a !== void 0 ? _a : field === null || field === void 0 ? void 0 : field.helpTextId })));
});
if (__DEV__) {
    FormHelperText.displayName = "FormHelperText";
}
/**
 * ErrorText Theming
 *
 * To style the error text globally, change the styles in
 * `theme.components.Form` under the `ErrorText` key
 */
var StyledErrorText = chakra("div", {
    themeKey: "Form.ErrorText",
    baseStyle: {
        display: "flex",
        alignItems: "center",
    },
    attrs: {
        "aria-live": "polite",
    },
});
/**
 * Used to provide feedback about an invalid input,
 * and suggest clear instrctions on how to fix it.
 */
export var FormErrorMessage = forwardRef(function (props, ref) {
    var _a;
    var field = useFormControlContext();
    if (!(field === null || field === void 0 ? void 0 : field.isInvalid))
        return null;
    var _className = cx("chakra-form__error-message", props.className);
    return (React.createElement(StyledErrorText, __assign({ ref: ref }, props, { className: _className, id: (_a = props.id) !== null && _a !== void 0 ? _a : field === null || field === void 0 ? void 0 : field.feedbackId })));
});
if (__DEV__) {
    FormErrorMessage.displayName = "FormErrorMessage";
}
/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 */
export function useFormControl(props) {
    var _a;
    var field = useFormControlContext();
    var describedBy = [];
    if (field === null || field === void 0 ? void 0 : field.isInvalid) {
        /**
         * Error message must be described first
         * in all scenarios
         */
        if (describedBy.length > 0) {
            describedBy.unshift(field.feedbackId);
        }
        else {
            describedBy.push(field.feedbackId);
        }
    }
    if (field === null || field === void 0 ? void 0 : field.hasHelpText)
        describedBy.push(field.helpTextId);
    var ariaDescribedBy = describedBy.join(" ");
    return __assign(__assign({}, props), { id: (_a = props.id) !== null && _a !== void 0 ? _a : field === null || field === void 0 ? void 0 : field.id, disabled: props.isDisabled || (field === null || field === void 0 ? void 0 : field.isDisabled), readOnly: props.isReadOnly || (field === null || field === void 0 ? void 0 : field.isReadOnly), "aria-invalid": props.isInvalid || (field === null || field === void 0 ? void 0 : field.isInvalid), "aria-required": props.isRequired || (field === null || field === void 0 ? void 0 : field.isRequired), "aria-readonly": props.isReadOnly || (field === null || field === void 0 ? void 0 : field.isReadOnly), "aria-describedby": ariaDescribedBy || undefined, onFocus: callAllHandlers(field === null || field === void 0 ? void 0 : field.onFocus, props.onFocus), onBlur: callAllHandlers(field === null || field === void 0 ? void 0 : field.onBlur, props.onBlur) });
}
/**
 * Used as the visual indicator that a field is invalid or
 * a field has incorrect values.
 */
export var FormErrorIcon = forwardRef(function (props, ref) {
    var styles = useComponentStyle({ themeKey: "Form.ErrorIcon" });
    var field = useFormControlContext();
    if (!(field === null || field === void 0 ? void 0 : field.isInvalid))
        return null;
    var _className = cx("chakra-form__error-icon", props.className);
    return (React.createElement(Icon, __assign({ ref: ref, "aria-hidden": true, sx: styles }, props, { className: _className }),
        React.createElement("path", { fill: "currentColor", d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z" })));
});
if (__DEV__) {
    FormErrorIcon.displayName = "FormErrorIcon";
}
//# sourceMappingURL=FormControl.js.map