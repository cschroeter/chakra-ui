export declare const parser: {
    <P = {}>(props: import("./configs").SpaceProps & import("./configs").ColorProps & import("./configs").TypographyProps & import("./configs").FlexboxProps & import("./configs").GridProps & import("./configs").LayoutProps & import("./configs").BorderProps & import("./configs").ShadowProps & import("./configs").BackgroundProps & import("./configs").PositionProps & import("./configs").OutlineProps & import("./configs").OtherProps & import("./pseudo").PseudoProps<import("./parser.types").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: import("./utils").Config;
    propNames: string[];
};
export declare const layoutPropNames: string[];
export declare const propNames: string[];
//# sourceMappingURL=parser.d.ts.map