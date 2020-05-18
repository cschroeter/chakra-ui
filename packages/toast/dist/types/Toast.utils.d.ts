/// <reference types="react" />
import { ToastPosition, ToastOptions, ToastState, ToastId } from "./Toast.types";
/**
 * Given an array of toasts for a specific position.
 * It returns the toast that matches the `id` passed
 */
export declare function findById(arr: ToastOptions[], id: ToastId): ToastOptions | undefined;
/**
 * Given the toast manager state, finds the toast that matches
 * the id and return it's position and index
 */
export declare function findToast(toasts: ToastState, id: ToastId): {
    position: "top" | "top-right" | "top-left" | "bottom" | "bottom-right" | "bottom-left" | undefined;
    index: number;
};
/**
 * Given the toast manager state, finds the position of the toast that
 * matches the `id`
 */
export declare function getToastPosition(toasts: ToastState, id: ToastId): "top" | "top-right" | "top-left" | "bottom" | "bottom-right" | "bottom-left" | undefined;
/**
 * Given the toast manager state, checks if a specific toast is
 * still in the state, which means it's still visible on screen.
 */
export declare function isVisible(toasts: ToastState, id: ToastId): boolean;
/**
 * Get's the styles to be applied to a toast's container
 * based on it's position in the manager
 */
export declare function getToastStyle(position: ToastPosition): import("react").CSSProperties;
//# sourceMappingURL=Toast.utils.d.ts.map