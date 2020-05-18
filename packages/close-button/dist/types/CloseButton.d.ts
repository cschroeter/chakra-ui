/// <reference types="react" />
import { PropsOf } from "@chakra-ui/system";
/**
 * CloseButton - Theming
 *
 * To style the input globally, change the styles in
 * `theme.components.CloseButton`
 */
declare const StyledButton: import("@chakra-ui/system/dist/types").ChakraComponent<"button", {}>;
export declare type CloseButtonProps = PropsOf<typeof StyledButton> & {
    /**
     * If `true`, the close button will be disabled.
     */
    isDisabled?: boolean;
};
/**
 * CloseButton
 *
 * A button with a close icon.
 *
 * It is used to handle the close functionality in feedback and overlay components
 * like Alerts, Toasts, Drawers and Modals.
 */
export declare const CloseButton: {
    (props: CloseButtonProps): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=CloseButton.d.ts.map