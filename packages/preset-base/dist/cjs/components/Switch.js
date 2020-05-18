"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchTokens = void 0;
var utils_1 = require("./utils");
var sizes = {
    sm: {
        Track: {
            width: "1.375rem",
            height: "0.75rem",
        },
        Thumb: {
            width: "0.75rem",
            height: "0.75rem",
            _checked: {
                transform: "translateX(0.625rem)",
            },
        },
    },
    md: {
        Track: {
            width: "1.875rem",
            height: "1rem",
        },
        Thumb: {
            width: "1rem",
            height: "1rem",
            _checked: {
                transform: "translateX(0.875rem)",
            },
        },
    },
    lg: {
        Track: {
            width: "2.875rem",
            height: "1.5rem",
        },
        Thumb: {
            width: "1.5rem",
            height: "1.5rem",
            _checked: {
                transform: "translateX(1.375rem)",
            },
        },
    },
};
var Switch = {
    defaultProps: {
        size: "md",
        colorScheme: "blue",
    },
    baseStyle: function (props) { return ({
        Track: {
            borderRadius: "full",
            padding: "2px",
            transition: "all 120ms",
            bg: utils_1.mode("gray.300", "whiteAlpha.400")(props),
            _focus: {
                boxShadow: "outline",
            },
            _disabled: {
                opacity: 0.4,
                cursor: "not-allowed",
            },
            _checked: {
                bg: utils_1.mode(props.colorScheme + ".500", props.colorScheme + ".200")(props),
            },
        },
        Thumb: {
            bg: "white",
            transition: "transform 250ms",
            borderRadius: "full",
            transform: "translateX(0)",
        },
    }); },
    sizes: sizes,
};
exports.SwitchTokens = {
    sizes: {
        sm: "sm",
        md: "md",
        lg: "lg",
    },
};
exports.default = Switch;
//# sourceMappingURL=Switch.js.map