"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * React component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://chakra-ui.com/badge
 */
exports.Badge = system_1.chakra("span", {
    themeKey: "Badge",
    baseStyle: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
    },
    attrs: function (props) { return ({
        className: utils_1.cx("chakra-badge", props.className),
    }); },
});
if (utils_1.__DEV__) {
    exports.Badge.displayName = "Badge";
}
//# sourceMappingURL=Badge.js.map