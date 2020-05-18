import { __assign, __rest } from "tslib";
import { useControllableState, useUpdateEffect } from "@chakra-ui/hooks";
import { callAllHandlers, createOnKeyDown, isEmpty, mergeRefs, ariaAttr, } from "@chakra-ui/utils";
import { useRef, useState, useCallback } from "react";
/**
 * React hook for managing the inline renaming of some text.
 *
 * @see Docs https://chakra-ui.com/useEditable
 */
export function useEditable(props) {
    if (props === void 0) { props = {}; }
    var onChangeProp = props.onChange, onCancelProp = props.onCancel, onSubmitProp = props.onSubmit, valueProp = props.value, isDisabled = props.isDisabled, defaultValue = props.defaultValue, startWithEditView = props.startWithEditView, _a = props.isPreviewFocusable, isPreviewFocusable = _a === void 0 ? true : _a, _b = props.submitOnBlur, submitOnBlur = _b === void 0 ? true : _b, _c = props.selectAllOnFocus, selectAllOnFocus = _c === void 0 ? true : _c, placeholder = props.placeholder, onEditProp = props.onEdit, htmlProps = __rest(props, ["onChange", "onCancel", "onSubmit", "value", "isDisabled", "defaultValue", "startWithEditView", "isPreviewFocusable", "submitOnBlur", "selectAllOnFocus", "placeholder", "onEdit"]);
    var defaultIsEditing = Boolean(startWithEditView && !isDisabled);
    var _d = useState(defaultIsEditing), isEditing = _d[0], setIsEditing = _d[1];
    var _e = useControllableState({
        defaultValue: defaultValue || "",
        value: valueProp,
        onChange: onChangeProp,
        shouldUpdate: function (prev, next) { return prev !== next; },
    }), value = _e[0], setValue = _e[1];
    /**
     * Keep track of the previous value, so if users
     * presses `cancel`, we can revert to it.
     */
    var _f = useState(value), prevValue = _f[0], setPrevValue = _f[1];
    /**
     * Ref to help focus the input in edit mode
     */
    var inputRef = useRef(null);
    var previewRef = useRef(null);
    var editButtonRef = useRef(null);
    var isInteractive = !isEditing || !isDisabled;
    useUpdateEffect(function () {
        var _a, _b, _c;
        if (!isEditing) {
            (_a = editButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            return;
        }
        if (selectAllOnFocus) {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.select();
        }
        else {
            (_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.focus();
        }
        onEditProp === null || onEditProp === void 0 ? void 0 : onEditProp();
    }, [isEditing, selectAllOnFocus]);
    var onEdit = useCallback(function () {
        if (isInteractive) {
            setIsEditing(true);
        }
    }, [isInteractive]);
    var onCancel = useCallback(function () {
        setIsEditing(false);
        setValue(prevValue);
        onCancelProp === null || onCancelProp === void 0 ? void 0 : onCancelProp(prevValue);
    }, [onCancelProp, setValue, prevValue]);
    var onSubmit = useCallback(function () {
        setIsEditing(false);
        setPrevValue(value);
        onSubmitProp === null || onSubmitProp === void 0 ? void 0 : onSubmitProp(value);
    }, [value, onSubmitProp]);
    var onChange = useCallback(function (event) {
        setValue(event.target.value);
    }, [setValue]);
    var onKeyDown = createOnKeyDown({
        keyMap: {
            Escape: onCancel,
            Enter: function (event) {
                if (!event.shiftKey && !event.metaKey) {
                    onSubmit();
                }
            },
        },
    });
    var isValueEmpty = isEmpty(value);
    var getTabIndex = function () {
        var shouldHaveTabIndex = isInteractive && isPreviewFocusable;
        return shouldHaveTabIndex ? 0 : undefined;
    };
    var onBlur = useCallback(function () {
        if (submitOnBlur) {
            onSubmit();
        }
    }, [submitOnBlur, onSubmit]);
    return {
        isEditing: isEditing,
        isDisabled: isDisabled,
        isValueEmpty: isValueEmpty,
        value: value,
        onEdit: onEdit,
        onCancel: onCancel,
        onSubmit: onSubmit,
        getPreviewProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { ref: mergeRefs(props.ref, previewRef), children: isValueEmpty ? placeholder : value, hidden: isEditing, "aria-disabled": ariaAttr(isDisabled), tabIndex: getTabIndex(), onFocus: callAllHandlers(props.onFocus, onEdit) }));
        },
        getInputProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { hidden: !isEditing, placeholder: placeholder, ref: mergeRefs(props.ref, inputRef), disabled: isDisabled, "aria-disabled": ariaAttr(isDisabled), value: value, onBlur: callAllHandlers(props.onBlur, onBlur), onChange: callAllHandlers(props.onChange, onChange), onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown) }));
        },
        getEditButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({ "aria-label": "Edit" }, props), { type: "button", onClick: callAllHandlers(props.onClick, onEdit), ref: mergeRefs(props.ref, editButtonRef) }));
        },
        getSubmitButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({ "aria-label": "Submit" }, props), { type: "button", onClick: callAllHandlers(props.onClick, onSubmit) }));
        },
        getCancelButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({ "aria-label": "Cancel" }, props), { type: "button", onClick: callAllHandlers(props.onClick, onCancel) }));
        },
        htmlProps: htmlProps,
    };
}
//# sourceMappingURL=Editable.hook.js.map