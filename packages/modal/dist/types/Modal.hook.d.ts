import { Dict } from "@chakra-ui/utils";
import * as React from "react";
export interface UseModalProps {
    /**
     * If `true`, the modal when be opened.
     */
    isOpen: boolean;
    /**
     * The `id` of the modal
     */
    id?: string;
    /**
     * Callback invoked to close the modal.
     */
    onClose(): void;
    /**
     * If `true`, scrolling will be disabled on the `body` when the modal opens.
     *  @default true
     */
    shouldBlockScroll?: boolean;
    /**
     * If `true`, the modal will close when the overlay is clicked
     * @default true
     */
    shouldCloseOnOverlayClick?: boolean;
    /**
     * If `true`, the modal will close when the `Esc` key is pressed
     * @default true
     */
    shouldCloseOnEsc?: boolean;
    /**
     * Callback fired when the overlay is clicked.
     */
    onOverlayClick?(): void;
    /**
     * Callback fired when the escape key is pressed and focus is within modal
     */
    onEsc?(): void;
    /**
     * A11y: If `true`, the siblings of the `modal` will have `aria-hidden`
     * set to `true` so that screen readers can only see the `modal`.
     *
     * This is commonly known as making the other elements **inert**
     *
     *  @default true
     */
    useInert?: boolean;
}
/**
 * Modal hook that manages all the logic for the modal dialog widget
 * and returns prop getters, state and actions.
 *
 * @param props
 */
export declare function useModal(props: UseModalProps): {
    isOpen: boolean;
    onClose: () => void;
    headerId: string;
    bodyId: string;
    setBodyMounted: React.Dispatch<React.SetStateAction<boolean>>;
    setHeaderMounted: React.Dispatch<React.SetStateAction<boolean>>;
    getContentProps: (props?: Dict) => {
        ref: (value: any) => void;
        id: string;
        role: any;
        tabIndex: number;
        "aria-modal": boolean;
        "aria-labelledby": string | undefined;
        "aria-describedby": string | undefined;
        onClick: (event: unknown) => void;
    };
    getOverlayProps: (props?: Dict) => {
        ref: (value: any) => void;
        onClick: (event: unknown) => void;
        onKeyDown: (event: unknown) => void;
        onMouseDown: (event: unknown) => void;
    };
};
export declare type UseModalReturn = ReturnType<typeof useModal>;
/**
 * Modal hook to polyfill `aria-modal`.
 *
 * It applies `aria-hidden` to elements behind the modal
 * to indicate that they're `inert`.
 *
 * @param ref React ref of the node
 * @param shouldHide whether `aria-hidden` should be applied
 */
export declare function useAriaHidden(ref: React.RefObject<HTMLElement>, shouldHide: boolean): void;
//# sourceMappingURL=Modal.hook.d.ts.map