"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditableControls = exports.useEditableState = exports.EditableInput = exports.EditablePreview = exports.Editable = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Editable_hook_1 = require("./Editable.hook");
var _a = utils_1.createContext(), EditableProvider = _a[0], useEditableContext = _a[1];
var StyledEditable = system_1.chakra("div", { themeKey: "Editable.Root" });
/**
 * Editable
 *
 * The wrapper that provides context and logic for all editable
 * components. It renders a `div`
 */
exports.Editable = react_1.forwardRef(function (props, ref) {
    var _a = Editable_hook_1.useEditable(props), htmlProps = _a.htmlProps, context = tslib_1.__rest(_a, ["htmlProps"]);
    var isEditing = context.isEditing, onSubmit = context.onSubmit, onCancel = context.onCancel, onEdit = context.onEdit;
    var _className = utils_1.cx("chakra-editable", props.className);
    var children = utils_1.isFunction(props.children)
        ? props.children({ isEditing: isEditing, onSubmit: onSubmit, onCancel: onCancel, onEdit: onEdit })
        : props.children;
    return (React.createElement(EditableProvider, { value: context },
        React.createElement(StyledEditable, tslib_1.__assign({ ref: ref }, htmlProps, { className: _className }), children)));
});
var StyledPreview = system_1.chakra("span", { themeKey: "Editable.Preview" });
/**
 * EditablePreview
 *
 * The `span` used to display the final value, in the `preview` mode
 */
exports.EditablePreview = react_1.forwardRef(function (props, ref) {
    var getPreviewProps = useEditableContext().getPreviewProps;
    var previewProps = getPreviewProps(props);
    previewProps.ref = utils_1.mergeRefs(ref, previewProps.ref);
    var _className = utils_1.cx("chakra-editable__preview", props.className);
    return React.createElement(StyledPreview, tslib_1.__assign({}, previewProps, { className: _className }));
});
var StyledInput = system_1.chakra("input", { themeKey: "Editable.Input" });
/**
 * EditableInput
 *
 * The input used in the `edit` mode
 */
exports.EditableInput = react_1.forwardRef(function (props, ref) {
    var getInputProps = useEditableContext().getInputProps;
    var inputProps = getInputProps(tslib_1.__assign(tslib_1.__assign({}, props), { ref: ref }));
    var _className = utils_1.cx("chakra-editable__input", props.className);
    return React.createElement(StyledInput, tslib_1.__assign({}, inputProps, { className: _className }));
});
/**
 * React hook use to gain access to the editable state and actions.
 */
function useEditableState() {
    var _a = useEditableContext(), isEditing = _a.isEditing, onSubmit = _a.onSubmit, onCancel = _a.onCancel, onEdit = _a.onEdit, isDisabled = _a.isDisabled;
    return {
        isEditing: isEditing,
        onSubmit: onSubmit,
        onCancel: onCancel,
        onEdit: onEdit,
        isDisabled: isDisabled,
    };
}
exports.useEditableState = useEditableState;
/**
 * React hook use to create controls for the editable component
 */
function useEditableControls() {
    var _a = useEditableContext(), isEditing = _a.isEditing, getEditButtonProps = _a.getEditButtonProps, getCancelButtonProps = _a.getCancelButtonProps, getSubmitButtonProps = _a.getSubmitButtonProps;
    return {
        isEditing: isEditing,
        getEditButtonProps: getEditButtonProps,
        getCancelButtonProps: getCancelButtonProps,
        getSubmitButtonProps: getSubmitButtonProps,
    };
}
exports.useEditableControls = useEditableControls;
//# sourceMappingURL=Editable.js.map