"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseStyle = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var utils_2 = require("./utils");
var get_default_props_1 = require("./get-default-props");
/**
 * Gets the base styles of a component based on the
 * theme key in `options`
 */
function getBaseStyle(props, options) {
    if (!options.themeKey)
        return undefined;
    var _a = options.themeKey.split("."), component = _a[0], subComponent = _a[1];
    /**
     * Get the default modifier values defined in theme
     */
    var defaultPropsInTheme = get_default_props_1.getComponentDefaults(props.theme, component);
    /**
     * Merge the props with defaultProps defined in theme
     * to provider sensible fallbacks
     */
    var computedProps = defaultPropsInTheme
        ? tslib_1.__assign(tslib_1.__assign({}, defaultPropsInTheme), utils_2.filterUndefined(props)) : props;
    var styleObjectOrFn = utils_1.get(props.theme, "components." + component + ".baseStyle");
    if (!styleObjectOrFn)
        return undefined;
    var style = utils_1.runIfFn(styleObjectOrFn, computedProps);
    if (utils_2.isSubcomponent(options.themeKey)) {
        style = style[subComponent];
    }
    return style;
}
exports.getBaseStyle = getBaseStyle;
//# sourceMappingURL=get-base-style.js.map