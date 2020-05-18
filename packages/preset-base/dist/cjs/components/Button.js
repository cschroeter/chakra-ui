"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonTokens = void 0;
var tslib_1 = require("tslib");
var color_1 = require("@chakra-ui/color");
var utils_1 = require("./utils");
var grayGhostStyle = function (props) { return ({
    color: utils_1.mode("inherit", "whiteAlpha.900")(props),
    _hover: {
        bg: utils_1.mode("gray.100", "whiteAlpha.200")(props),
    },
    _active: {
        bg: utils_1.mode("gray.200", "whiteAlpha.300")(props),
    },
}); };
function getGhostStyle(props) {
    var c = props.colorScheme, t = props.theme;
    if (c === "gray")
        return grayGhostStyle(props);
    var darkHover = color_1.opacity(c + ".200", 0.12)(t);
    var darkActive = color_1.opacity(c + ".200", 0.24)(t);
    return {
        color: utils_1.mode(c + ".500", c + ".200")(props),
        bg: "transparent",
        _hover: {
            bg: utils_1.mode(c + ".50", darkHover)(props),
        },
        _active: {
            bg: utils_1.mode(c + ".100", darkActive)(props),
        },
    };
}
function getOutlineStyle(props) {
    var c = props.colorScheme;
    var borderColor = utils_1.mode("gray.200", "whiteAlpha.300")(props);
    return tslib_1.__assign({ border: "1px solid", borderColor: c === "gray" ? borderColor : "currentColor" }, getGhostStyle(props));
}
var graySolidStyle = function (props) { return ({
    bg: utils_1.mode("gray.100", "whiteAlpha.200")(props),
    _hover: {
        bg: utils_1.mode("gray.200", "whiteAlpha.300")(props),
    },
    _active: {
        bg: utils_1.mode("gray.300", "whiteAlpha.400")(props),
    },
}); };
function getSolidStyle(props) {
    var c = props.colorScheme;
    if (c === "gray")
        return graySolidStyle(props);
    return {
        bg: utils_1.mode(c + ".500", c + ".200")(props),
        color: utils_1.mode("white", "gray.800")(props),
        _hover: { bg: utils_1.mode(c + ".600", c + ".300")(props) },
        _active: { bg: utils_1.mode(c + ".700", c + ".400")(props) },
    };
}
function getLinkStyle(props) {
    var c = props.colorScheme;
    return {
        padding: 0,
        height: "auto",
        lineHeight: "normal",
        color: utils_1.mode(c + ".500", c + ".200")(props),
        _hover: {
            textDecoration: "underline",
        },
        _active: {
            color: utils_1.mode(c + ".700", c + ".500")(props),
        },
    };
}
var sizes = {
    lg: {
        height: 12,
        minWidth: 12,
        fontSize: "lg",
        paddingX: 6,
    },
    md: {
        height: 10,
        minWidth: 10,
        fontSize: "md",
        paddingX: 4,
    },
    sm: {
        height: 8,
        minWidth: 8,
        fontSize: "sm",
        paddingX: 3,
    },
    xs: {
        height: 6,
        minWidth: 6,
        fontSize: "xs",
        paddingX: 2,
    },
};
////////////////////////////////////////////////////////////
var unstyled = {
    bg: "none",
    border: 0,
    color: "inherit",
    display: "inline",
    font: "inherit",
    lineHeight: "inherit",
    margin: 0,
    padding: 0,
};
////////////////////////////////////////////////////////////
var Button = {
    defaultProps: {
        variant: "solid",
        size: "md",
        colorScheme: "gray",
    },
    baseStyle: {
        lineHeight: "1.2",
        borderRadius: "md",
        fontWeight: "semibold",
        _focus: {
            boxShadow: "outline",
        },
        _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
            boxShadow: "none",
        },
    },
    sizes: sizes,
    variants: {
        unstyled: unstyled,
        solid: getSolidStyle,
        ghost: getGhostStyle,
        link: getLinkStyle,
        outline: getOutlineStyle,
    },
};
exports.ButtonTokens = {
    sizes: {
        lg: "lg",
        sm: "sm",
        md: "md",
        xs: "xs",
    },
    variants: {
        solid: "solid",
        subtle: "subtle",
        outline: "outline",
    },
};
exports.default = Button;
//# sourceMappingURL=Button.js.map