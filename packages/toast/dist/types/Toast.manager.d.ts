import * as React from "react";
import { ToastId, ToastMessage, ToastOptions, ToastPosition } from "./Toast.types";
export interface Methods {
    notify: (message: ToastMessage, options: CreateToastOptions) => ToastId;
    closeAll: () => void;
    close: (id: ToastId) => void;
    update: (id: ToastId, options: CreateToastOptions) => void;
    isActive: (id: ToastId) => boolean;
}
interface Props {
    notify: (methods: Methods) => void;
}
declare type State = {
    [K in ToastPosition]: ToastOptions[];
};
declare type CreateToastOptions = Partial<Pick<ToastOptions, "status" | "duration" | "position" | "id" | "onCloseComplete">>;
/**
 * Manages the creation, and removal of toasts
 * across all corners ("top", "bottom", etc.)
 */
export declare class ToastManager extends React.Component<Props, State> {
    /**
     * Static id counter to create unique ids
     * for each toast
     */
    static counter: number;
    /**
     * State to track all the toast across all positions
     */
    state: State;
    constructor(props: Props);
    /**
     * Function to actually create a toast and add it
     * to state at the specified position
     */
    notify: (message: ToastMessage, options: CreateToastOptions) => ToastId;
    /**
     * Update a specific toast with new options based on the
     * passed `id`
     */
    updateToast: (id: ToastId, options: CreateToastOptions) => void;
    /**
     * Close all toasts at once
     */
    closeAll: () => void;
    /**
     * Create properties for a new toast
     */
    createToast: (message: ToastMessage, options: CreateToastOptions) => {
        id: ToastId;
        message: ToastMessage;
        position: ToastPosition;
        duration: number | null | undefined;
        onCloseComplete: (() => void) | undefined;
        onRequestRemove: () => void;
        status: "default" | "success" | "error" | "warning" | "info" | undefined;
    };
    /**
     * Requests to close a toast based on it's id and position
     */
    closeToast: (id: ToastId) => void;
    /**
     * Delete a toast record at it's position
     */
    removeToast: (id: ToastId, position: ToastPosition) => void;
    isVisible: (id: ToastId) => boolean;
    /**
     * Compute the style of a toast based on it's position
     */
    getStyle: (position: ToastPosition) => React.CSSProperties;
    render(): JSX.Element[];
}
export {};
//# sourceMappingURL=Toast.manager.d.ts.map