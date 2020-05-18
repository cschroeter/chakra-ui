"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxTokens = void 0;
var utils_1 = require("./utils");
var baseStyle = function (props) {
    var c = props.colorScheme;
    return {
        Control: {
            transition: "box-shadow 250ms",
            border: "2px solid",
            borderRadius: "sm",
            borderColor: "inherit",
            color: "white",
            _checked: {
                bg: utils_1.mode(c + ".500", c + ".200")(props),
                borderColor: utils_1.mode(c + ".500", c + ".200")(props),
                color: utils_1.mode("white", "gray.900")(props),
                _hover: {
                    bg: utils_1.mode(c + ".600", c + ".300")(props),
                    borderColor: utils_1.mode(c + ".600", c + ".300")(props),
                },
                _disabled: {
                    borderColor: utils_1.mode("gray.200", "transparent")(props),
                    bg: utils_1.mode("gray.200", "whiteAlpha.300")(props),
                    color: utils_1.mode("gray.500", "whiteAlpha.500")(props),
                },
            },
            _indeterminate: {
                bg: utils_1.mode(c + ".500", c + ".200")(props),
                borderColor: utils_1.mode(c + ".500", c + ".200")(props),
                color: utils_1.mode("white", "gray.900")(props),
            },
            _disabled: {
                bg: utils_1.mode("gray.100", "whiteAlpha.100")(props),
                borderColor: utils_1.mode("gray.100", "transparent")(props),
            },
            _focus: { boxShadow: "outline" },
            _invalid: { borderColor: utils_1.mode("red.500", "red.300")(props) },
        },
        Label: {
            _disabled: { opacity: 0.4 },
        },
    };
};
var sizes = {
    sm: {
        Control: { height: 3, width: 3 },
        Label: { fontSize: "sm" },
    },
    md: {
        Control: { width: 4, height: 4 },
        Label: { fontSize: "md" },
    },
    lg: {
        Control: { width: 5, height: 5 },
        Label: { fontSize: "lg" },
    },
};
var Checkbox = {
    defaultProps: {
        size: "md",
        colorScheme: "blue",
    },
    baseStyle: baseStyle,
    sizes: sizes,
};
exports.CheckboxTokens = {
    sizes: {
        lg: "lg",
        sm: "sm",
        md: "md",
    },
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map