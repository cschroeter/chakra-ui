"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * Layout component used to wrap app or website content
 *
 * It sets `margin-left` and `margin-right` to `auto`,
 * to keep it's content centered.
 *
 * It also sets a default max-width of `60ch` (60 characters).
 */
exports.Container = system_1.chakra("div", {
    baseStyle: {
        width: "100%",
        marginX: "auto",
        maxWidth: "60ch",
        paddingX: "1rem",
    },
    attrs: function (props) { return ({
        className: utils_1.cx("chakra-container", props.className),
    }); },
});
if (utils_1.__DEV__) {
    exports.Container.displayName = "Container";
}
//# sourceMappingURL=Container.js.map