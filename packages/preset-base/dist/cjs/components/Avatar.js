"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarTokens = void 0;
var tslib_1 = require("tslib");
var sizes_1 = tslib_1.__importDefault(require("../foundations/sizes"));
var utils_1 = require("./utils");
var color_1 = require("@chakra-ui/color");
function getSize(size) {
    var inferredSize = sizes_1.default[size];
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
    var bg = props.name ? color_1.stringToColor(props.name) : "gray.400";
    var color = props.name
        ? color_1.isDark(bg)(props.theme)
            ? "white"
            : "gray.800"
        : "white";
    var borderColor = utils_1.mode("white", "gray.800")(props);
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
        Root: tslib_1.__assign({ verticalAlign: "top" }, getRootStyle(props)),
        Badge: {
            transform: "translate(25%, 25%)",
            borderRadius: "full",
            border: "0.2em solid",
            borderColor: utils_1.mode("white", "gray.800")(props),
        },
        ExcessLabel: {
            bg: utils_1.mode("gray.200", "whiteAlpha.400")(props),
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
exports.AvatarTokens = {
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
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map