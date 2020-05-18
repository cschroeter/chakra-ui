import { ToastId, ToastMessage, ToastOptions } from "./Toast.types";
declare class Toaster {
    private createToast?;
    private removeAll?;
    private closeToast?;
    private updateToast?;
    private isToastActive?;
    /**
     * Initialize the manager and mount it in the DOM
     * inside the portal node
     */
    constructor();
    private bindFunctions;
    notify: (message: ToastMessage, options?: Partial<ToastOptions>) => string | number | undefined;
    close: (id: ToastId) => void;
    closeAll: () => void;
    update: (id: ToastId, options?: Partial<ToastOptions>) => void;
    isActive: (id: ToastId) => boolean | undefined;
}
export declare const toast: Toaster;
export {};
//# sourceMappingURL=Toast.class.d.ts.map