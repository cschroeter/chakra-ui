"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * Layout component used to visually separate content in a list or group.
 *
 * It display a thin horizontal or vertical line, and renders a `hr` tag.
 *
 * @see Docs https://chakra-ui.com/code
 */
exports.Divider = system_1.chakra("hr", {
    themeKey: "Divider",
    baseStyle: {
        marginY: "8px",
        border: "0",
        borderBottom: "1px",
        opacity: 0.6,
        borderColor: "inherit",
    },
    attrs: function (props) { return ({
        role: "separator",
        "aria-orientation": props.orientation || "horizontal",
        className: utils_1.cx("chakra-divider", props.className),
    }); },
});
if (utils_1.__DEV__) {
    exports.Divider.displayName = "Divider";
}
//# sourceMappingURL=Divider.js.map