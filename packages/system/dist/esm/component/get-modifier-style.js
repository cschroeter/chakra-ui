import { __assign } from "tslib";
import { get, merge, runIfFn, objectKeys } from "@chakra-ui/utils";
import { filterUndefined, isSubcomponent } from "./utils";
import { getComponentDefaults } from "./get-default-props";
var modifierMap = {
    sizes: "size",
    variants: "variant",
};
function checkModifiers(props, options, partId) {
    var isInOptions = options.variants != null || options.sizes != null;
    var isInProps = get(props.theme, partId) != null;
    return isInOptions || isInProps;
}
/**
 * Gets the modifier styles for a component.
 * Chakra UI assumes that most component will need
 * only `variants` and `sizes` modifiers
 *
 * @param props the props object (or component props)
 * @param options the component's theming options
 * @param modifiers modifiers we support (for now, it's just variant, and size)
 */
export function getModifierStyles(props, options, modifiers) {
    var _a, _b;
    if (modifiers === void 0) { modifiers = objectKeys(modifierMap); }
    /**
     * if no theme key was passed or no prop was passed, bail out
     */
    if (!options || !props)
        return undefined;
    /**
     * For nested component theme key, for example "Menu.MenuList",
     * let's split into component and sub-component.
     */
    var _c = (_b = (_a = options.themeKey) === null || _a === void 0 ? void 0 : _a.split(".")) !== null && _b !== void 0 ? _b : [], component = _c[0], subComponent = _c[1];
    /**
     * Check that the component styles exists in the theme object
     */
    var itExists = checkModifiers(props, options, "components." + component);
    if (!itExists)
        return undefined;
    /**
     * Get the default modifier values defined in theme
     */
    var defaultPropsInTheme = getComponentDefaults(props.theme, component);
    var styles = {};
    /**
     * Merge the props with defaultProps defined in theme
     * to provider sensible fallbacks
     */
    var computedProps = defaultPropsInTheme
        ? __assign(__assign({}, defaultPropsInTheme), filterUndefined(props)) : props;
    /**
     * Iterate through each modifier (mostly variants and sizes),
     * can compute the styles based on theme.
     */
    for (var _i = 0, modifiers_1 = modifiers; _i < modifiers_1.length; _i++) {
        var modifier = modifiers_1[_i];
        var _modifier = modifierMap[modifier];
        var value = computedProps[_modifier];
        if (!value)
            continue;
        /**
         * Check if the modifier is in `options`.
         *
         * We'd like users to be able style component variants
         * without putting it in the theme.
         *
         * @example
         *
         * ```jsx
         * const Button = chakra("button", {
         *   variants: {
         *     solid: {},
         *     outline: {}
         *   },
         *   sizes: {
         *     large: {},
         *     medium: {}
         *   }
         * })
         * ```
         */
        var modifierInOptions = options === null || options === void 0 ? void 0 : options[modifier];
        var modifierStylesOrFn = modifierInOptions && runIfFn(modifierInOptions, props);
        var modifierStylesInOptions = modifierStylesOrFn === null || modifierStylesOrFn === void 0 ? void 0 : modifierStylesOrFn[value];
        /**
         * Get styles from options if it exists else, get styles from theme
         */
        var styleObjectOrFn = modifierStylesInOptions !== null && modifierStylesInOptions !== void 0 ? modifierStylesInOptions : get(props.theme, "components." + component + "." + modifier + "." + value);
        if (!styleObjectOrFn)
            continue;
        var style = runIfFn(styleObjectOrFn, computedProps);
        if (!style)
            continue;
        var subcomponentStyle = style[subComponent];
        var _isSubcomponent = options.themeKey && isSubcomponent(options.themeKey);
        if (_isSubcomponent && subcomponentStyle) {
            styles = merge(styles, subcomponentStyle);
        }
        else {
            styles = merge(styles, style);
        }
    }
    return styles;
}
//# sourceMappingURL=get-modifier-style.js.map