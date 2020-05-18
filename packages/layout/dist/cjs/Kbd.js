"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kbd = void 0;
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * Semantic component to render a keyboard shortcut
 * within an application.
 *
 * @example
 *
 * ```jsx
 * <Kbd>⌘ + T</Kbd>
 * ```
 *
 * @see Docs https://chakra-ui.com/kbd
 */
exports.Kbd = system_1.chakra("kbd", { themeKey: "Kbd" });
if (utils_1.__DEV__) {
    exports.Kbd.displayName = "Kbd";
}
//# sourceMappingURL=Kbd.js.map