import { chakra } from "@chakra-ui/system";
import { __DEV__, cx } from "@chakra-ui/utils";
/**
 * Layout component used to visually separate content in a list or group.
 *
 * It display a thin horizontal or vertical line, and renders a `hr` tag.
 *
 * @see Docs https://chakra-ui.com/code
 */
export var Divider = chakra("hr", {
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
        className: cx("chakra-divider", props.className),
    }); },
});
if (__DEV__) {
    Divider.displayName = "Divider";
}
//# sourceMappingURL=Divider.js.map