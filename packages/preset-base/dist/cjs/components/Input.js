"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTokens = void 0;
var color_1 = require("@chakra-ui/color");
var utils_1 = require("./utils");
var getDefaults = function (props) { return ({
    focusBorderColor: props.focusBorderColor || utils_1.mode("blue.500", "blue.300")(props),
    errorBorderColor: props.errorBorderColor || utils_1.mode("red.500", "red.300")(props),
}); };
function getOutlineStyle(props) {
    var t = props.theme;
    var _a = getDefaults(props), fc = _a.focusBorderColor, ec = _a.errorBorderColor;
    return {
        border: "1px solid",
        borderColor: utils_1.mode("inherit", "whiteAlpha.50")(props),
        bg: utils_1.mode("white", "whiteAlpha.100")(props),
        _hover: {
            borderColor: utils_1.mode("gray.300", "whiteAlpha.200")(props),
        },
        _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
        },
        _focus: {
            zIndex: 1,
            borderColor: color_1.getColor(t, fc),
            boxShadow: "0 0 0 1px " + color_1.getColor(t, fc),
        },
        _invalid: {
            borderColor: color_1.getColor(t, ec),
            boxShadow: "0 0 0 1px " + color_1.getColor(t, ec),
        },
    };
}
function getFilledStyle(props) {
    var t = props.theme;
    var _a = getDefaults(props), fc = _a.focusBorderColor, ec = _a.errorBorderColor;
    return {
        border: "2px solid",
        borderColor: "transparent",
        bg: utils_1.mode("gray.100", "whiteAlpha.50")(props),
        _hover: {
            bg: utils_1.mode("gray.200", "whiteAlpha.100")(props),
        },
        _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
        },
        _focus: {
            zIndex: 1,
            bg: "transparent",
            borderColor: color_1.getColor(t, fc),
        },
        _invalid: {
            borderColor: color_1.getColor(t, ec),
        },
    };
}
function getFlushedStyle(props) {
    var t = props.theme;
    var _a = getDefaults(props), fc = _a.focusBorderColor, ec = _a.errorBorderColor;
    return {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: 0,
        paddingX: 0,
        bg: "transparent",
        _focus: {
            zIndex: 1,
            borderColor: color_1.getColor(t, fc),
        },
        _invalid: {
            borderColor: color_1.getColor(t, ec),
        },
    };
}
var unstyled = {
    bg: "transparent",
    paddingX: 0,
    height: "auto",
};
var sizes = {
    lg: {
        fontSize: "lg",
        paddingX: 4,
        paddingY: 2,
        minHeight: 12,
        borderRadius: "md",
    },
    md: {
        fontSize: "md",
        paddingX: 4,
        paddingY: 2,
        minHeight: 10,
        borderRadius: "md",
    },
    sm: {
        fontSize: "sm",
        paddingX: 3,
        paddingY: 1,
        minHeight: 8,
        borderRadius: "sm",
    },
};
var Input = {
    defaultProps: {
        size: "md",
        variant: "outline",
    },
    baseStyle: {
        width: "100%",
        outline: 0,
        lineHeight: 1,
        transitionDuration: "0.2s",
        transitionProperty: "box-shadow, border, color, background-color",
    },
    sizes: sizes,
    variants: {
        outline: getOutlineStyle,
        filled: getFilledStyle,
        flushed: getFlushedStyle,
        unstyled: unstyled,
    },
};
exports.InputTokens = {
    sizes: {
        sm: "sm",
        md: "md",
        lg: "lg",
    },
    variants: {
        outline: "outline",
        filled: "filled",
        flushed: "flushed",
        unstyled: "unstyled",
    },
};
exports.default = Input;
//# sourceMappingURL=Input.js.map