import { Dict } from "@chakra-ui/utils";
import * as CSS from "csstype";
declare type Scale = Dict<string | number> | Array<string | number>;
export interface StyleConfig {
    /**
     * The CSS property to use in the returned style object
     * (overridden by `properties` if present).
     */
    property?: keyof CSS.Properties;
    /**
     * An array of css properties (e.g. `['marginLeft', 'marginRight']`)
     * the prop maps to.
     */
    properties?: Array<keyof CSS.Properties>;
    /**
     * A reference to theme scale for this property or properties.
     */
    scale?: string;
    /**
     * A fallback scale object if scale is not found
     * in theme
     */
    fallbackScale?: any;
    /**
     * A function to transform the raw value based on the scale.
     */
    transform?: (value: any, scale: Scale, props: any) => any;
}
export declare type Config = {
    [prop: string]: StyleConfig | null | true;
};
/**
 * Transform an object of style props config to it's raw values.
 *
 * @param config the parser config object
 * @param theme the theme object
 */
export declare function transformConfig(config: Config, theme: Dict): Record<string, any>;
export {};
//# sourceMappingURL=transform-config.d.ts.map