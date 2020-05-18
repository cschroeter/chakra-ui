/**
 * Given an object of resposive values, and breakpoints,
 * this function matches each value to it's respective
 * media query, and provides an open to transform the value.
 *
 * For example
 *
 * ```js
 * const result = assignObject({
 *  values: { base: "20px", sm: "40px", md: "60px" }
 *  mediaQueries: { sm: "@media(min-width: 320px)", md: "@media(min-width: 768px)" },
 *  prop: "margin",
 *  transform: val => val
 * })
 *
 * result = {
 *   margin: "20px",
 *   "@media(min-width: 320px)": {
 *     margin: "40px"
 *   },
 *   "@media(min-width: 768px)": {
 *     margin: "60px"
 *   }
 * }
 * ```
 */
export function assignObject(options) {
    var _a;
    var values = options.values, prop = options.prop, transform = options.transform, mediaQueries = options.mediaQueries;
    var styles = {};
    for (var breakpoint in values) {
        var value = values[breakpoint];
        /**
         * If the value doesn't exist in breakpoint, use as default.
         *
         * @example
         * marginTop = { base: "30px", md: "40px" }
         *
         * `base` doesn't exist in breakpoints so we'll
         * use it as the value for all breakpoints
         */
        if (mediaQueries[breakpoint] == null) {
            styles[prop] = transform(value);
            continue;
        }
        var mediaQuery = mediaQueries[breakpoint];
        styles[mediaQuery] = (_a = styles[mediaQuery]) !== null && _a !== void 0 ? _a : {};
        styles[mediaQuery][prop] = transform(value);
    }
    return styles;
}
//# sourceMappingURL=assign-object.js.map