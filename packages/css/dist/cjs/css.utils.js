"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformWithConfig = exports.determineTheme = exports.hasTheme = void 0;
var utils_1 = require("@chakra-ui/utils");
function hasTheme(props) {
    return Boolean(utils_1.isObject(props) && props.theme);
}
exports.hasTheme = hasTheme;
exports.determineTheme = function (props) {
    return hasTheme(props) ? props.theme : props;
};
function transformWithConfig(theme, value, config) {
    if (!config)
        return value;
    var scale = utils_1.get(theme, config.scale, config.fallbackScale);
    if (config.transform) {
        return config.transform(value, scale);
    }
    return utils_1.getWithDefault(value, scale);
}
exports.transformWithConfig = transformWithConfig;
//# sourceMappingURL=css.utils.js.map