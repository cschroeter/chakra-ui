"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxIcon = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_1 = require("@chakra-ui/icon");
var CheckIcon = function (props) { return (React.createElement(icon_1.Icon, tslib_1.__assign({ viewBox: "0 0 14 14" }, props),
    React.createElement("g", { fill: "currentColor" },
        React.createElement("polygon", { points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" })))); };
var MinusIcon = function (props) { return (React.createElement(icon_1.Icon, tslib_1.__assign({}, props),
    React.createElement("rect", { fill: "currentColor", height: "4", width: "20", x: "2", y: "10" }))); };
/**
 * CheckboxIcon
 *
 * Icon for visually indicating the checked or indeterminate
 * state of a checkbox
 *
 * @todo allow users pass their own icon svgs
 */
function CheckboxIcon(props) {
    var isChecked = props.isChecked, isIndeterminate = props.isIndeterminate, rest = tslib_1.__rest(props, ["isChecked", "isIndeterminate"]);
    if (isChecked) {
        return React.createElement(CheckIcon, tslib_1.__assign({}, rest));
    }
    if (isIndeterminate) {
        return React.createElement(MinusIcon, tslib_1.__assign({}, rest));
    }
    return null;
}
exports.CheckboxIcon = CheckboxIcon;
//# sourceMappingURL=Checkbox.icon.js.map