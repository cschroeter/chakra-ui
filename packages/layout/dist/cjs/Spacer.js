"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = void 0;
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * A flexible flex spacer that expands along the major axis of its containing flex layout.
 *
 * It renders a `div` by default, and takes up any available space.
 *
 * @see Docs https://chakra-ui.com/spacer
 */
exports.Spacer = system_1.chakra("div", {
    baseStyle: {
        flex: 1,
        justifySelf: "stretch",
        alignSelf: "stretch",
    },
});
if (utils_1.__DEV__) {
    exports.Spacer.displayName = "Spacer";
}
//# sourceMappingURL=Spacer.js.map