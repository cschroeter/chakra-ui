import { chakra } from "@chakra-ui/system";
import { __DEV__, cx } from "@chakra-ui/utils";
/**
 * Layout component used to wrap app or website content
 *
 * It sets `margin-left` and `margin-right` to `auto`,
 * to keep it's content centered.
 *
 * It also sets a default max-width of `60ch` (60 characters).
 */
export var Container = chakra("div", {
    baseStyle: {
        width: "100%",
        marginX: "auto",
        maxWidth: "60ch",
        paddingX: "1rem",
    },
    attrs: function (props) { return ({
        className: cx("chakra-container", props.className),
    }); },
});
if (__DEV__) {
    Container.displayName = "Container";
}
//# sourceMappingURL=Container.js.map