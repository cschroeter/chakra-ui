import * as CSS from "csstype";
import { Dict } from "@chakra-ui/utils";
import { Prop } from "./utils";
interface Options {
    /**
     * The CSS property the value maps to
     */
    property: keyof CSS.Properties;
    /**
     * The responsive value
     */
    value?: Prop<string | number>;
    /**
     * Function to transform the value
     *
     * @param value the value object or array
     * @param scale the theme key
     * @param props the prop object that includes the theme
     */
    transform?: (value: any, scale: any, props?: any) => any;
    /**
     * The theme scale (raw values) to use
     */
    scale?: string;
    /**
     * The props object that includes the theme.
     */
    props?: any;
}
/**
 * The engine that transforms a style props to
 * actual CSS style objects.
 *
 * @param breakpoints - the breakpoint object from theme
 */
export declare function createProcessor(breakpoints: Dict): {
    apply(options: Options): void;
    value: () => Record<string, any>;
};
export {};
//# sourceMappingURL=create-processor.d.ts.map