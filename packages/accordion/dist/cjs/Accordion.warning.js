"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusableNotDisabled = exports.allowMultipleAndAllowToggle = exports.allowMultiple = void 0;
var utils_1 = require("@chakra-ui/utils");
function allowMultiple(props) {
    var index = props.index || props.defaultIndex;
    var condition = !utils_1.isUndefined(index) && !utils_1.isArray(index) && props.allowMultiple;
    utils_1.warn({
        condition: !!condition,
        message: "If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: " + typeof index + ",",
    });
}
exports.allowMultiple = allowMultiple;
function allowMultipleAndAllowToggle(props) {
    utils_1.warn({
        condition: Boolean(props.allowMultiple && props.allowToggle),
        message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not",
    });
}
exports.allowMultipleAndAllowToggle = allowMultipleAndAllowToggle;
function focusableNotDisabled(props) {
    utils_1.warn({
        condition: Boolean(props.isFocusable && !props.isDisabled),
        message: "Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    ",
    });
}
exports.focusableNotDisabled = focusableNotDisabled;
//# sourceMappingURL=Accordion.warning.js.map