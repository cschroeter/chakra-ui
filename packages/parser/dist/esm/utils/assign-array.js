/**
 * Given an array of resposive values, and breakpoints,
 * this function matches each value to it's respective
 * media query, and provides an open to transform the value.
 *
 * For example
 *
 * ```js
 * const result = assignArray({
 *  values: ["20px", "40px", "60px"],
 *  mediaQueries: ["@media(min-width: 320px)", "@media(min-width: 760px)", "@media(min-width: 960px)"],
 *  prop: "margin",
 *  transform: val => val
 * })
 *
 * result = {
 *   margin: "20px",
 *   `@media(min-width: 320px)`: {
 *     margin: "40px"
 *   },
 *   `@media(min-width: 760px)`: {
 *     margin: "60px"
 *   }
 * }
 * ```
 */
export function assignArray(options) {
    var values = options.values, prop = options.prop, transform = options.transform, mediaQueries = options.mediaQueries;
    var styles = {};
    values.forEach(function (value, index) {
        var _a;
        /**
         * Ignore array values longer than breakpoints
         */
        if (index > mediaQueries.length)
            return;
        /**
         * Use the value in first index as base value
         * for all breakpoints.
         *
         * @example
         * marginTop = ["20px", "40px", "60px"]
         *
         * `20px` - applies to all breakpoints (baseline)
         * `40px` - applies from first breakpoint up
         * `60px` - applies from second breakpoint up
         */
        if (index === 0) {
            styles[prop] = transform(value);
            return;
        }
        var mediaQuery = mediaQueries[index - 1];
        styles[mediaQuery] = (_a = styles[mediaQuery]) !== null && _a !== void 0 ? _a : {};
        if (value == null)
            return;
        styles[mediaQuery][prop] = transform(value);
    });
    return styles;
}
//# sourceMappingURL=assign-array.js.map