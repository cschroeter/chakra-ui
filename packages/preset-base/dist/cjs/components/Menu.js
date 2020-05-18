"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("./utils");
var Button_1 = tslib_1.__importDefault(require("./Button"));
var getMenuListStyle = function (props) {
    var darkShadow = "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px";
    return {
        bg: utils_1.mode("#fff", "gray.700")(props),
        boxShadow: utils_1.mode("sm", darkShadow)(props),
        color: "inherit",
        outline: 0,
        minWidth: "3xs",
        paddingY: "2",
        borderRadius: "md",
        border: "1px solid",
        borderColor: "inherit",
    };
};
var getMenuItemStyle = function (props) { return ({
    width: "100%",
    outline: 0,
    textDecoration: "none",
    paddingY: "0.4rem",
    paddingX: "0.8rem",
    transition: "background 50ms ease-in 0s",
    _focus: {
        bg: utils_1.mode("gray.100", "whiteAlpha.100")(props),
    },
    _active: {
        bg: utils_1.mode("gray.200", "whiteAlpha.200")(props),
    },
    _expanded: {
        bg: utils_1.mode("gray.100", "whiteAlpha.100")(props),
    },
    _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
    },
}); };
var Menu = {
    defaultProps: Button_1.default.defaultProps,
    baseStyle: function (props) { return ({
        MenuButton: Button_1.default.baseStyle,
        MenuList: getMenuListStyle(props),
        MenuItem: getMenuItemStyle(props),
        MenuGroupTitle: {
            marginX: 4,
            marginY: 2,
            fontWeight: "semibold",
            fontSize: "sm",
        },
    }); },
    variants: tslib_1.__assign({}, utils_1.copy(Button_1.default.variants, "MenuButton")),
    sizes: tslib_1.__assign({}, utils_1.copy(Button_1.default.sizes, "MenuButton")),
};
exports.default = Menu;
//# sourceMappingURL=Menu.js.map