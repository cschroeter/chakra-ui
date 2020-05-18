import * as React from "react";
import { ThemingProps } from "./system.types";
export declare type ThemeProviderProps = {
    children?: React.ReactNode;
    theme: object;
};
export declare function ThemeProvider(props: ThemeProviderProps): JSX.Element;
export declare function useTheme<T extends object = object>(): T;
export declare type ChakraProviderProps = ThemeProviderProps;
export declare function ChakraProvider(props: ChakraProviderProps): JSX.Element;
declare const ThemingProvider: React.Provider<ThemingProps>, useThemingContext: () => ThemingProps;
export { ThemingProvider, useThemingContext };
//# sourceMappingURL=theme-provider.d.ts.map