import { Dict } from "@chakra-ui/utils";
/**
 * Converts a breakpoint unit to css media query string
 * @param breakpoint  - breakpoint as number or css unit
 */
export declare const toMediaQuery: (breakpoint: string | number) => string;
/**
 * Format the breakpoints object in theme to
 * array and object css media query string
 *
 * @param breakpoints - the breakpoints in the theme
 * @param mapper - the function to convert each breakpoint to media query string
 */
export declare function getMediaQuery(breakpoints?: Dict, mapper?: (breakpoint: string | number) => string): {
    asArray: string[];
    asObject: Record<string, any>;
};
//# sourceMappingURL=get-media-query.d.ts.map