"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * Link
 *
 * Links are accessible elements used primarily for navigation.
 *
 * It integrates well with other routing libraries like
 * React Router, Reach Router and Next.js Link.
 *
 * @example
 *
 * ```jsx
 * <Link as={ReactRouterLink} to="/home">Home</Link>
 * ```
 *
 * @see Docs https://chakra-ui.com/link
 */
exports.Link = system_1.chakra("a", {
    themeKey: "Link",
    attrs: function (props) { return (tslib_1.__assign({ tabIndex: props.isDisabled ? -1 : undefined, "aria-disabled": props.isDisabled || undefined }, (props.isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
    }))); },
});
if (utils_1.__DEV__) {
    exports.Link.displayName = "Link";
}
//# sourceMappingURL=Link.js.map