import { Dict } from "./types";
import merge from "deepmerge";
export declare function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]): Pick<T, Exclude<keyof T, K>>;
export declare function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]): { [P in K]: T[P]; };
export declare function split<T extends Dict, K extends keyof T>(object: T, keys: K[]): [{ [P in K]: T[P]; }, Pick<T, Exclude<keyof T, K>>];
/**
 * Get value from a deeply nested object using a string path
 * @param obj - the object
 * @param path - the string path
 * @param def  - the fallback value
 */
export declare function get(obj: any, path: string | number, fallback?: any, index?: number): any;
/**
 * Get value from deeply nested object, based on path
 * It returns the path value if not found in object
 *
 * @param path - the string path or value
 * @param scale - the string path or value
 */
export declare function getWithDefault(path: any, scale: any): any;
export { merge };
export declare function filterUndefined(object: Dict): {
    [x: string]: any;
};
export declare const objectKeys: <T extends Record<string, any>>(obj: T) => (keyof T)[];
//# sourceMappingURL=object.d.ts.map