import * as CSS from "csstype";
import { Config, Length, Prop } from "../utils";
/**
 * Types for layout related CSS properties
 */
export interface LayoutProps {
    /**
     * The CSS `display` property
     */
    display?: Prop<CSS.DisplayProperty>;
    /**
     * The CSS `display` property
     */
    d?: Prop<CSS.DisplayProperty>;
    /**
     * The CSS `width` property
     */
    width?: Prop<CSS.WidthProperty<Length>>;
    /**
     * The CSS `width` property
     */
    w?: Prop<CSS.WidthProperty<Length>>;
    /**
     * The CSS `width` and `height` property
     */
    boxSize?: Prop<CSS.WidthProperty<Length>>;
    /**
     * The CSS `max-width` property
     */
    maxWidth?: Prop<CSS.MaxWidthProperty<Length>>;
    /**
     * The CSS `max-width` property
     */
    maxW?: Prop<CSS.MaxWidthProperty<Length>>;
    /**
     * The CSS `min-width` property
     */
    minWidth?: Prop<CSS.MinWidthProperty<Length>>;
    /**
     * The CSS `min-width` property
     */
    minW?: Prop<CSS.MinWidthProperty<Length>>;
    /**
     * The CSS `height` property
     */
    height?: Prop<CSS.HeightProperty<Length>>;
    /**
     * The CSS `height` property
     */
    h?: Prop<CSS.HeightProperty<Length>>;
    /**
     * The CSS `max-height` property
     */
    maxHeight?: Prop<CSS.MaxHeightProperty<Length>>;
    /**
     * The CSS `max-height` property
     */
    maxH?: Prop<CSS.MaxHeightProperty<Length>>;
    /**
     * The CSS `min-height` property
     */
    minHeight?: Prop<CSS.MinHeightProperty<Length>>;
    /**
     * The CSS `min-height` property
     */
    minH?: Prop<CSS.MinHeightProperty<Length>>;
    /**
     * The CSS `vertical-align` property
     */
    verticalAlign?: Prop<CSS.VerticalAlignProperty<Length>>;
    /**
     * The CSS `overflow` property
     */
    overflow?: Prop<CSS.OverflowProperty>;
    /**
     * The CSS `overflow-x` property
     */
    overflowX?: Prop<CSS.OverflowXProperty>;
    /**
     * The CSS `overflow-y` property
     */
    overflowY?: Prop<CSS.OverflowYProperty>;
    /**
     * The CSS `box-sizing` property
     */
    boxSizing?: CSS.BoxSizingProperty;
}
export declare const layout: {
    <P = {}>(props: import("./space").SpaceProps & import("./color").ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & LayoutProps & import("./border").BorderProps & import("./shadow").ShadowProps & import("./background").BackgroundProps & import("./position").PositionProps & import("./outline").OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=layout.d.ts.map