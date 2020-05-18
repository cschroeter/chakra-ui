export declare const storageKey = "chakra-ui-color-mode";
export declare const classNameLight = "chakra-ui-light";
export declare const classNameDark = "chakra-ui-dark";
export declare type ColorMode = "light" | "dark";
/**
 * Simple object for handle read-write for localStorage
 */
export declare const storage: {
    get(init?: "light" | "dark" | undefined): "light" | "dark" | undefined;
    set(value: ColorMode): void;
};
export declare const body: {
    classList: {
        add: () => void;
        remove: () => void;
    };
} | HTMLElement;
/**
 * Function to add/remove class from `body` based on color mode
 * @param isDark whether color mode is `dark`
 */
export declare function syncBodyClassName(isDark: boolean): void;
export declare const lightQuery = "(prefers-color-scheme: light)";
export declare const darkQuery = "(prefers-color-scheme: dark)";
export declare function getColorScheme(): "light" | "dark";
/**
 * Adds system os color mode listener, and run the callback
 * once preference changes
 *
 * @param callback function to run
 */
export declare function addListener(callback: Function): (() => void) | undefined;
//# sourceMappingURL=color-mode.utils.d.ts.map