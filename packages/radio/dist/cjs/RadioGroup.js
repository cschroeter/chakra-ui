"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroup = exports.useRadioGroupContext = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var RadioGroup_hook_1 = require("./RadioGroup.hook");
var _a = utils_1.createContext({
    name: "RadioGroupContext",
    strict: false,
}), RadioGroupContextProvider = _a[0], useRadioGroupContext = _a[1];
exports.useRadioGroupContext = useRadioGroupContext;
/**
 * Used for multiple radios which are bound in one group,
 * and it indicates which option is selected.
 *
 * @see Docs https://chakra-ui.com/radio
 */
exports.RadioGroup = React.forwardRef(function (props, ref) {
    var colorScheme = props.colorScheme, size = props.size, variant = props.variant, children = props.children, className = props.className, radioGroupProps = tslib_1.__rest(props, ["colorScheme", "size", "variant", "children", "className"]);
    var _a = RadioGroup_hook_1.useRadioGroup(radioGroupProps), value = _a.value, onChange = _a.onChange, getRootProps = _a.getRootProps, name = _a.name, rest = _a.htmlProps;
    var group = React.useMemo(function () { return ({
        name: name,
        size: size,
        onChange: onChange,
        colorScheme: colorScheme,
        value: value,
        variant: variant,
    }); }, [size, name, onChange, colorScheme, value, variant]);
    var groupProps = getRootProps(tslib_1.__assign({ ref: ref }, rest));
    var _className = utils_1.cx("chakra-radio-group", className);
    return (React.createElement(RadioGroupContextProvider, { value: group },
        React.createElement(system_1.chakra.div, tslib_1.__assign({}, groupProps, { className: _className }), children)));
});
if (utils_1.__DEV__) {
    exports.RadioGroup.displayName = "RadioGroup";
}
//# sourceMappingURL=RadioGroup.js.map