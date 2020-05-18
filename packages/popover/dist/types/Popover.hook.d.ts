import { Placement } from "@chakra-ui/popper";
import * as React from "react";
import { Dict } from "@chakra-ui/utils";
export interface UsePopoverProps {
    /**
     * The html `id` attribute of the popover.
     * If not provided, we generate a unique id.
     *
     * This `id` is also used to auto-generate the `aria-labelledby`
     * and `aria-decribedby` attributes that points to the `PopoverHeader` and `PopoverBody`
     */
    id?: string;
    /**
     * If `true`, the popover will be opened in controlled mode.
     */
    isOpen?: boolean;
    /**
     * If `true`, the popover will be initially opened.
     */
    defaultIsOpen?: boolean;
    /**
     * The `ref` of the element that should receive focus when the popover opens.
     */
    initialFocusRef?: React.RefObject<any>;
    /**
     * If `true`, focus will be returned to the element that triggers the popover
     * when it closes
     */
    returnFocus?: boolean;
    /**
     * If `true`, focus will be transferred to the first interactive element
     * when the popover opens
     */
    autoFocus?: boolean;
    /**
     * The gap (in pixels) to apply between the popover and the target.
     * Used by `popper.js`
     */
    gutter?: number;
    /**
     * The placment of the popover
     */
    placement?: Placement;
    /**
     * If `true`, the popover will close when you blur out it by
     * clicking outside or tabbing out
     */
    closeOnBlur?: boolean;
    /**
     * If `true`, the popover will close when you hit the `Esc` key
     */
    closeOnEsc?: boolean;
    /**
     * Callback fired when the popover opens
     */
    onOpen?: () => void;
    /**
     * Callback fired when the popover closes
     */
    onClose?: () => void;
    /**
     * The size of the popover arrow
     */
    arrowSize?: number;
}
export declare function usePopover(props?: UsePopoverProps): {
    isOpen: boolean;
    onClose: () => void;
    headerId: string;
    hasHeader: boolean;
    setHasHeader: {
        readonly on: () => void;
        readonly off: () => void;
        readonly toggle: () => void;
    };
    bodyId: string;
    hasBody: boolean;
    setHasBody: {
        readonly on: () => void;
        readonly off: () => void;
        readonly toggle: () => void;
    };
    getArrowProps: (props?: Dict) => {
        ref: (value: HTMLDivElement) => void;
        style: any;
    };
    getTriggerProps: (props?: Dict) => {
        id: string;
        ref: (value: any) => void;
        "aria-haspopup": boolean | "listbox" | "grid" | "menu" | "false" | "true" | "dialog" | "tree" | undefined;
        "aria-expanded": boolean;
        "aria-controls": string;
        onClick: (event: unknown) => void;
    };
    getPopoverProps: (props?: Dict) => {
        id: string;
        tabIndex: number;
        hidden: boolean;
        ref: (value: any) => void;
        style: any;
        "aria-hidden": boolean | undefined;
        role: string;
        onBlur: (event: unknown) => void;
        onKeyDown: (event: unknown) => void;
        "aria-labelledby": string | undefined;
        "aria-describedby": string | undefined;
    };
};
export declare type UsePopoverReturn = ReturnType<typeof usePopover>;
//# sourceMappingURL=Popover.hook.d.ts.map