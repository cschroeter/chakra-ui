export declare function getAllFocusable<T extends Element>(container: T): T[];
export declare function getFirstFocusable<T extends Element>(container: T): T | null;
export declare function getAllTabbable<T extends Element>(container: T, fallbackToFocusable?: boolean): T[];
export declare function getFirstTabbableIn<T extends Element>(container: T, fallbackToFocusable?: boolean): T | null;
export declare function getLastTabbableIn<T extends Element>(container: T, fallbackToFocusable?: boolean): T | null;
export declare function getNextTabbable<T extends Element>(container: T, fallbackToFocusable?: boolean): T | null;
export declare function getPreviousTabbable<T extends Element>(container: T, fallbackToFocusable?: boolean): T | null;
export declare function focusNextTabbable<T extends Element>(container: T, fallbackToFocusable?: boolean): void;
export declare function focusPreviousTabbable<T extends Element>(container: T, fallbackToFocusable?: boolean): void;
export declare function closest<T extends Element>(element: T, selectors: string): Element | null;
//# sourceMappingURL=dom-query.d.ts.map