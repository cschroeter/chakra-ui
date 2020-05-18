import * as CSS from "csstype";
import { Config, Prop, Length } from "../utils";
/**
 * Types for typography related CSS properties
 */
export interface TypographyProps {
    /**
     * The CSS `font-weight` property
     */
    fontWeight?: Prop<CSS.FontWeightProperty | "medium" | "light" | "semibold">;
    /**
     * The CSS `line-height` property
     */
    lineHeight?: Prop<CSS.LineHeightProperty<Length>>;
    /**
     * The CSS `line-height` property
     */
    letterSpacing?: Prop<CSS.LetterSpacingProperty<Length>>;
    /**
     * The CSS `font-size` property
     */
    fontSize?: Prop<CSS.FontSizeProperty<Length>>;
    /**
     * The CSS `font-family` property
     */
    fontFamily?: Prop<CSS.FontFamilyProperty>;
    /**
     * The CSS `text-align` property
     */
    textAlign?: Prop<CSS.TextAlignProperty>;
    /**
     * The CSS `font-style` property
     */
    fontStyle?: Prop<CSS.FontStyleProperty>;
    /**
     * The CSS `word-break` property
     */
    wordBreak?: Prop<CSS.WordBreakProperty>;
    /**
     * The CSS `overflow-wrap` property
     */
    overflowWrap?: Prop<CSS.OverflowWrapProperty>;
    /**
     * The CSS `text-overflow` property
     */
    textOverflow?: Prop<CSS.TextOverflowProperty>;
    /**
     * The CSS `text-transform` property
     */
    textTransform?: Prop<CSS.TextTransformProperty>;
    /**
     * The CSS `white-space` property
     */
    whiteSpace?: Prop<CSS.WhiteSpaceProperty>;
    /**
     * The CSS `text-decoration` property
     */
    textDecoration?: Prop<CSS.TextDecorationProperty<Length>>;
    /**
     * The CSS `text-decoration` property
     */
    textDecor?: Prop<CSS.TextDecorationProperty<Length>>;
}
export declare const typography: {
    <P = {}>(props: import("./space").SpaceProps & import("./color").ColorProps & TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & import("./layout").LayoutProps & import("./border").BorderProps & import("./shadow").ShadowProps & import("./background").BackgroundProps & import("./position").PositionProps & import("./outline").OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=typography.d.ts.map