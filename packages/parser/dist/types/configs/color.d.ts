import * as CSS from "csstype";
import { Config, Prop } from "../utils";
export interface ColorProps {
    /**
     * The CSS `color` property
     */
    textColor?: Prop<CSS.ColorProperty>;
    /**
     * The CSS `color` property
     */
    color?: Prop<CSS.ColorProperty>;
    /**
     * The CSS `fill` property for icon svgs and paths
     */
    fill?: Prop<CSS.ColorProperty>;
    /**
     * The CSS `stroke` property for icon svgs and paths
     */
    stroke?: Prop<CSS.ColorProperty>;
    /**
     * The CSS `opacity` property
     */
    opacity?: Prop<CSS.GlobalsNumber>;
}
export declare const color: {
    <P = {}>(props: import("./space").SpaceProps & ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & import("./layout").LayoutProps & import("./border").BorderProps & import("./shadow").ShadowProps & import("./background").BackgroundProps & import("./position").PositionProps & import("./outline").OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=color.d.ts.map