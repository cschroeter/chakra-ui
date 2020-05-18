import { __assign, __rest } from "tslib";
import * as React from "react";
import { Icon } from "@chakra-ui/icon";
var CheckIcon = function (props) { return (React.createElement(Icon, __assign({ viewBox: "0 0 14 14" }, props),
    React.createElement("g", { fill: "currentColor" },
        React.createElement("polygon", { points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" })))); };
var MinusIcon = function (props) { return (React.createElement(Icon, __assign({}, props),
    React.createElement("rect", { fill: "currentColor", height: "4", width: "20", x: "2", y: "10" }))); };
/**
 * CheckboxIcon
 *
 * Icon for visually indicating the checked or indeterminate
 * state of a checkbox
 *
 * @todo allow users pass their own icon svgs
 */
export function CheckboxIcon(props) {
    var isChecked = props.isChecked, isIndeterminate = props.isIndeterminate, rest = __rest(props, ["isChecked", "isIndeterminate"]);
    if (isChecked) {
        return React.createElement(CheckIcon, __assign({}, rest));
    }
    if (isIndeterminate) {
        return React.createElement(MinusIcon, __assign({}, rest));
    }
    return null;
}
//# sourceMappingURL=Checkbox.icon.js.map