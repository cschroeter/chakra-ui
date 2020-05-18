import * as React from "react";
import { FC, ReactNode } from "react";
import { ColorMode } from "./color-mode.utils";
export { ColorMode };
declare type ColorModeContext = [ColorMode, () => void];
export declare const ColorModeContext: React.Context<ColorModeContext>;
/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */
export declare const useColorMode: () => ColorModeContext;
export interface ColorModeProviderProps {
    value?: ColorMode;
    children?: ReactNode;
}
/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
export declare const ColorModeProvider: FC;
/**
 * Locks the color mode to `dark`, without any way to change it.
 */
export declare const DarkMode: FC;
/**
 * Locks the color mode to `light` without any way to change it.
 */
export declare const LightMode: FC;
/**
 * Change value based on color mode
 *
 * @param light the light mode value
 * @param dark the dark mode value
 */
export declare const getColorModeValue: (light: any, dark: any) => (colorMode: ColorMode) => any;
/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
export declare const useColorModeValue: (light: any, dark: any) => any;
//# sourceMappingURL=ColorModeProvider.d.ts.map