/**
 * CSS Animation for progress spin effect
 */
export declare const spin: import("@emotion/serialize").Keyframes;
/**
 * CSS Animation for progress rotate effect
 */
export declare const rotate: import("@emotion/serialize").Keyframes;
/**
 * CSS Animation for progress indeterminate effect
 */
export declare const progress: import("@emotion/serialize").Keyframes;
/**
 * CSS Animation for progress stripe effect
 */
export declare const stripe: import("@emotion/serialize").Keyframes;
export interface GetProgressPropsOptions {
    value?: number;
    min: number;
    max: number;
    valueText?: string;
    getValueText?(value?: number, percent?: number): string;
}
/**
 * Get the common `aria-*` attributes for both the linear and circular
 * progress components.
 */
export declare function getProgressProps(options: GetProgressPropsOptions): {
    bind: {
        "data-indeterminate": string | undefined;
        "aria-valuemax": number;
        "aria-valuemin": number;
        "aria-valuenow": number | undefined;
        "aria-valuetext": string | undefined;
        role: string;
    };
    percent: number | undefined;
};
//# sourceMappingURL=Progress.utils.d.ts.map