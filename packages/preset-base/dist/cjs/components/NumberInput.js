"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberInputTokens = void 0;
var utils_1 = require("./utils");
function getSizeStyle(size) {
    return {
        Stepper: {
            fontSize: size === "lg" ? "14px" : "10px",
            _first: {
                borderTopRightRadius: size === "lg" ? 3 : 1,
            },
            _last: {
                borderBottomRightRadius: size === "lg" ? 3 : 1,
                marginTop: "-1px",
                borderTopWidth: 1,
            },
        },
    };
}
var NumberInput = {
    defaultProps: {
        size: "md",
    },
    baseStyle: function (props) { return ({
        StepperGroup: {
            width: "24px",
            margin: "1px",
            position: "absolute",
            right: "0px",
            height: "calc(100% - 2px)",
        },
        Stepper: {
            borderLeft: "1px solid",
            borderColor: utils_1.mode("inherit", "whiteAlpha.300")(props),
            color: utils_1.mode("inherit", "whiteAlpha.800")(props),
            _active: {
                bg: utils_1.mode("gray.200", "whiteAlpha.300")(props),
            },
            _disabled: {
                opacity: 0.4,
                cursor: "not-allowed",
            },
        },
    }); },
    sizes: {
        sm: getSizeStyle("sm"),
        md: getSizeStyle("md"),
        lg: getSizeStyle("lg"),
    },
};
exports.NumberInputTokens = {
    sizes: {
        sm: "sm",
        md: "md",
        lg: "lg",
    },
};
exports.default = NumberInput;
//# sourceMappingURL=NumberInput.js.map