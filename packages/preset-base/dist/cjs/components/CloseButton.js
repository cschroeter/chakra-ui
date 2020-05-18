"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButtonTokens = void 0;
var utils_1 = require("./utils");
var CloseButton = {
    defaultProps: {
        size: "md",
    },
    baseStyle: function (props) { return ({
        borderRadius: "md",
        transition: "all 0.2s",
        _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
            boxShadow: "none",
        },
        _hover: {
            bg: utils_1.mode("blackAlpha.100", "whiteAlpha.100")(props),
        },
        _active: {
            bg: utils_1.mode("blackAlpha.200", "whiteAlpha.200")(props),
        },
        _focus: {
            boxShadow: "outline",
        },
    }); },
    sizes: {
        lg: {
            width: "40px",
            height: "40px",
            fontSize: "16px",
        },
        md: {
            width: "32px",
            height: "32px",
            fontSize: "12px",
        },
        sm: {
            width: "24px",
            height: "24px",
            fontSize: "10px",
        },
    },
};
exports.CloseButtonTokens = {
    sizes: {
        lg: "lg",
        sm: "sm",
        md: "md",
    },
};
exports.default = CloseButton;
//# sourceMappingURL=CloseButton.js.map