import * as React from "react";
/**
 * Check if the event target is within the popover ref.
 *
 * @param ref the popover ref
 * @param event the blur event
 */
export declare function hasFocusWithin(popoverRef: React.RefObject<HTMLElement>, event: React.FocusEvent): boolean;
/**
 * Popover hook to manage outside click or blur detection.
 * It listens for outside click and notifies us so we can
 * close the popover
 *
 * @param triggerRef - popover trigger ref
 * @param popoverRef - popover content ref
 * @param options popover options (visible and action)
 */
export declare function useBlurOutside(triggerRef: React.RefObject<HTMLButtonElement>, popoverRef: React.RefObject<HTMLElement>, options: {
    action: () => void;
    visible: boolean;
}): (event: React.FocusEvent) => void;
export interface UseFocusOnHideOptions {
    focusRef: React.RefObject<HTMLElement>;
    autoFocus?: boolean;
    visible?: boolean;
}
/**
 * Popover hook to manage the focus when the popover closes or hides.
 *
 * We either want to return focus back to the popover trigger or
 * let focus proceed normally if user moved to another interactive
 * element in the viewport.
 */
export declare function useFocusOnHide(popoverRef: React.RefObject<HTMLElement>, options: UseFocusOnHideOptions): void;
export interface UseFocusOnShowOptions {
    autoFocus?: boolean;
    visible?: boolean;
    focusRef?: React.RefObject<HTMLElement>;
}
/**
 * Popover hook to manage the focus when the popover opens.
 *
 * We either want to focus the popover content itself since it
 * has `tabIndex = -1`, or focus the first interactive element
 * within the popover content.
 */
export declare function useFocusOnShow(popoverRef: React.RefObject<HTMLElement>, options: UseFocusOnShowOptions): void;
//# sourceMappingURL=Popover.utils.d.ts.map