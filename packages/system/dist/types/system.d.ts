import { As, ChakraComponent, Options } from "./system.types";
import { DOMElements } from "./system.utils";
declare type ChakraJSXElements = {
    [Tag in DOMElements]: ChakraComponent<Tag, {}>;
};
declare type CreateChakraComponent = {
    /**
     * The styled function and object that allows to create a
     * functional component that can receive chakra's style props.
     *
     * @param component - The base component or tag to render
     * @param baseStyle - The initial styles to apply (accepts chakra styles)
     * @param attrs - The initial props to the component (valid html or component props)
     */
    <T extends As, P = {}>(component: T, options?: Options<T, P>): ChakraComponent<T, P>;
};
export declare const chakra: CreateChakraComponent & ChakraJSXElements;
export {};
//# sourceMappingURL=system.d.ts.map