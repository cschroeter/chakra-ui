import { createContext, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { useMemo } from "react";
import { useCheckboxGroup, } from "./CheckboxGroup.hook";
var _a = createContext({
    name: "CheckboxGroupContext",
    strict: false,
}), CheckboxGroupContextProvider = _a[0], useCheckboxGroupContext = _a[1];
export { useCheckboxGroupContext };
/**
 * Used for multiple checkboxes which are bound in one group,
 * and it indicates whether one or more options are selected.
 *
 * @see Docs https://chakra-ui.com/checkbox
 */
export function CheckboxGroup(props) {
    var colorScheme = props.colorScheme, size = props.size, variant = props.variant, children = props.children;
    var _a = useCheckboxGroup(props), value = _a.value, onChange = _a.onChange;
    var group = useMemo(function () { return ({
        size: size,
        onChange: onChange,
        colorScheme: colorScheme,
        value: value,
        variant: variant,
    }); }, [size, onChange, colorScheme, value, variant]);
    return (React.createElement(CheckboxGroupContextProvider, { value: group }, children));
}
if (__DEV__) {
    CheckboxGroup.displayName = "CheckboxGroup";
}
//# sourceMappingURL=CheckboxGroup.js.map