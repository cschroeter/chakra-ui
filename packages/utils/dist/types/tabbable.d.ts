export declare const hasDisplayNone: (element: Element) => boolean;
export declare const hasTabIndex: (element: Element) => boolean;
export declare const hasNegativeTabIndex: (element: HTMLElement) => boolean;
export declare function isDisabled(element: HTMLElement): boolean;
export declare function hasFocusWithin(element: Element): boolean;
export declare function isHTMLElement(element: Element): element is HTMLElement;
export declare function isHidden(element: HTMLElement): boolean;
export declare function isContentEditable(element: HTMLElement): boolean;
export declare function isFocusable(element: Element): boolean;
declare const isActiveElement: (element: Element) => boolean;
declare type EnsureFocusOptions = FocusOptions & {
    isActive?: typeof isActiveElement;
};
export declare function ensureFocus(element: HTMLElement, { isActive, preventScroll }?: EnsureFocusOptions): number;
export declare function isTabbable(element: Element): boolean;
export {};
//# sourceMappingURL=tabbable.d.ts.map