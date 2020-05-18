import * as CSS from "csstype";
import { Config, Length, Prop } from "../utils";
/**
 * Types for grid related CSS properties
 */
export interface GridProps {
    /**
     * The CSS `grid-gap` property
     */
    gridGap?: Prop<CSS.GridGapProperty<Length>>;
    /**
     * The CSS `grid-column-gap` property
     */
    gridColumnGap?: Prop<CSS.GridColumnGapProperty<Length>>;
    /**
     * The CSS `grid-row-gap` property
     */
    gridRowGap?: Prop<CSS.GridRowGapProperty<Length>>;
    /**
     * The CSS `grid-column` property
     */
    gridColumn?: Prop<CSS.GridColumnProperty>;
    /**
     * The CSS `grid-row` property
     */
    gridRow?: Prop<CSS.GridRowProperty>;
    /**
     * The CSS `grid-auto-flow` property
     */
    gridAutoFlow?: Prop<CSS.GridAutoFlowProperty>;
    /**
     * The CSS `grid-auto-columns` property
     */
    gridAutoColumns?: Prop<CSS.GridAutoColumnsProperty<Length>>;
    /**
     * The CSS `grid-auto-rows` property
     */
    gridAutoRows?: Prop<CSS.GridAutoRowsProperty<Length>>;
    /**
     * The CSS `grid-template-columns` property
     */
    gridTemplateColumns?: Prop<CSS.GridTemplateColumnsProperty<Length>>;
    /**
     * The CSS `grid-template-rows` property
     */
    gridTemplateRows?: Prop<CSS.GridTemplateRowsProperty<Length>>;
    /**
     * The CSS `grid-template-areas` property
     */
    gridTemplateAreas?: Prop<CSS.GridTemplateAreasProperty>;
    /**
     * The CSS `grid-areas` property
     */
    gridArea?: Prop<CSS.GridAreaProperty>;
    /**
     * The CSS `place-items` property
     */
    placeItems?: Prop<CSS.PlaceItemsProperty>;
}
export declare const grid: {
    <P = {}>(props: import("./space").SpaceProps & import("./color").ColorProps & import("./typography").TypographyProps & import("./flexbox").FlexboxProps & GridProps & import("./layout").LayoutProps & import("./border").BorderProps & import("./shadow").ShadowProps & import("./background").BackgroundProps & import("./position").PositionProps & import("./outline").OutlineProps & import("./others").OtherProps & import("..").PseudoProps<import("..").StyleProps> & {
        theme: Record<string, any>;
    } & P): Record<string, any>;
    config: Config;
    propNames: string[];
};
//# sourceMappingURL=grid.d.ts.map