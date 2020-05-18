import { CSSObject } from "@chakra-ui/css";
import { ChakraOptions, ModifierStyleProps } from "./types";
declare type Props = ModifierStyleProps & {
    colorMode?: string;
};
/**
 * Computes the styles for a component based on the
 * defined theme key
 *
 * @param props the component props object
 * @param options the component's options
 */
export declare function getComponentStyles(props: Props, options?: ChakraOptions): CSSObject | undefined;
export {};
//# sourceMappingURL=get-component-style.d.ts.map