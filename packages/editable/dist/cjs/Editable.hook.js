"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditable = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var react_1 = require("react");
/**
 * React hook for managing the inline renaming of some text.
 *
 * @see Docs https://chakra-ui.com/useEditable
 */
function useEditable(props) {
    if (props === void 0) { props = {}; }
    var onChangeProp = props.onChange, onCancelProp = props.onCancel, onSubmitProp = props.onSubmit, valueProp = props.value, isDisabled = props.isDisabled, defaultValue = props.defaultValue, startWithEditView = props.startWithEditView, _a = props.isPreviewFocusable, isPreviewFocusable = _a === void 0 ? true : _a, _b = props.submitOnBlur, submitOnBlur = _b === void 0 ? true : _b, _c = props.selectAllOnFocus, selectAllOnFocus = _c === void 0 ? true : _c, placeholder = props.placeholder, onEditProp = props.onEdit, htmlProps = tslib_1.__rest(props, ["onChange", "onCancel", "onSubmit", "value", "isDisabled", "defaultValue", "startWithEditView", "isPreviewFocusable", "submitOnBlur", "selectAllOnFocus", "placeholder", "onEdit"]);
    var defaultIsEditing = Boolean(startWithEditView && !isDisabled);
    var _d = react_1.useState(defaultIsEditing), isEditing = _d[0], setIsEditing = _d[1];
    var _e = hooks_1.useControllableState({
        defaultValue: defaultValue || "",
        value: valueProp,
        onChange: onChangeProp,
        shouldUpdate: function (prev, next) { return prev !== next; },
    }), value = _e[0], setValue = _e[1];
    /**
     * Keep track of the previous value, so if users
     * presses `cancel`, we can revert to it.
     */
    var _f = react_1.useState(value), prevValue = _f[0], setPrevValue = _f[1];
    /**
     * Ref to help focus the input in edit mode
     */
    var inputRef = react_1.useRef(null);
    var previewRef = react_1.useRef(null);
    var editButtonRef = react_1.useRef(null);
    var isInteractive = !isEditing || !isDisabled;
    hooks_1.useUpdateEffect(function () {
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
    var onEdit = react_1.useCallback(function () {
        if (isInteractive) {
            setIsEditing(true);
        }
    }, [isInteractive]);
    var onCancel = react_1.useCallback(function () {
        setIsEditing(false);
        setValue(prevValue);
        onCancelProp === null || onCancelProp === void 0 ? void 0 : onCancelProp(prevValue);
    }, [onCancelProp, setValue, prevValue]);
    var onSubmit = react_1.useCallback(function () {
        setIsEditing(false);
        setPrevValue(value);
        onSubmitProp === null || onSubmitProp === void 0 ? void 0 : onSubmitProp(value);
    }, [value, onSubmitProp]);
    var onChange = react_1.useCallback(function (event) {
        setValue(event.target.value);
    }, [setValue]);
    var onKeyDown = utils_1.createOnKeyDown({
        keyMap: {
            Escape: onCancel,
            Enter: function (event) {
                if (!event.shiftKey && !event.metaKey) {
                    onSubmit();
                }
            },
        },
    });
    var isValueEmpty = utils_1.isEmpty(value);
    var getTabIndex = function () {
        var shouldHaveTabIndex = isInteractive && isPreviewFocusable;
        return shouldHaveTabIndex ? 0 : undefined;
    };
    var onBlur = react_1.useCallback(function () {
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
            return (tslib_1.__assign(tslib_1.__assign({}, props), { ref: utils_1.mergeRefs(props.ref, previewRef), children: isValueEmpty ? placeholder : value, hidden: isEditing, "aria-disabled": utils_1.ariaAttr(isDisabled), tabIndex: getTabIndex(), onFocus: utils_1.callAllHandlers(props.onFocus, onEdit) }));
        },
        getInputProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { hidden: !isEditing, placeholder: placeholder, ref: utils_1.mergeRefs(props.ref, inputRef), disabled: isDisabled, "aria-disabled": utils_1.ariaAttr(isDisabled), value: value, onBlur: utils_1.callAllHandlers(props.onBlur, onBlur), onChange: utils_1.callAllHandlers(props.onChange, onChange), onKeyDown: utils_1.callAllHandlers(props.onKeyDown, onKeyDown) }));
        },
        getEditButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({ "aria-label": "Edit" }, props), { type: "button", onClick: utils_1.callAllHandlers(props.onClick, onEdit), ref: utils_1.mergeRefs(props.ref, editButtonRef) }));
        },
        getSubmitButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({ "aria-label": "Submit" }, props), { type: "button", onClick: utils_1.callAllHandlers(props.onClick, onSubmit) }));
        },
        getCancelButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({ "aria-label": "Cancel" }, props), { type: "button", onClick: utils_1.callAllHandlers(props.onClick, onCancel) }));
        },
        htmlProps: htmlProps,
    };
}
exports.useEditable = useEditable;
//# sourceMappingURL=Editable.hook.js.map