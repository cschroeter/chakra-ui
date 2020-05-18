"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentDefaults = void 0;
var utils_1 = require("@chakra-ui/utils");
/**
 * Get the theming default props of a component from the theme
 */
function getComponentDefaults(theme, themeKey) {
    return utils_1.get(theme, "components." + themeKey + ".defaultProps");
}
exports.getComponentDefaults = getComponentDefaults;
//# sourceMappingURL=get-default-props.js.map