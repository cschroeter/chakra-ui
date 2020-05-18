import * as CSS from "csstype";
import { Config, Prop } from "../utils";
/**
 * Types for box and text shadow properties
 */
export interface ShadowProps {
    /**
     * The `box-shadow` property
     */
    boxShadow?: Prop<CSS.BoxShadowProperty | number>;
    /**
     * The `text-shadow` property
     */
    textShadow?: Prop<CSS.BoxShadowProperty | number>;
}
export declare const shadow: {
    <P = {}>(props: import("./space").SpaceProps & import("./color").ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & import("./grid").GridProps & import("./layout").LayoutProps & import("./border").BorderProps & ShadowProps & import("./background").BackgroundProps & import("./position").PositionProps & import("./outline").OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=shadow.d.ts.map