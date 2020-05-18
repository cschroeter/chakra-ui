export declare type Descendant<T extends HTMLElement, P = {}> = P & {
    element: T | null;
    index?: number;
    disabled?: boolean;
    focusable?: boolean;
};
export interface DescendantContext<T extends HTMLElement, P = {}> {
    descendants: Descendant<T, P>[];
    register: (descendant: Descendant<T, P>) => void;
    unregister: (element: T) => void;
}
export declare type UseDescendantProps<T extends HTMLElement, P> = {
    context: DescendantContext<T, P>;
} & Descendant<T, P>;
export declare function useDescendant<T extends HTMLElement, P>(props: UseDescendantProps<T, P>): number;
export declare function useDescendants<T extends HTMLElement, P>(): {
    descendants: Descendant<T, P>[];
    register: ({ element, ...rest }: Descendant<T, P>) => void;
    unregister: (element: T) => void;
};
//# sourceMappingURL=Descendant.d.ts.map