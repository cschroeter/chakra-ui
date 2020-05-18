import { ChakraOptions, ModifierStyleProps } from "./types";
/**
 * Gets the modifier styles for a component.
 * Chakra UI assumes that most component will need
 * only `variants` and `sizes` modifiers
 *
 * @param props the props object (or component props)
 * @param options the component's theming options
 * @param modifiers modifiers we support (for now, it's just variant, and size)
 */
export declare function getModifierStyles(props: ModifierStyleProps, options?: ChakraOptions, modifiers?: ("sizes" | "variants")[]): Record<string, any> | undefined;
//# sourceMappingURL=get-modifier-style.d.ts.map