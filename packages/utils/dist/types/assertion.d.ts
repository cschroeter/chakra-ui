import { ChangeEvent } from "react";
export declare function isNumber(value: any): value is number;
export declare const isNotNumber: (value: any) => boolean;
export declare function isNumeric(value: any): boolean;
export declare function isArray<T>(value: any): value is Array<T>;
export declare const isEmptyArray: (value: any) => boolean;
export declare function isFunction(value: any): value is Function;
export declare const isDefined: (value: any) => boolean;
export declare const isUndefined: (value: any) => value is undefined;
export declare const isObject: (value: any) => value is Record<string, any>;
export declare const isEmptyObject: (value: any) => boolean;
export declare function isNotEmptyObject(value: any): value is object;
export declare const isNull: (value: any) => value is null;
export declare function isString(value: any): value is string;
export declare function isInputEvent(value: any): value is ChangeEvent;
export declare const isEmpty: (value: any) => boolean;
export declare const __DEV__: boolean;
//# sourceMappingURL=assertion.d.ts.map