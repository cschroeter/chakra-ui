import * as React from "react";
export declare type FocusLockProps = {
    /**
     * `ref` of the element to receive focus initially
     */
    initialFocusRef?: React.RefObject<HTMLElement>;
    /**
     * `ref` of the element to return focus to when `FocusLock`
     * unmounts
     */
    finalFocusRef?: React.RefObject<HTMLElement>;
    /**
     * If `true`, focus will be restored to the element that
     * triggered the `FocusLock` once it unmounts
     */
    restoreFocus?: boolean;
    /**
     * The component to render
     */
    children: React.ReactNode;
    /**
     * If `true`, focus trapping will be disabled
     */
    isDisabled?: boolean;
    /**
     * If `true`, the first focuable element within the `children`
     * will ne auto-focused once `FocusLock` mounts
     */
    autoFocus?: boolean;
};
/**
 * React component to trap focus within an element or component.
 * Mostly used in Modals, Popovers, etc.
 *
 * @see Docs https://chakra-ui.com/focuslock
 */
export declare function FocusLock(props: FocusLockProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map