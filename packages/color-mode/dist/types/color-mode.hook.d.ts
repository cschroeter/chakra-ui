/// <reference types="react" />
import { ColorMode } from "./color-mode.utils";
interface Options {
    initialColorMode?: ColorMode;
    useSystemColorMode?: boolean;
}
/**
 * React hook that sets up the localStorage, body className,
 * and reads from system preference
 */
export declare function useColorModeState<T extends Options>(options?: T): readonly [ColorMode, import("react").Dispatch<import("react").SetStateAction<ColorMode>>];
export {};
//# sourceMappingURL=color-mode.hook.d.ts.map