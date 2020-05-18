import * as React from "react";
export declare type Merge<T1, T2> = Omit<T1, Extract<keyof T1, keyof T2>> & T2;
export declare type SafeMerge<T, P> = P & Omit<T, keyof P>;
export declare type UnionStringArray<T extends Readonly<string[]>> = T[number];
export declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type As<P = any> = React.ReactType<P>;
export declare type AnyFunction<T = any> = (...args: T[]) => any;
export declare type FunctionArguments<T extends Function> = T extends (...args: infer R) => any ? R : never;
export declare type Dict<T = any> = Record<string, T>;
export declare type ReactNodeOrRenderProp<P> = React.ReactNode | ((props: P) => React.ReactNode);
export declare type Booleanish = boolean | "true" | "false";
export declare type ObjectOrArray<T, K extends keyof any = keyof any> = T[] | Record<K, T>;
export declare type StringOrNumber = string | number;
//# sourceMappingURL=types.d.ts.map