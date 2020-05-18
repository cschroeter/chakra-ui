import { parser as systemProps } from "@chakra-ui/parser";
import createStyled from "./create-styled";
import { applyProp, domElements, pseudoProps, truncateProp, layerStyleProp, } from "./system.utils";
function styled(component, options) {
    return createStyled(component, options)(systemProps, pseudoProps, applyProp(component), truncateProp, layerStyleProp);
}
export var chakra = styled;
domElements.forEach(function (tag) {
    //@ts-ignore
    chakra[tag] = chakra(tag);
});
//# sourceMappingURL=system.js.map