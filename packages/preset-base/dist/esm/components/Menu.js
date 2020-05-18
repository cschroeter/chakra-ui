import { __assign } from "tslib";
import { mode, copy } from "./utils";
import Button from "./Button";
var getMenuListStyle = function (props) {
    var darkShadow = "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px";
    return {
        bg: mode("#fff", "gray.700")(props),
        boxShadow: mode("sm", darkShadow)(props),
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
        bg: mode("gray.100", "whiteAlpha.100")(props),
    },
    _active: {
        bg: mode("gray.200", "whiteAlpha.200")(props),
    },
    _expanded: {
        bg: mode("gray.100", "whiteAlpha.100")(props),
    },
    _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
    },
}); };
var Menu = {
    defaultProps: Button.defaultProps,
    baseStyle: function (props) { return ({
        MenuButton: Button.baseStyle,
        MenuList: getMenuListStyle(props),
        MenuItem: getMenuItemStyle(props),
        MenuGroupTitle: {
            marginX: 4,
            marginY: 2,
            fontWeight: "semibold",
            fontSize: "sm",
        },
    }); },
    variants: __assign({}, copy(Button.variants, "MenuButton")),
    sizes: __assign({}, copy(Button.sizes, "MenuButton")),
};
export default Menu;
//# sourceMappingURL=Menu.js.map