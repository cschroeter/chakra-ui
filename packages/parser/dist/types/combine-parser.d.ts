import { Parser } from "./create-parser";
/**
 * Combine multiple style prop parsers
 * into a single parser.
 *
 * @param parsers list of parsers
 */
export declare function combineParsers(...parsers: Parser[]): {
    <P = {}>(props: import("./configs").SpaceProps & import("./configs").ColorProps & import("./configs").TypographyProps & import("./configs").FlexboxProps & import("./configs").GridProps & import("./configs").LayoutProps & import("./configs").BorderProps & import("./configs").ShadowProps & import("./configs").BackgroundProps & import("./configs").PositionProps & import("./configs").OutlineProps & import("./configs").OtherProps & import("./pseudo").PseudoProps<import("./parser.types").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: import("./utils").Config;
    propNames: string[];
};
//# sourceMappingURL=combine-parser.d.ts.map