import { Placement, UsePopperProps } from "@chakra-ui/popper";
import { Dict } from "@chakra-ui/utils";
export interface UseTooltipProps {
    /**
     * Delay (in ms) before hiding the tooltip
     * @default 200ms
     */
    hideDelay?: number;
    /**
     * Delay (in ms) before showing the tooltip
     * @default 200ms
     */
    showDelay?: number;
    /**
     * If `true`, the tooltip will hide on click
     */
    hideOnClick?: boolean;
    /**
     * If `true`, the tooltip will hide while the mouse
     * is down
     */
    hideOnMouseDown?: boolean;
    /**
     * Callback to run when the tooltip shows
     */
    onShow?(): void;
    /**
     * Callback to run when the tooltip hides
     */
    onHide?(): void;
    /**
     * The Popper.js placement of the tooltip
     */
    placement?: Placement;
    /**
     * Custom `id` to use in place of `uuid`
     */
    id?: string;
    /**
     * If `true`, the tooltip will be shown (in controlled mode)
     */
    isOpen?: boolean;
    /**
     * If `true`, the tooltip will be initially shown
     */
    defaultIsOpen?: boolean;
    /**
     * The size of the arrow in css units (numeric)
     * @default 10 ( = 10px )
     */
    arrowSize?: UsePopperProps["arrowSize"];
}
export declare function useTooltip(props?: UseTooltipProps): {
    isOpen: boolean;
    show: () => void;
    hide: () => void;
    placement: Placement;
    getTriggerProps: (props?: Dict) => {
        ref: (value: any) => void;
        onMouseOut: (event: unknown) => void;
        onMouseOver: (event: unknown) => void;
        onClick: (event: unknown) => void;
        onMouseDown: (event: unknown) => void;
        onFocus: (event: unknown) => void;
        onBlur: (event: unknown) => void;
        "aria-describedby": string | undefined;
    };
    getTooltipProps: (props?: Dict) => {
        id: string;
        role: string;
        ref: (value: HTMLDivElement) => void;
        style: any;
    };
    getArrowProps: (props?: Dict) => {
        ref: (value: HTMLDivElement) => void;
        style: any;
    };
};
export declare type UseTooltipReturn = ReturnType<typeof useTooltip>;
//# sourceMappingURL=Tooltip.hook.d.ts.map