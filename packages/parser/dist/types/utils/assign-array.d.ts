interface Options {
    /**
     * Array of responsive values to assign
     */
    values: any[];
    /**
     * Array of css media query strings
     * @example [`@media (min-width: 400px)`]
     */
    mediaQueries: string[];
    /**
     * The prop name for the given value
     */
    prop: string;
    /**
     * A function that transforms each
     * item in the `values` array
     */
    transform(value: any): any;
}
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
export declare function assignArray(options: Options): Record<string, any>;
export {};
//# sourceMappingURL=assign-array.d.ts.map