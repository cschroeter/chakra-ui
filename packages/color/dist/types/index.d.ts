import tiny from "tinycolor2";
import { Dict } from "@chakra-ui/utils";
/**
 * Get the color raw value from theme
 * @param theme - the theme object
 * @param color - the color path ("green.200")
 * @param fallback - the fallback color
 */
export declare const getColor: (theme: Dict, color: string, fallback?: string | undefined) => any;
/**
 * Determines if the tone of given color is "light" or "dark"
 * @param color - the color in hex, rgb, or hsl
 */
export declare const tone: (color: string) => (theme: Dict) => "dark" | "light";
/**
 * Determines if a color tone is "dark"
 * @param color - the color in hex, rgb, or hsl
 */
export declare const isDark: (color: string) => (theme: Dict) => boolean;
/**
 * Determines if a color tone is "light"
 * @param color - the color in hex, rgb, or hsl
 */
export declare const isLight: (color: string) => (theme: Dict) => boolean;
/**
 * Make a color transparent
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add
 */
export declare const opacity: (color: string, opacity: number) => (theme: Dict) => string;
/**
 * Add white to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
export declare const tint: (color: string, amount: number) => (theme: Dict) => string;
/**
 * Add black to a color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
export declare const shade: (color: string, amount: number) => (theme: Dict) => string;
/**
 * Darken a specified color
 * @param color - the color in hex, rgb, or hsl
 * @param amount - the amount white to add (0-1)
 */
export declare const darken: (color: string, amount: number) => (theme: Dict) => string;
export declare const lighten: (color: string, amount: number) => (theme: Dict) => string;
/**
 * Checks the contract ratio of between 2 colors,
 * based on the Web Content Accessibility Guidelines (Version 2.0).
 *
 * @param fg - the foreground or text color
 * @param bg - the background color
 */
export declare const contrast: (fg: string, bg: string) => (theme: Dict) => number;
/**
 * Checks if a color meets the Web Content Accessibility
 * Guidelines (Version 2.0) for constract ratio.
 *
 * @param fg - the foreground or text color
 * @param bg - the background color
 */
export declare const isAccessible: (fg: string, bg: string, options?: tiny.WCAG2Options | undefined) => (theme: Dict) => boolean;
export declare const complementary: (color: string) => (theme: Dict) => string;
export declare function generateStripe(size?: string, color?: string): {
    backgroundImage: string;
    backgroundSize: string;
};
/**
 * Returns an accessible ink color of any given fill color.
 *
 * @param color
 */
export declare const toAlphas: (color: string) => {
    900: (theme: Dict) => string;
    800: (theme: Dict) => string;
    700: (theme: Dict) => string;
    600: (theme: Dict) => string;
    500: (theme: Dict) => string;
    400: (theme: Dict) => string;
    300: (theme: Dict) => string;
    200: (theme: Dict) => string;
    100: (theme: Dict) => string;
    50: (theme: Dict) => string;
};
declare type Emphasis = "high" | "medium" | "low" | "lowest";
export declare const ink: (color: string, emphasis: Emphasis) => (theme: Dict) => string;
export declare function stringToColor(str: string): string;
export declare function randomColor(): string;
export declare namespace randomColor {
    var fromString: typeof stringToColor;
    var fromList: typeof randomFromList;
}
declare function randomFromList(str: string, list: string[]): string;
export {};
//# sourceMappingURL=index.d.ts.map