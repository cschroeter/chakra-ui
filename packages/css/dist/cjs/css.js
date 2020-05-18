"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.css = void 0;
var parser_1 = require("@chakra-ui/parser");
var utils_1 = require("@chakra-ui/utils");
var css_utils_1 = require("./css.utils");
exports.css = function (styleObject) { return function (props) {
    var theme = css_utils_1.determineTheme(props);
    var computedStyles = {};
    var style = utils_1.runIfFn(styleObject, theme);
    var styles = parser_1.parsePseudo(style);
    var queries = parser_1.getMediaQuery(theme.breakpoints);
    var responsive = function (prop, values, config) {
        return parser_1.assignArray({
            mediaQueries: queries.asArray,
            prop: prop,
            values: values,
            transform: function (value) {
                return css_utils_1.transformWithConfig(theme, value, config);
            },
        });
    };
    var _loop_1 = function (key) {
        var valueOrFn = styles[key];
        var value = utils_1.runIfFn(valueOrFn, theme);
        var config = parser_1.parser.config[key];
        if (key === "apply") {
            var style_1 = exports.css(utils_1.get(theme, value))(theme);
            computedStyles = utils_1.merge(computedStyles, style_1);
            return "continue";
        }
        if (utils_1.isObject(value)) {
            var style_2 = css_utils_1.transformWithConfig(theme, value, config);
            computedStyles[key] = exports.css(style_2)(theme);
            return "continue";
        }
        if (utils_1.isArray(value)) {
            if (config === null || config === void 0 ? void 0 : config.properties) {
                config.properties.forEach(function (prop) {
                    var style = responsive(prop, value, config);
                    computedStyles = utils_1.merge(computedStyles, style);
                });
                return "continue";
            }
            if (config === null || config === void 0 ? void 0 : config.property) {
                var style_3 = responsive(config.property, value, config);
                computedStyles = utils_1.merge(computedStyles, style_3);
                return "continue";
            }
            if (config === true) {
                var style_4 = responsive(key, value, config);
                computedStyles = utils_1.merge(computedStyles, style_4);
                return "continue";
            }
            /**
             * If no config exists and `value` is still an array
             * run it through `css` in-case it contains style props
             */
            if (utils_1.isArray(value)) {
                var val = value.map(function (v) { return exports.css(v)(theme); });
                var style_5 = responsive(key, val, config);
                computedStyles = utils_1.merge(computedStyles, style_5);
                return "continue";
            }
        }
        if (config === null || config === void 0 ? void 0 : config.properties) {
            config.properties.forEach(function (prop) {
                computedStyles[prop] = css_utils_1.transformWithConfig(theme, value, config);
            });
            return "continue";
        }
        if (config === null || config === void 0 ? void 0 : config.property) {
            var style_6 = css_utils_1.transformWithConfig(theme, value, config);
            computedStyles[config.property] = style_6;
            return "continue";
        }
        computedStyles[key] = css_utils_1.transformWithConfig(theme, value, config);
    };
    for (var key in styles) {
        _loop_1(key);
    }
    return computedStyles;
}; };
//# sourceMappingURL=css.js.map