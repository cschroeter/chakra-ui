import { __assign } from "tslib";
import { chakra } from "@chakra-ui/system";
import { __DEV__ } from "@chakra-ui/utils";
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
export var Link = chakra("a", {
    themeKey: "Link",
    attrs: function (props) { return (__assign({ tabIndex: props.isDisabled ? -1 : undefined, "aria-disabled": props.isDisabled || undefined }, (props.isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
    }))); },
});
if (__DEV__) {
    Link.displayName = "Link";
}
//# sourceMappingURL=Link.js.map