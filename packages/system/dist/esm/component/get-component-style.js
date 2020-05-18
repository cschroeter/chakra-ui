import { merge, isNotEmptyObject } from "@chakra-ui/utils";
import { css } from "@chakra-ui/css";
import { getBaseStyle } from "./get-base-style";
import { getModifierStyles } from "./get-modifier-style";
/**
 * Computes the styles for a component based on the
 * defined theme key
 *
 * @param props the component props object
 * @param options the component's options
 */
export function getComponentStyles(props, options) {
    var styles = {};
    if (!options || !props.theme)
        return undefined;
    var baseStyleObject = getBaseStyle(props, options);
    if (isNotEmptyObject(baseStyleObject)) {
        var baseStyle = css(baseStyleObject)(props.theme);
        styles = merge(styles, baseStyle);
    }
    var modiferStyleObject = getModifierStyles(props, options);
    if (isNotEmptyObject(modiferStyleObject)) {
        var modiferStyle = css(modiferStyleObject)(props.theme);
        styles = merge(styles, modiferStyle);
    }
    return styles;
}
//# sourceMappingURL=get-component-style.js.map