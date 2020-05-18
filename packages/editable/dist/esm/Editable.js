import { __assign, __rest } from "tslib";
import { chakra } from "@chakra-ui/system";
import { createContext, cx, isFunction, mergeRefs, } from "@chakra-ui/utils";
import * as React from "react";
import { forwardRef } from "react";
import { useEditable, } from "./Editable.hook";
var _a = createContext(), EditableProvider = _a[0], useEditableContext = _a[1];
var StyledEditable = chakra("div", { themeKey: "Editable.Root" });
/**
 * Editable
 *
 * The wrapper that provides context and logic for all editable
 * components. It renders a `div`
 */
export var Editable = forwardRef(function (props, ref) {
    var _a = useEditable(props), htmlProps = _a.htmlProps, context = __rest(_a, ["htmlProps"]);
    var isEditing = context.isEditing, onSubmit = context.onSubmit, onCancel = context.onCancel, onEdit = context.onEdit;
    var _className = cx("chakra-editable", props.className);
    var children = isFunction(props.children)
        ? props.children({ isEditing: isEditing, onSubmit: onSubmit, onCancel: onCancel, onEdit: onEdit })
        : props.children;
    return (React.createElement(EditableProvider, { value: context },
        React.createElement(StyledEditable, __assign({ ref: ref }, htmlProps, { className: _className }), children)));
});
var StyledPreview = chakra("span", { themeKey: "Editable.Preview" });
/**
 * EditablePreview
 *
 * The `span` used to display the final value, in the `preview` mode
 */
export var EditablePreview = forwardRef(function (props, ref) {
    var getPreviewProps = useEditableContext().getPreviewProps;
    var previewProps = getPreviewProps(props);
    previewProps.ref = mergeRefs(ref, previewProps.ref);
    var _className = cx("chakra-editable__preview", props.className);
    return React.createElement(StyledPreview, __assign({}, previewProps, { className: _className }));
});
var StyledInput = chakra("input", { themeKey: "Editable.Input" });
/**
 * EditableInput
 *
 * The input used in the `edit` mode
 */
export var EditableInput = forwardRef(function (props, ref) {
    var getInputProps = useEditableContext().getInputProps;
    var inputProps = getInputProps(__assign(__assign({}, props), { ref: ref }));
    var _className = cx("chakra-editable__input", props.className);
    return React.createElement(StyledInput, __assign({}, inputProps, { className: _className }));
});
/**
 * React hook use to gain access to the editable state and actions.
 */
export function useEditableState() {
    var _a = useEditableContext(), isEditing = _a.isEditing, onSubmit = _a.onSubmit, onCancel = _a.onCancel, onEdit = _a.onEdit, isDisabled = _a.isDisabled;
    return {
        isEditing: isEditing,
        onSubmit: onSubmit,
        onCancel: onCancel,
        onEdit: onEdit,
        isDisabled: isDisabled,
    };
}
/**
 * React hook use to create controls for the editable component
 */
export function useEditableControls() {
    var _a = useEditableContext(), isEditing = _a.isEditing, getEditButtonProps = _a.getEditButtonProps, getCancelButtonProps = _a.getCancelButtonProps, getSubmitButtonProps = _a.getSubmitButtonProps;
    return {
        isEditing: isEditing,
        getEditButtonProps: getEditButtonProps,
        getCancelButtonProps: getCancelButtonProps,
        getSubmitButtonProps: getSubmitButtonProps,
    };
}
//# sourceMappingURL=Editable.js.map