import { chakra } from "@chakra-ui/system";
import { __DEV__, cx } from "@chakra-ui/utils";
/**
 * React component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://chakra-ui.com/badge
 */
export var Badge = chakra("span", {
    themeKey: "Badge",
    baseStyle: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
    },
    attrs: function (props) { return ({
        className: cx("chakra-badge", props.className),
    }); },
});
if (__DEV__) {
    Badge.displayName = "Badge";
}
//# sourceMappingURL=Badge.js.map