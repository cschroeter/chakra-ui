import { FunctionArguments } from "./types";
import memoizeOne from "memoize-one";
export declare function runIfFn<T, U>(valueOrFn: T | ((...args: U[]) => T), ...args: U[]): T;
export declare function callAllHandlers<T extends (event: any) => void>(...fns: (T | undefined)[]): (event: FunctionArguments<T>[0]) => void;
export { memoizeOne };
export declare function once(fn?: Function | null): (this: any, ...args: any[]) => any;
export declare const noop: () => void;
//# sourceMappingURL=function.d.ts.map