"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentStyles = void 0;
var utils_1 = require("@chakra-ui/utils");
var css_1 = require("@chakra-ui/css");
var get_base_style_1 = require("./get-base-style");
var get_modifier_style_1 = require("./get-modifier-style");
/**
 * Computes the styles for a component based on the
 * defined theme key
 *
 * @param props the component props object
 * @param options the component's options
 */
function getComponentStyles(props, options) {
    var styles = {};
    if (!options || !props.theme)
        return undefined;
    var baseStyleObject = get_base_style_1.getBaseStyle(props, options);
    if (utils_1.isNotEmptyObject(baseStyleObject)) {
        var baseStyle = css_1.css(baseStyleObject)(props.theme);
        styles = utils_1.merge(styles, baseStyle);
    }
    var modiferStyleObject = get_modifier_style_1.getModifierStyles(props, options);
    if (utils_1.isNotEmptyObject(modiferStyleObject)) {
        var modiferStyle = css_1.css(modiferStyleObject)(props.theme);
        styles = utils_1.merge(styles, modiferStyle);
    }
    return styles;
}
exports.getComponentStyles = getComponentStyles;
//# sourceMappingURL=get-component-style.js.map