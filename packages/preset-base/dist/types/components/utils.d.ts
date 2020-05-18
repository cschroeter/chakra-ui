/// <reference types="react" />
import { Theme } from "../foundations";
import { SystemProps, ThemingProps } from "@chakra-ui/system";
export declare type StyleProps = SystemProps | {
    [component: string]: SystemProps;
};
/**
 * The component style can either be a style object or  a function that returns a
 * style object.
 */
export declare type ComponentStyle<CustomProps = {}> = StyleProps | ((props: Props & Required<CustomProps>) => StyleProps);
export interface ComponentTheme<CustomProps = {}> {
    /**
     * The default props to apply to the component
     */
    defaultProps?: CustomProps & {
        /**
         * The default variant to use (in variants)
         */
        variant?: string;
        /**
         * The default color scheme to use (if variants are defined as functions)
         */
        colorScheme?: string;
        /**
         * The default size to use (in sizes)
         */
        size?: string;
    };
    /**
     * The initial styles to be applied to the component
     */
    baseStyle?: ComponentStyle<CustomProps & ThemingProps>;
    /**
     * The component's visual style variants
     */
    variants?: {
        [variant: string]: ComponentStyle<CustomProps> | string;
    };
    /**
     * The component's size variations
     */
    sizes?: {
        [size: string]: ComponentStyle<CustomProps> | string;
    };
}
export interface Props {
    colorScheme: string;
    orientation: "horizontal" | "vertical";
    colorMode: "light" | "dark";
    theme: Theme;
}
export declare function mode<T = string>(light: T, dark: T): (props: Props) => T;
export declare function orientation<T = string>(horizontal: T, vertical: T): (props: Props) => T;
declare type GlobalStyles = {
    global?: SystemProps | ((props: Props) => SystemProps);
};
declare type ElementStyles = {
    [K in keyof JSX.IntrinsicElements]?: SystemProps;
};
export declare type Styles = ElementStyles & GlobalStyles;
export declare function getOrientationStyle<T>(options: {
    orientation?: "vertical" | "horizontal";
    vertical: T;
    horizontal: T;
}): {};
/**
 * Copies the styles from a component sizes or variants to another component
 * under a speicifed key.
 *
 * @param source The component theme object to copy
 * @param component The component string to copy to
 */
export declare function copy(source: any, component: string): any;
export {};
//# sourceMappingURL=utils.d.ts.map