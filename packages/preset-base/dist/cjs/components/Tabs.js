"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabTokens = void 0;
var utils_1 = require("./utils");
var color_1 = require("@chakra-ui/color");
function getLineStyle(props) {
    var c = props.colorScheme;
    return {
        TabList: {
            borderBottom: "2px solid",
            borderColor: "inherit",
        },
        Tab: {
            borderBottom: "2px solid",
            borderColor: "transparent",
            marginBottom: "-2px",
            _selected: {
                color: utils_1.mode(c + ".600", c + ".300")(props),
                borderColor: "currentColor",
            },
            _active: {
                bg: utils_1.mode("gray.200", "whiteAlpha.300")(props),
            },
            _disabled: {
                opacity: 0.4,
                cursor: "not-allowed",
            },
        },
    };
}
function getEnclosedStyle(props) {
    var c = props.colorScheme;
    return {
        Tab: {
            borderTopRadius: "md",
            border: "1px solid",
            borderColor: "transparent",
            marginBottom: "-1px",
            _selected: {
                color: utils_1.mode(c + ".600", c + ".300")(props),
                borderColor: "inherit",
                borderBottomColor: utils_1.mode("white", "gray.800")(props),
            },
        },
        TabList: {
            marginBottom: "-1px",
            borderBottom: "1px solid",
            borderColor: "inherit",
        },
    };
}
function getEnclosedColoredStyle(props) {
    var c = props.colorScheme;
    return {
        Tab: {
            border: "1px solid",
            borderColor: "inherit",
            bg: utils_1.mode("gray.50", "whiteAlpha.50")(props),
            marginBottom: "-1px",
            _notLast: {
                mr: "-1px",
            },
            _selected: {
                bg: utils_1.mode("#fff", "gray.800")(props),
                color: utils_1.mode(c + ".600", c + ".300")(props),
                borderColor: "inherit",
                borderTopColor: "currentColor",
                borderBottomColor: "transparent",
            },
        },
        TabList: {
            marginBottom: "-1px",
            borderBottom: "1px solid",
            borderColor: "inherit",
        },
    };
}
function getSoftRoundedStyle(props) {
    var c = props.colorScheme, t = props.theme;
    return {
        Tab: {
            borderRadius: "full",
            fontWeight: "semibold",
            color: "gray.600",
            _selected: {
                color: color_1.getColor(t, c + ".700"),
                bg: color_1.getColor(t, c + ".100"),
            },
        },
        TabList: {},
    };
}
function getSolidRoundedStyle(props) {
    var c = props.colorScheme;
    return {
        Tab: {
            borderRadius: "full",
            fontWeight: "semibold",
            color: utils_1.mode("gray.600", "inherit")(props),
            _selected: {
                color: utils_1.mode("#fff", "gray.800")(props),
                bg: utils_1.mode(c + ".600", c + ".300")(props),
            },
        },
        TabList: {},
    };
}
var Tabs = {
    defaultProps: {
        size: "md",
        variant: "line",
        colorScheme: "blue",
    },
    baseStyle: {
        Tab: {
            transition: "all 0.2s",
            _focus: {
                zIndex: 1,
                boxShadow: "outline",
            },
        },
        TabList: {
            display: "flex",
        },
        TabPanel: {
            padding: 4,
        },
    },
    sizes: {
        sm: {
            Tab: {
                paddingY: "0.25rem",
                paddingX: "1rem",
                fontSize: "0.85rem",
            },
        },
        md: {
            Tab: {
                fontSize: "1rem",
                paddingY: "0.5rem",
                paddingX: "1rem",
            },
        },
        lg: {
            Tab: {
                fontSize: "1.15rem",
                paddingY: "0.75rem",
                paddingX: "1rem",
            },
        },
    },
    variants: {
        line: getLineStyle,
        enclosed: getEnclosedStyle,
        "soft-rounded": getSoftRoundedStyle,
        "enclosed-colored": getEnclosedColoredStyle,
        "solid-rounded": getSolidRoundedStyle,
        unstyled: {},
    },
};
exports.TabTokens = {
    sizes: {
        sm: "sm",
        md: "md",
        lg: "lg",
    },
    variants: {
        line: "line",
        enclosed: "enclosed",
        "soft-rounded": "soft-rounded",
        "enclosed-colored": "enclosed-colored",
        "solid-rounded": "solid-rounded",
        unstyled: "unstyled",
    },
};
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map