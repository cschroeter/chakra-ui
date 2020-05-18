import { ALERT_STATUSES } from "@chakra-ui/alert";
import * as React from "react";
import { RenderProps, ToastOptions, ToastId } from "./Toast.types";
export interface UseToastOptions {
    /**
     * The placement of the toast
     *
     * @default "bottom"
     */
    position?: ToastOptions["position"];
    /**
     * The delay before the toast hides (in milliseconds)
     * If set to `null`, toast will never dismiss.
     *
     * @default 5000 ( = 5000ms )
     */
    duration?: ToastOptions["duration"];
    /**
     * Render a component toast component.
     * Any component passed will receive 2 props: `id` and `onClose`.
     */
    render?(props: RenderProps): React.ReactNode;
    /**
     * The title of the toast
     */
    title?: string;
    /**
     * The description of the toast
     */
    description?: string;
    /**
     * If `true`, toast will show a close button
     */
    isClosable?: boolean;
    /**
     * The alert component `variant` to use
     */
    variant?: string;
    /**
     * The status of the toast.
     */
    status?: keyof typeof ALERT_STATUSES;
    /**
     * The `id` of the toast.
     *
     * Mostly used when you need to prevent duplicate.
     * By default, we generate a unique `id` for each toast
     */
    id?: ToastId;
    /**
     * Callback function to run side effects after the toast has closed.
     */
    onCloseComplete?: () => void;
}
export declare type IToast = UseToastOptions;
/**
 * React hook used to create a function that can be used
 * to show toasts in an application.
 */
export declare function useToast(): {
    (options: UseToastOptions): string | number | undefined;
    close: (id: ToastId) => void;
    closeAll: () => void;
    update(id: ToastId, options: Omit<UseToastOptions, "id">): void;
    isActive: (id: ToastId) => boolean | undefined;
};
export default useToast;
//# sourceMappingURL=Toast.hook.d.ts.map