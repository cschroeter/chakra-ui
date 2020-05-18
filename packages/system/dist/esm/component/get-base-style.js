import { __assign } from "tslib";
import { get, runIfFn } from "@chakra-ui/utils";
import { isSubcomponent, filterUndefined } from "./utils";
import { getComponentDefaults } from "./get-default-props";
/**
 * Gets the base styles of a component based on the
 * theme key in `options`
 */
export function getBaseStyle(props, options) {
    if (!options.themeKey)
        return undefined;
    var _a = options.themeKey.split("."), component = _a[0], subComponent = _a[1];
    /**
     * Get the default modifier values defined in theme
     */
    var defaultPropsInTheme = getComponentDefaults(props.theme, component);
    /**
     * Merge the props with defaultProps defined in theme
     * to provider sensible fallbacks
     */
    var computedProps = defaultPropsInTheme
        ? __assign(__assign({}, defaultPropsInTheme), filterUndefined(props)) : props;
    var styleObjectOrFn = get(props.theme, "components." + component + ".baseStyle");
    if (!styleObjectOrFn)
        return undefined;
    var style = runIfFn(styleObjectOrFn, computedProps);
    if (isSubcomponent(options.themeKey)) {
        style = style[subComponent];
    }
    return style;
}
//# sourceMappingURL=get-base-style.js.map