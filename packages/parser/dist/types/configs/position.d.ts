import * as CSS from "csstype";
import { Config, Prop, Length } from "../utils";
/**
 * Types for position CSS properties
 */
export interface PositionProps {
    /**
     * The CSS `z-index` property
     */
    zIndex?: Prop<string | CSS.ZIndexProperty>;
    /**
     * The CSS `top` property
     */
    top?: Prop<CSS.TopProperty<Length>>;
    /**
     * The CSS `right` property
     */
    right?: Prop<CSS.RightProperty<Length>>;
    /**
     * The CSS `bottom` property
     */
    bottom?: Prop<CSS.BottomProperty<Length>>;
    /**
     * The CSS `left` property
     */
    left?: Prop<CSS.LeftProperty<Length>>;
    /**
     * The CSS `left`, `right`, `top`, `bottom` property
     */
    inset?: Prop<CSS.LeftProperty<Length>>;
    /**
     * The CSS `left`, and `right` property
     */
    insetX?: Prop<CSS.LeftProperty<Length>>;
    /**
     * The CSS `top`, and `bottom` property
     */
    insetY?: Prop<CSS.LeftProperty<Length>>;
    /**
     * The CSS `position` property
     */
    pos?: Prop<CSS.PositionProperty>;
    /**
     * The CSS `position` property
     */
    position?: Prop<CSS.PositionProperty>;
}
export declare const position: {
    <P = {}>(props: import("./space").SpaceProps & import("./color").ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & import("./layout").LayoutProps & import("./border").BorderProps & import("./shadow").ShadowProps & import("./background").BackgroundProps & PositionProps & import("./outline").OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=position.d.ts.map