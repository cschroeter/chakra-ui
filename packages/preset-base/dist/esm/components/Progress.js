import { __assign } from "tslib";
import { getColor } from "@chakra-ui/color";
import { mode } from "./utils";
var getProgressBg = function (props) {
    var c = props.colorScheme, t = props.theme;
    var bg = mode(c + ".500", c + ".200")(props);
    if (props.isIndeterminate) {
        return {
            bg: "linear-gradient(\n        to right,\n        transparent 0%,\n        " + getColor(t, bg) + " 50%,\n        transparent 100%\n      )",
        };
    }
    return { bg: bg };
};
var sizes = {
    xs: {
        Track: { height: "0.25rem" },
    },
    sm: {
        Track: { height: "0.5rem" },
    },
    md: {
        Track: { height: "0.75rem" },
    },
    lg: {
        Track: { height: "1rem" },
    },
};
var Progress = {
    defaultProps: {
        size: "md",
        colorScheme: "blue",
    },
    baseStyle: function (props) { return ({
        Label: {
            lineHeight: "1",
            fontSize: "0.25em",
        },
        Track: {
            bg: mode("gray.100", "whiteAlpha.300")(props),
        },
        Indicator: __assign({ height: "100%", transition: "all 0.3s" }, getProgressBg(props)),
    }); },
    sizes: sizes,
};
export var ProgressTokens = {
    sizes: {
        lg: "lg",
        sm: "sm",
        md: "md",
        xs: "xs",
    },
};
export default Progress;
//# sourceMappingURL=Progress.js.map