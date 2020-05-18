import { __assign } from "tslib";
import { opacity } from "@chakra-ui/color";
import { mode } from "./utils";
var grayGhostStyle = function (props) { return ({
    color: mode("inherit", "whiteAlpha.900")(props),
    _hover: {
        bg: mode("gray.100", "whiteAlpha.200")(props),
    },
    _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props),
    },
}); };
function getGhostStyle(props) {
    var c = props.colorScheme, t = props.theme;
    if (c === "gray")
        return grayGhostStyle(props);
    var darkHover = opacity(c + ".200", 0.12)(t);
    var darkActive = opacity(c + ".200", 0.24)(t);
    return {
        color: mode(c + ".500", c + ".200")(props),
        bg: "transparent",
        _hover: {
            bg: mode(c + ".50", darkHover)(props),
        },
        _active: {
            bg: mode(c + ".100", darkActive)(props),
        },
    };
}
function getOutlineStyle(props) {
    var c = props.colorScheme;
    var borderColor = mode("gray.200", "whiteAlpha.300")(props);
    return __assign({ border: "1px solid", borderColor: c === "gray" ? borderColor : "currentColor" }, getGhostStyle(props));
}
var graySolidStyle = function (props) { return ({
    bg: mode("gray.100", "whiteAlpha.200")(props),
    _hover: {
        bg: mode("gray.200", "whiteAlpha.300")(props),
    },
    _active: {
        bg: mode("gray.300", "whiteAlpha.400")(props),
    },
}); };
function getSolidStyle(props) {
    var c = props.colorScheme;
    if (c === "gray")
        return graySolidStyle(props);
    return {
        bg: mode(c + ".500", c + ".200")(props),
        color: mode("white", "gray.800")(props),
        _hover: { bg: mode(c + ".600", c + ".300")(props) },
        _active: { bg: mode(c + ".700", c + ".400")(props) },
    };
}
function getLinkStyle(props) {
    var c = props.colorScheme;
    return {
        padding: 0,
        height: "auto",
        lineHeight: "normal",
        color: mode(c + ".500", c + ".200")(props),
        _hover: {
            textDecoration: "underline",
        },
        _active: {
            color: mode(c + ".700", c + ".500")(props),
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
export var ButtonTokens = {
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
export default Button;
//# sourceMappingURL=Button.js.map