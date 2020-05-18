import { isArray, isUndefined, warn } from "@chakra-ui/utils";
export function allowMultiple(props) {
    var index = props.index || props.defaultIndex;
    var condition = !isUndefined(index) && !isArray(index) && props.allowMultiple;
    warn({
        condition: !!condition,
        message: "If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: " + typeof index + ",",
    });
}
export function allowMultipleAndAllowToggle(props) {
    warn({
        condition: Boolean(props.allowMultiple && props.allowToggle),
        message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not",
    });
}
export function focusableNotDisabled(props) {
    warn({
        condition: Boolean(props.isFocusable && !props.isDisabled),
        message: "Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    ",
    });
}
//# sourceMappingURL=Accordion.warning.js.map