"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalTokens = void 0;
var utils_1 = require("./utils");
/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value) {
    return {
        Content: {
            maxWidth: value,
        },
    };
}
var Modal = {
    defaultProps: {
        size: "md",
    },
    baseStyle: function (props) { return ({
        Overlay: {
            bg: "rgba(0,0,0,0.4)",
        },
        Content: {
            borderRadius: "md",
            bg: utils_1.mode("white", "gray.700")(props),
            color: "inherit",
            boxShadow: utils_1.mode("0 7px 14px 0 rgba(0,0,0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, .07)", "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px")(props),
        },
        Header: {
            paddingX: 6,
            paddingY: 4,
            fontSize: "xl",
            fontWeight: "semibold",
        },
        Body: {
            paddingX: 6,
            paddingY: 2,
        },
        Footer: {
            paddingX: 6,
            paddingY: 4,
        },
    }); },
    sizes: {
        xs: getSize("xs"),
        sm: getSize("sm"),
        md: getSize("md"),
        lg: getSize("lg"),
        xl: getSize("xl"),
        "2xl": getSize("2xl"),
        "3xl": getSize("3xl"),
        "4xl": getSize("4xl"),
        "5xl": getSize("5xl"),
        "6xl": getSize("6xl"),
        full: getSize("full"),
    },
};
exports.ModalTokens = {
    sizes: {
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
        "3xl": "3xl",
        "4xl": "4xl",
        "5xl": "5xl",
        "6xl": "6xl",
        full: "full",
    },
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map