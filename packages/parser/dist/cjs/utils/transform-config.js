"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformConfig = void 0;
var utils_1 = require("@chakra-ui/utils");
/**
 * Transform an object of style props config to it's raw values.
 *
 * @param config the parser config object
 * @param theme the theme object
 */
function transformConfig(config, theme) {
    var result = {};
    utils_1.objectKeys(config).forEach(function (prop) {
        var propConfig = config[prop];
        /**
         * if a config doesn't exist for this style prop, return (no-op)
         */
        if (propConfig === null)
            return;
        /**
         * If prop's config is `true`, then it maps directly
         * to the css property.
         *
         * This is useful in providing a regular css property
         * as a style prop.
         */
        if (propConfig === true) {
            result[prop] = { property: prop };
            return;
        }
        var property = propConfig.property, properties = propConfig.properties, scale = propConfig.scale, transform = propConfig.transform, fallbackScale = propConfig.fallbackScale;
        var _scale = scale && utils_1.get(theme, scale, fallbackScale);
        if (property) {
            result[prop] = { property: property };
            if (transform) {
                result[prop]["transform"] = transform;
            }
            if (scale) {
                result[prop]["scale"] = _scale;
            }
            return;
        }
        if (properties) {
            result[prop] = properties.map(function (property) {
                var mapResult = { property: property };
                if (transform) {
                    mapResult["transform"] = transform;
                }
                if (scale) {
                    mapResult["scale"] = _scale;
                }
                return mapResult;
            });
            return;
        }
        result[prop] = propConfig;
    });
    return result;
}
exports.transformConfig = transformConfig;
//# sourceMappingURL=transform-config.js.map