import * as CSS from "csstype";
import { Config, Length, Prop } from "../utils";
/**
 * The prop types for background properties listed above
 */
export interface BackgroundProps {
    /**
     * The CSS `background` property
     */
    bg?: Prop<CSS.BackgroundProperty<Length>>;
    /**
     * The CSS `background` property
     */
    background?: Prop<CSS.BackgroundProperty<Length>>;
    /**
     * The CSS `background-color` property
     */
    bgColor?: Prop<CSS.BackgroundColorProperty>;
    /**
     * The CSS `background-color` property
     */
    backgroundColor?: Prop<CSS.BackgroundColorProperty>;
    /**
     * The CSS `background-image` property
     */
    backgroundImage?: Prop<CSS.BackgroundImageProperty>;
    /**
     * The CSS `background-blend-mode` property
     */
    backgroundBlendMode?: Prop<CSS.BackgroundBlendModeProperty>;
    /**
     * The CSS `background-blend-mode` property
     */
    bgBlendMode?: Prop<CSS.BackgroundBlendModeProperty>;
    /**
     * The CSS `background-size` property
     */
    backgroundSize?: Prop<CSS.BackgroundSizeProperty<Length>>;
    /**
     * The CSS `background-position` property
     */
    backgroundPosition?: Prop<CSS.BackgroundPositionProperty<Length>>;
    /**
     * The CSS `background-image` property
     */
    bgImage?: Prop<CSS.BackgroundImageProperty>;
    /**
     * The CSS `background-repeat` property
     */
    bgRepeat?: Prop<CSS.BackgroundRepeatProperty>;
    /**
     * The CSS `background-repeat` property
     */
    backgroundRepeat?: Prop<CSS.BackgroundRepeatProperty>;
    /**
     * The CSS `background-size` property
     */
    bgSize?: Prop<CSS.BackgroundSizeProperty<Length>>;
    /**
     * The CSS `background-attachment` property
     */
    bgAttachment?: Prop<CSS.BackgroundAttachmentProperty>;
    /**
     * The CSS `background-attachment` property
     */
    backgroundAttachment?: Prop<CSS.BackgroundAttachmentProperty>;
    /**
     * The CSS `background-position` property
     */
    bgPosition?: Prop<CSS.BackgroundPositionProperty<Length>>;
}
/**
 * Create the parser for the config object
 */
export declare const background: {
    <P = {}>(props: import("./space").SpaceProps & import("./color").ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & import("./layout").LayoutProps & import("./border").BorderProps & import("./shadow").ShadowProps & BackgroundProps & import("./position").PositionProps & import("./outline").OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=background.d.ts.map