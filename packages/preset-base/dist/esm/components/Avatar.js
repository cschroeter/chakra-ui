import { __assign } from "tslib";
import sizes from "../foundations/sizes";
import { mode } from "./utils";
import { stringToColor, isDark } from "@chakra-ui/color";
function getSize(size) {
    var inferredSize = sizes[size];
    var styles = {
        width: size,
        height: size,
        fontSize: "calc(" + (inferredSize !== null && inferredSize !== void 0 ? inferredSize : size) + " / 2.5)",
    };
    if (size !== "100%") {
        styles["lineHeight"] = inferredSize !== null && inferredSize !== void 0 ? inferredSize : size;
    }
    return {
        Root: styles,
        ExcessLabel: styles,
    };
}
function getRootStyle(props) {
    var bg = props.name ? stringToColor(props.name) : "gray.400";
    var color = props.name
        ? isDark(bg)(props.theme)
            ? "white"
            : "gray.800"
        : "white";
    var borderColor = mode("white", "gray.800")(props);
    return {
        bg: bg,
        color: color,
        borderColor: borderColor,
    };
}
var Avatar = {
    defaultProps: {
        size: "md",
    },
    baseStyle: function (props) { return ({
        Root: __assign({ verticalAlign: "top" }, getRootStyle(props)),
        Badge: {
            transform: "translate(25%, 25%)",
            borderRadius: "full",
            border: "0.2em solid",
            borderColor: mode("white", "gray.800")(props),
        },
        ExcessLabel: {
            bg: mode("gray.200", "whiteAlpha.400")(props),
        },
    }); },
    sizes: {
        "2xs": getSize("4"),
        xs: getSize("6"),
        sm: getSize("8"),
        md: getSize("12"),
        lg: getSize("16"),
        xl: getSize("24"),
        "2xl": getSize("32"),
        full: getSize("100%"),
    },
};
export var AvatarTokens = {
    sizes: {
        "2xs": "2xs",
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
        full: "full",
    },
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map