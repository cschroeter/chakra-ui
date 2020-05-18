import * as CSS from "csstype";
import { Config, Length, Prop } from "../utils";
export interface OtherProps {
    /**
     * The CSS `animation` property
     */
    animation?: Prop<CSS.AnimationProperty>;
    /**
     * The CSS `appearance` property
     */
    appearance?: Prop<CSS.AppearanceProperty>;
    /**
     * The CSS `transform` property
     */
    transform?: Prop<CSS.TransformProperty>;
    /**
     * The CSS `transform-origin` property
     */
    transformOrigin?: Prop<CSS.TransformOriginProperty<Length>>;
    /**
     * The CSS `visibility` property
     */
    visibility?: Prop<CSS.VisibilityProperty>;
    /**
     * The CSS `user-select` property
     */
    userSelect?: Prop<CSS.UserSelectProperty>;
    /**
     * The CSS `pointer-events` property
     */
    pointerEvents?: Prop<CSS.PointerEventsProperty>;
    /**
     * The CSS `cursor` property
     */
    cursor?: Prop<CSS.CursorProperty>;
    /**
     * The CSS `resize` property
     */
    resize?: Prop<CSS.ResizeProperty>;
    /**
     * The CSS `transition` property
     */
    transition?: Prop<CSS.TransitionProperty>;
    /**
     * The CSS `transition-property` property
     */
    transitionProperty?: Prop<CSS.TransitionPropertyProperty>;
    /**
     * The CSS `transition-timing-function` property
     */
    transitionTimingFunction?: Prop<CSS.TransitionTimingFunctionProperty>;
    /**
     * The CSS `transition-duration` property
     */
    transitionDuration?: Prop<string>;
    /**
     * The CSS `object-fit` property
     */
    objectFit?: Prop<CSS.ObjectFitProperty>;
    /**
     * The CSS `object-psition` property
     */
    objectPosition?: Prop<CSS.ObjectPositionProperty<Length>>;
    /**
     * The CSS `float` property
     */
    float?: Prop<CSS.FloatProperty>;
    /**
     * The CSS `will-change` property
     */
    willChange?: Prop<CSS.WillChangeProperty>;
    /**
     * The CSS `list-style-type` property
     */
    listStyleType?: Prop<CSS.ListStyleTypeProperty>;
    /**
     * The CSS `list-style-position` property
     */
    listStylePosition?: Prop<CSS.ListStylePositionProperty>;
    /**
     * The CSS `list-style-image` property
     */
    listStyleImage?: Prop<CSS.ListStyleImageProperty>;
}
export declare const others: {
    <P = {}>(props: import("./space").SpaceProps & import("./color").ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & import("./layout").LayoutProps & import("./border").BorderProps & import("./shadow").ShadowProps & import("./background").BackgroundProps & import("./position").PositionProps & import("./outline").OutlineProps & OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=others.d.ts.map