import { __makeTemplateObject } from "tslib";
import { isFunction, isUndefined, valueToPercent } from "@chakra-ui/utils";
import { keyframes } from "@chakra-ui/system";
/**
 * CSS Animation for progress spin effect
 */
export var spin = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    stroke-dasharray: 1, 400;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -100;\n  }\n\n  100% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -260;\n  }\n"], ["\n  0% {\n    stroke-dasharray: 1, 400;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -100;\n  }\n\n  100% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -260;\n  }\n"
    /**
     * CSS Animation for progress rotate effect
     */
])));
/**
 * CSS Animation for progress rotate effect
 */
export var rotate = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% { transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"], ["\n  0% { transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"
    /**
     * CSS Animation for progress indeterminate effect
     */
])));
/**
 * CSS Animation for progress indeterminate effect
 */
export var progress = keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  0% { left: -40% }\n  100% { left: 100% }\n"], ["\n  0% { left: -40% }\n  100% { left: 100% }\n"
    /**
     * CSS Animation for progress stripe effect
     */
])));
/**
 * CSS Animation for progress stripe effect
 */
export var stripe = keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  from { background-position: 1rem 0}\n  to { background-position: 0 0 }\n"], ["\n  from { background-position: 1rem 0}\n  to { background-position: 0 0 }\n"])));
/**
 * Get the common `aria-*` attributes for both the linear and circular
 * progress components.
 */
export function getProgressProps(options) {
    var percent = options.value
        ? valueToPercent(options.value, options.min, options.max)
        : undefined;
    // A progressbar is indeterminate when the `value` is undefined
    var isIndeterminate = isUndefined(options.value);
    return {
        bind: {
            "data-indeterminate": isIndeterminate ? "" : undefined,
            "aria-valuemax": options.max,
            "aria-valuemin": options.min,
            "aria-valuenow": isIndeterminate ? undefined : options.value,
            "aria-valuetext": isFunction(options.getValueText)
                ? options.getValueText(options.value, percent)
                : options.valueText,
            role: "progressbar",
        },
        percent: percent,
    };
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Progress.utils.js.map