import * as CSS from "csstype";
import { Config, Length, Prop } from "../utils";
export interface OutlineProps {
    /**
     * The CSS `outline` property
     */
    outline?: Prop<CSS.OutlineProperty<Length>>;
    /**
     * The CSS `outline-offset` property
     */
    outlineOffset?: Prop<CSS.OutlineOffsetProperty<Length>>;
    /**
     * The CSS `outline-color` property
     */
    outlineColor?: Prop<CSS.OutlineColorProperty>;
}
export declare const outline: {
    <P = {}>(props: import("./space").SpaceProps & import("./color").ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & import("./layout").LayoutProps & import("./border").BorderProps & import("./shadow").ShadowProps & import("./background").BackgroundProps & import("./position").PositionProps & OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=outline.d.ts.map