import { Booleanish } from "./types";
import * as React from "react";
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11.
 */
export declare const getWindow: (node?: HTMLElement | null | undefined) => Window | undefined;
export declare const isBrowser: boolean;
/**
 * Get the normalized event key across all browsers
 * @param event keyboard event
 */
export declare function normalizeEventKey(event: React.KeyboardEvent): string;
export declare const dataAttr: (condition: boolean | undefined) => Booleanish;
export declare const ariaAttr: (condition: boolean | undefined) => true | undefined;
export declare const getOwnerDocument: (node?: HTMLElement | undefined) => Document;
export declare const cx: (...classNames: any[]) => string;
//# sourceMappingURL=dom.d.ts.map