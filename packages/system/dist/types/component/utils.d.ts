import { Dict } from "@chakra-ui/utils";
/**
 * Check if a theme key refers to a components
 * or sub-component
 */
export declare function isSubcomponent(themeKey: string): boolean;
/**
 * Check if a style object is not empty
 */
export declare function isNotEmpty(value: any): value is object;
export declare function filterUndefined(object: Dict): {
    [x: string]: any;
};
//# sourceMappingURL=utils.d.ts.map