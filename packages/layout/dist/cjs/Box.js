"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * Box is the most abstract component on top of which other chakra
 * components are built. It renders a `div` element by default.
 *
 * @see Docs https://chakra-ui.com/box
 */
exports.Box = system_1.chakra.div;
if (utils_1.__DEV__) {
    exports.Box.displayName = "Box";
}
//# sourceMappingURL=Box.js.map