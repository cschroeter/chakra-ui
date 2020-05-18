import { assignArray, getMediaQuery, parsePseudo, parser, } from "@chakra-ui/parser";
import { get, isArray, isObject, merge, runIfFn } from "@chakra-ui/utils";
import { determineTheme, transformWithConfig as tx, } from "./css.utils";
export var css = function (styleObject) { return function (props) {
    var theme = determineTheme(props);
    var computedStyles = {};
    var style = runIfFn(styleObject, theme);
    var styles = parsePseudo(style);
    var queries = getMediaQuery(theme.breakpoints);
    var responsive = function (prop, values, config) {
        return assignArray({
            mediaQueries: queries.asArray,
            prop: prop,
            values: values,
            transform: function (value) {
                return tx(theme, value, config);
            },
        });
    };
    var _loop_1 = function (key) {
        var valueOrFn = styles[key];
        var value = runIfFn(valueOrFn, theme);
        var config = parser.config[key];
        if (key === "apply") {
            var style_1 = css(get(theme, value))(theme);
            computedStyles = merge(computedStyles, style_1);
            return "continue";
        }
        if (isObject(value)) {
            var style_2 = tx(theme, value, config);
            computedStyles[key] = css(style_2)(theme);
            return "continue";
        }
        if (isArray(value)) {
            if (config === null || config === void 0 ? void 0 : config.properties) {
                config.properties.forEach(function (prop) {
                    var style = responsive(prop, value, config);
                    computedStyles = merge(computedStyles, style);
                });
                return "continue";
            }
            if (config === null || config === void 0 ? void 0 : config.property) {
                var style_3 = responsive(config.property, value, config);
                computedStyles = merge(computedStyles, style_3);
                return "continue";
            }
            if (config === true) {
                var style_4 = responsive(key, value, config);
                computedStyles = merge(computedStyles, style_4);
                return "continue";
            }
            /**
             * If no config exists and `value` is still an array
             * run it through `css` in-case it contains style props
             */
            if (isArray(value)) {
                var val = value.map(function (v) { return css(v)(theme); });
                var style_5 = responsive(key, val, config);
                computedStyles = merge(computedStyles, style_5);
                return "continue";
            }
        }
        if (config === null || config === void 0 ? void 0 : config.properties) {
            config.properties.forEach(function (prop) {
                computedStyles[prop] = tx(theme, value, config);
            });
            return "continue";
        }
        if (config === null || config === void 0 ? void 0 : config.property) {
            var style_6 = tx(theme, value, config);
            computedStyles[config.property] = style_6;
            return "continue";
        }
        computedStyles[key] = tx(theme, value, config);
    };
    for (var key in styles) {
        _loop_1(key);
    }
    return computedStyles;
}; };
//# sourceMappingURL=css.js.map