import { SystemStyleObject } from "@chakra-ui/css";
import { Dict } from "@chakra-ui/utils";
export interface CreateVariantOptions {
    prop: string;
    themeKey?: string;
    values?: Dict<SystemStyleObject>;
}
export declare function createVariant(options: CreateVariantOptions): {
    <P = {}>(props: import("@chakra-ui/parser/dist/types/configs").SpaceProps & import("@chakra-ui/parser/dist/types/configs").ColorProps & import("@chakra-ui/parser/dist/types/configs").TypographyProps & import("@chakra-ui/parser/dist/types/configs").FlexboxProps & import("@chakra-ui/parser/dist/types/configs").GridProps & import("@chakra-ui/parser/dist/types/configs").LayoutProps & import("@chakra-ui/parser/dist/types/configs").BorderProps & import("@chakra-ui/parser/dist/types/configs").ShadowProps & import("@chakra-ui/parser/dist/types/configs").BackgroundProps & import("@chakra-ui/parser/dist/types/configs").PositionProps & import("@chakra-ui/parser/dist/types/configs").OutlineProps & import("@chakra-ui/parser/dist/types/configs").OtherProps & import("@chakra-ui/parser/dist/types").PseudoProps<import("@chakra-ui/parser/dist/types").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: import("@chakra-ui/parser/dist/types").Config;
    propNames: string[];
};
export declare const textStyle: {
    <P = {}>(props: import("@chakra-ui/parser/dist/types/configs").SpaceProps & import("@chakra-ui/parser/dist/types/configs").ColorProps & import("@chakra-ui/parser/dist/types/configs").TypographyProps & import("@chakra-ui/parser/dist/types/configs").FlexboxProps & import("@chakra-ui/parser/dist/types/configs").GridProps & import("@chakra-ui/parser/dist/types/configs").LayoutProps & import("@chakra-ui/parser/dist/types/configs").BorderProps & import("@chakra-ui/parser/dist/types/configs").ShadowProps & import("@chakra-ui/parser/dist/types/configs").BackgroundProps & import("@chakra-ui/parser/dist/types/configs").PositionProps & import("@chakra-ui/parser/dist/types/configs").OutlineProps & import("@chakra-ui/parser/dist/types/configs").OtherProps & import("@chakra-ui/parser/dist/types").PseudoProps<import("@chakra-ui/parser/dist/types").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: import("@chakra-ui/parser/dist/types").Config;
    propNames: string[];
};
export declare const layerStyle: {
    <P = {}>(props: import("@chakra-ui/parser/dist/types/configs").SpaceProps & import("@chakra-ui/parser/dist/types/configs").ColorProps & import("@chakra-ui/parser/dist/types/configs").TypographyProps & import("@chakra-ui/parser/dist/types/configs").FlexboxProps & import("@chakra-ui/parser/dist/types/configs").GridProps & import("@chakra-ui/parser/dist/types/configs").LayoutProps & import("@chakra-ui/parser/dist/types/configs").BorderProps & import("@chakra-ui/parser/dist/types/configs").ShadowProps & import("@chakra-ui/parser/dist/types/configs").BackgroundProps & import("@chakra-ui/parser/dist/types/configs").PositionProps & import("@chakra-ui/parser/dist/types/configs").OutlineProps & import("@chakra-ui/parser/dist/types/configs").OtherProps & import("@chakra-ui/parser/dist/types").PseudoProps<import("@chakra-ui/parser/dist/types").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: import("@chakra-ui/parser/dist/types").Config;
    propNames: string[];
};
export declare function createComponent(options: any): (props: any) => any;
//# sourceMappingURL=variant.d.ts.map