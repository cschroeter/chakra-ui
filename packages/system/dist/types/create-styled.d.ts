import { As } from "@chakra-ui/utils";
import { ChakraComponent, Options } from "./system.types";
declare function createStyled<T extends As, P = {}>(component: T, options?: Options<T, P>): (...interpolations: any[]) => ChakraComponent<T, P>;
export default createStyled;
//# sourceMappingURL=create-styled.d.ts.map