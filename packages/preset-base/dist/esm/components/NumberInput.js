import { mode } from "./utils";
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
            borderColor: mode("inherit", "whiteAlpha.300")(props),
            color: mode("inherit", "whiteAlpha.800")(props),
            _active: {
                bg: mode("gray.200", "whiteAlpha.300")(props),
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
export var NumberInputTokens = {
    sizes: {
        sm: "sm",
        md: "md",
        lg: "lg",
    },
};
export default NumberInput;
//# sourceMappingURL=NumberInput.js.map