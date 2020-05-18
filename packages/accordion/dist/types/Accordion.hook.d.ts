import { Dict } from "@chakra-ui/utils";
import * as React from "react";
export declare type ExpandedIndex = number | number[];
export interface UseAccordionProps {
    /**
     * If `true`, multiple accordion items can be expanded at once.
     */
    allowMultiple?: boolean;
    /**
     * If `true`, any expanded accordion item can be collapsed again.
     */
    allowToggle?: boolean;
    /**
     * The index(es) of the expanded accordion item
     */
    index?: ExpandedIndex;
    /**
     * The initial index(es) of the expanded accordion item
     */
    defaultIndex?: ExpandedIndex;
    /**
     * The callback invoked when accordion items are expanded or collapsed.
     */
    onChange?: (expandedIndex?: ExpandedIndex) => void;
    /**
     * The content of the accordion. Must be `AccordionItem`
     */
    children: React.ReactNode;
}
/**
 * useAccordion
 *
 * React hook that provides all the state and focus management logic
 * for accordion items.
 *
 * It is consumed by the `Accordion` component
 */
export declare function useAccordion(props: UseAccordionProps): {
    children: React.ReactElement<{
        isOpen: boolean;
        onChange(isOpen: boolean): void;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
    htmlProps: {
        /**
         * The content of the accordion. Must be `AccordionItem`
         */
        children: React.ReactNode;
    };
    focusedIndex: number;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
    descendantsContext: {
        descendants: {
            element: HTMLElement | null;
            index?: number | undefined;
            disabled?: boolean | undefined;
            focusable?: boolean | undefined;
        }[];
        register: ({ element, ...rest }: {
            element: HTMLElement | null;
            index?: number | undefined;
            disabled?: boolean | undefined;
            focusable?: boolean | undefined;
        }) => void;
        unregister: (element: HTMLElement) => void;
    };
};
export declare type UseAccordionReturn = ReturnType<typeof useAccordion>;
interface UseAccordionItemOptions {
    /**
     * If `true`, expands the accordion in the controlled mode.
     */
    isOpen?: boolean;
    /**
     * If `true`, the accordion item will be disabled.
     */
    isDisabled?: boolean;
    /**
     * If `true`, the accordion item will be focusable.
     */
    isFocusable?: boolean;
    /**
     * A unique id for the accordion item.
     */
    id?: string;
    /**
     * The callback fired when the accordion is expanded/collapsed.
     */
    onChange?: (isOpen: boolean) => void;
}
export declare type UseAccordionItemProps = UseAccordionItemOptions & {
    context: Omit<UseAccordionReturn, "children" | "htmlProps">;
};
/**
 * useAccordionItem
 *
 * React hook that provides the open/close functionality
 * for an accordion item and it's children
 */
export declare function useAccordionItem(props: UseAccordionItemProps): {
    isOpen: boolean | undefined;
    isDisabled: boolean | undefined;
    isFocusable: boolean | undefined;
    onOpen: () => void | undefined;
    onClose: () => void | undefined;
    /**
     * Prop getters
     */
    getButtonProps: (props?: Dict) => {
        ref: (value: HTMLButtonElement) => void;
        id: string;
        disabled: boolean | undefined;
        "aria-expanded": boolean | undefined;
        "aria-controls": string;
        onClick: (event: unknown) => void;
        onFocus: (event: unknown) => void;
        onKeyDown: (event: unknown) => void;
    };
    getPanelProps: (props?: Dict) => {
        role: string;
        id: string;
        "aria-labelledby": string;
        hidden: boolean;
    };
    getRootProps: (props?: Dict) => {
        ref: any;
    };
};
export declare type UseAccordionItemReturn = ReturnType<typeof useAccordionItem>;
export {};
//# sourceMappingURL=Accordion.hook.d.ts.map