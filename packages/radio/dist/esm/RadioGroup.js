import { __assign, __rest } from "tslib";
import { chakra } from "@chakra-ui/system";
import { createContext, __DEV__, cx } from "@chakra-ui/utils";
import * as React from "react";
import { useRadioGroup, } from "./RadioGroup.hook";
var _a = createContext({
    name: "RadioGroupContext",
    strict: false,
}), RadioGroupContextProvider = _a[0], useRadioGroupContext = _a[1];
export { useRadioGroupContext };
/**
 * Used for multiple radios which are bound in one group,
 * and it indicates which option is selected.
 *
 * @see Docs https://chakra-ui.com/radio
 */
export var RadioGroup = React.forwardRef(function (props, ref) {
    var colorScheme = props.colorScheme, size = props.size, variant = props.variant, children = props.children, className = props.className, radioGroupProps = __rest(props, ["colorScheme", "size", "variant", "children", "className"]);
    var _a = useRadioGroup(radioGroupProps), value = _a.value, onChange = _a.onChange, getRootProps = _a.getRootProps, name = _a.name, rest = _a.htmlProps;
    var group = React.useMemo(function () { return ({
        name: name,
        size: size,
        onChange: onChange,
        colorScheme: colorScheme,
        value: value,
        variant: variant,
    }); }, [size, name, onChange, colorScheme, value, variant]);
    var groupProps = getRootProps(__assign({ ref: ref }, rest));
    var _className = cx("chakra-radio-group", className);
    return (React.createElement(RadioGroupContextProvider, { value: group },
        React.createElement(chakra.div, __assign({}, groupProps, { className: _className }), children)));
});
if (__DEV__) {
    RadioGroup.displayName = "RadioGroup";
}
//# sourceMappingURL=RadioGroup.js.map