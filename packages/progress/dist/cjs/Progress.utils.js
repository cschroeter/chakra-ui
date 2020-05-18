"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgressProps = exports.stripe = exports.progress = exports.rotate = exports.spin = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var system_1 = require("@chakra-ui/system");
/**
 * CSS Animation for progress spin effect
 */
exports.spin = system_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  0% {\n    stroke-dasharray: 1, 400;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -100;\n  }\n\n  100% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -260;\n  }\n"], ["\n  0% {\n    stroke-dasharray: 1, 400;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -100;\n  }\n\n  100% {\n    stroke-dasharray: 400, 400;\n    stroke-dashoffset: -260;\n  }\n"
    /**
     * CSS Animation for progress rotate effect
     */
])));
/**
 * CSS Animation for progress rotate effect
 */
exports.rotate = system_1.keyframes(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  0% { transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"], ["\n  0% { transform: rotate(0deg) }\n  100% { transform: rotate(360deg) }\n"
    /**
     * CSS Animation for progress indeterminate effect
     */
])));
/**
 * CSS Animation for progress indeterminate effect
 */
exports.progress = system_1.keyframes(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  0% { left: -40% }\n  100% { left: 100% }\n"], ["\n  0% { left: -40% }\n  100% { left: 100% }\n"
    /**
     * CSS Animation for progress stripe effect
     */
])));
/**
 * CSS Animation for progress stripe effect
 */
exports.stripe = system_1.keyframes(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  from { background-position: 1rem 0}\n  to { background-position: 0 0 }\n"], ["\n  from { background-position: 1rem 0}\n  to { background-position: 0 0 }\n"])));
/**
 * Get the common `aria-*` attributes for both the linear and circular
 * progress components.
 */
function getProgressProps(options) {
    var percent = options.value
        ? utils_1.valueToPercent(options.value, options.min, options.max)
        : undefined;
    // A progressbar is indeterminate when the `value` is undefined
    var isIndeterminate = utils_1.isUndefined(options.value);
    return {
        bind: {
            "data-indeterminate": isIndeterminate ? "" : undefined,
            "aria-valuemax": options.max,
            "aria-valuemin": options.min,
            "aria-valuenow": isIndeterminate ? undefined : options.value,
            "aria-valuetext": utils_1.isFunction(options.getValueText)
                ? options.getValueText(options.value, percent)
                : options.valueText,
            role: "progressbar",
        },
        percent: percent,
    };
}
exports.getProgressProps = getProgressProps;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Progress.utils.js.map