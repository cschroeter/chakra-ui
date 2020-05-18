import * as CSS from "csstype";
import { Config, Prop, Length } from "../utils";
/**
 * Types for space related CSS properties
 */
export interface SpaceProps {
    /**
     * Margin on top, left, bottom and right
     */
    m?: Prop<CSS.MarginProperty<Length>>;
    /**
     * Margin on top, left, bottom and right
     */
    margin?: Prop<CSS.MarginProperty<Length>>;
    /**
     * Margin on top
     */
    mt?: Prop<CSS.MarginProperty<Length>>;
    /**
     * Margin on top
     */
    marginTop?: Prop<CSS.MarginTopProperty<Length>>;
    /**
     * Margin on right
     */
    mr?: Prop<CSS.MarginRightProperty<Length>>;
    /**
     * Margin on right
     */
    marginRight?: Prop<CSS.MarginRightProperty<Length>>;
    /**
     * Margin on bottom
     */
    mb?: Prop<CSS.MarginBottomProperty<Length>>;
    /**
     * Margin on bottom
     */
    marginBottom?: Prop<CSS.MarginBottomProperty<Length>>;
    /**
     * Margin on left
     */
    ml?: Prop<CSS.MarginLeftProperty<Length>>;
    /**
     * Margin on left
     */
    marginLeft?: Prop<CSS.MarginLeftProperty<Length>>;
    /**
     * Margin on left and right
     */
    mx?: Prop<CSS.MarginProperty<Length>>;
    /**
     * Margin on left and right
     */
    marginX?: Prop<CSS.MarginProperty<Length>>;
    /**
     * Margin on top and bottom
     */
    my?: Prop<CSS.MarginProperty<Length>>;
    /**
     * Margin on top and bottom
     */
    marginY?: Prop<CSS.MarginProperty<Length>>;
    /**
     * Padding on top, left, bottom and right
     */
    p?: Prop<CSS.PaddingProperty<Length>>;
    /**
     * Padding on top, left, bottom and right
     */
    padding?: Prop<CSS.PaddingProperty<Length>>;
    /**
     * Padding on top
     */
    pt?: Prop<CSS.PaddingTopProperty<Length>>;
    /**
     * Padding on top
     */
    paddingTop?: Prop<CSS.PaddingTopProperty<Length>>;
    /**
     * Padding on right
     */
    pr?: Prop<CSS.PaddingRightProperty<Length>>;
    /**
     * Padding on right
     */
    paddingRight?: Prop<CSS.PaddingRightProperty<Length>>;
    /**
     * Padding on bottom
     */
    pb?: Prop<CSS.PaddingBottomProperty<Length>>;
    /**
     * Padding on bottom
     */
    paddingBottom?: Prop<CSS.PaddingBottomProperty<Length>>;
    /**
     * Padding on left
     */
    pl?: Prop<CSS.PaddingLeftProperty<Length>>;
    /**
     * Padding on left
     */
    paddingLeft?: Prop<CSS.PaddingLeftProperty<Length>>;
    /**
     * Padding on left and right
     */
    px?: Prop<CSS.PaddingProperty<Length>>;
    /**
     * Padding on left and right
     */
    paddingX?: Prop<CSS.PaddingProperty<Length>>;
    /**
     * Padding on top and bottom
     */
    py?: Prop<CSS.PaddingProperty<Length>>;
    /**
     * Padding on top and bottom
     */
    paddingY?: Prop<CSS.PaddingProperty<Length>>;
}
/**
 * Converts shorthand or longhand margin and padding props to margin and padding CSS declarations
 *
 * - Numbers from 0-4 (or the length of theme.space) are converted to values on the spacing scale.
 * - Negative values can be used for negative margins.
 * - Numbers greater than the length of the theme.space array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export declare const space: {
    <P = {}>(props: SpaceProps & import("./color").ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & import("./layout").LayoutProps & import("./border").BorderProps & import("./shadow").ShadowProps & import("./background").BackgroundProps & import("./position").PositionProps & import("./outline").OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=space.d.ts.map