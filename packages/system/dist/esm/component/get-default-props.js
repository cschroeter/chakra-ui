import { get } from "@chakra-ui/utils";
/**
 * Get the theming default props of a component from the theme
 */
export function getComponentDefaults(theme, themeKey) {
    return get(theme, "components." + themeKey + ".defaultProps");
}
//# sourceMappingURL=get-default-props.js.map