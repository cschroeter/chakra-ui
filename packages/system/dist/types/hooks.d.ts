import { StyleObjectOrFn } from "@chakra-ui/css";
import { Dict, StringOrNumber } from "@chakra-ui/utils";
export declare function useChakra<T extends Dict = Dict>(): {
    colorMode: import("@chakra-ui/color-mode/dist/types").ColorMode;
    setColorMode: () => void;
    theme: T;
};
interface UseComponentStyleProps {
    size?: string;
    variant?: string;
    colorScheme?: string;
    themeKey: string;
}
export declare function useComponentStyle(props: UseComponentStyleProps): import("@chakra-ui/css/dist/types").CSSObject | undefined;
export declare function useThemeDefaultProps(themeKey: string): Pick<import("./component/types").ModifierStyleProps, "variant" | "colorScheme" | "size"> | undefined;
export declare function useCss(styles: StyleObjectOrFn): import("@chakra-ui/css/dist/types").CSSObject;
export declare function useToken(scale: string, token: StringOrNumber, fallback?: StringOrNumber): any;
export {};
//# sourceMappingURL=hooks.d.ts.map