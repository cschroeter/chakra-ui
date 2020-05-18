"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxGroup = exports.useCheckboxGroupContext = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var CheckboxGroup_hook_1 = require("./CheckboxGroup.hook");
var _a = utils_1.createContext({
    name: "CheckboxGroupContext",
    strict: false,
}), CheckboxGroupContextProvider = _a[0], useCheckboxGroupContext = _a[1];
exports.useCheckboxGroupContext = useCheckboxGroupContext;
/**
 * Used for multiple checkboxes which are bound in one group,
 * and it indicates whether one or more options are selected.
 *
 * @see Docs https://chakra-ui.com/checkbox
 */
function CheckboxGroup(props) {
    var colorScheme = props.colorScheme, size = props.size, variant = props.variant, children = props.children;
    var _a = CheckboxGroup_hook_1.useCheckboxGroup(props), value = _a.value, onChange = _a.onChange;
    var group = react_1.useMemo(function () { return ({
        size: size,
        onChange: onChange,
        colorScheme: colorScheme,
        value: value,
        variant: variant,
    }); }, [size, onChange, colorScheme, value, variant]);
    return (React.createElement(CheckboxGroupContextProvider, { value: group }, children));
}
exports.CheckboxGroup = CheckboxGroup;
if (utils_1.__DEV__) {
    CheckboxGroup.displayName = "CheckboxGroup";
}
//# sourceMappingURL=CheckboxGroup.js.map