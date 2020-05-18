import * as CSS from "csstype";
import { Config, Prop, Length } from "../utils";
/**
 * The prop types for border properties listed above
 */
export interface BorderProps {
    /**
     * The CSS `border` property
     */
    border?: Prop<CSS.BorderProperty<Length>>;
    /**
     * The CSS `border-width` property
     */
    borderWidth?: Prop<CSS.BorderWidthProperty<Length>>;
    /**
     * The CSS `border-style` property
     */
    borderStyle?: Prop<CSS.BorderStyleProperty>;
    /**
     * The CSS `border-color` property
     */
    borderColor?: Prop<CSS.BorderTopColorProperty>;
    /**
     * The CSS `border-radius` property
     */
    borderRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
    /**
     * The CSS `border-top` property
     */
    borderTop?: Prop<CSS.BorderTopProperty<Length>>;
    /**
     * The CSS `border-top-width` property
     */
    borderTopWidth?: Prop<CSS.BorderWidthProperty<Length>>;
    /**
     * The CSS `border-bottom-width` property
     */
    borderBottomWidth?: Prop<CSS.BorderWidthProperty<Length>>;
    /**
     * The CSS `border-left-width` property
     */
    borderLeftWidth?: Prop<CSS.BorderWidthProperty<Length>>;
    /**
     * The CSS `border-right-width` property
     */
    borderRightWidth?: Prop<CSS.BorderWidthProperty<Length>>;
    /**
     * The CSS `border-top-style` property
     */
    borderTopStyle?: Prop<CSS.BorderTopStyleProperty>;
    /**
     * The CSS `border-bottom-style` property
     */
    borderBottomStyle?: Prop<CSS.BorderBottomStyleProperty>;
    /**
     * The CSS `border-left-style` property
     */
    borderLeftStyle?: Prop<CSS.BorderLeftStyleProperty>;
    /**
     * The CSS `border-right-styles` property
     */
    borderRightStyle?: Prop<CSS.BorderRightStyleProperty>;
    /**
     * The CSS `border-top-color` property
     */
    borderTopColor?: Prop<CSS.BorderTopColorProperty>;
    /**
     * The CSS `border-bottom-color` property
     */
    borderBottomColor?: Prop<CSS.BorderBottomColorProperty>;
    /**
     * The CSS `border-left-color` property
     */
    borderLeftColor?: Prop<CSS.BorderLeftColorProperty>;
    /**
     * The CSS `border-right-color` property
     */
    borderRightColor?: Prop<CSS.BorderRightColorProperty>;
    /**
     * The CSS `border-right` property
     */
    borderRight?: Prop<CSS.BorderRightProperty<Length>>;
    /**
     * The CSS `border-bottom` property
     */
    borderBottom?: Prop<CSS.BorderBottomProperty<Length>>;
    /**
     * The CSS `border-left` property
     */
    borderLeft?: Prop<CSS.BorderLeftProperty<Length>>;
    /**
     * The CSS `border-top-radius` property
     */
    borderTopRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
    /**
     * The CSS `border-right-radius` property
     */
    borderRightRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
    /**
     * The CSS `border-bottom-radius` property
     */
    borderBottomRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
    /**
     * The CSS `border-left-radius` property
     */
    borderLeftRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
    /**
     * The CSS `border-top-left-radius` property
     */
    borderTopLeftRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
    /**
     * The CSS `border-top-right-radius` property
     */
    borderTopRightRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
    /**
     * The CSS `border-bottom-left-radius` property
     */
    borderBottomLeftRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
    /**
     * The CSS `border-bottom-right-radius` property
     */
    borderBottomRightRadius?: Prop<CSS.BorderRadiusProperty<Length>>;
    /**
     * The CSS `border-right` and `border-left` property
     */
    borderX?: Prop<CSS.BorderProperty<Length>>;
    /**
     * The CSS `border-top` and `border-bottom` property
     */
    borderY?: Prop<CSS.BorderProperty<Length>>;
}
/**
 * Create the parser for the config object
 */
export declare const border: {
    <P = {}>(props: import("./space").SpaceProps & import("./color").ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & import("./layout").LayoutProps & BorderProps & import("./shadow").ShadowProps & import("./background").BackgroundProps & import("./position").PositionProps & import("./outline").OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=border.d.ts.map