import { css } from "@chakra-ui/css";
import { get, runIfFn, merge } from "@chakra-ui/utils";
import { createParser, combineParsers } from "@chakra-ui/parser";
export function createVariant(options) {
    var _a;
    var _b = options.values, values = _b === void 0 ? {} : _b, prop = options.prop, themeKey = options.themeKey;
    var sx = {
        transform: function (value, scale, props) {
            var _a;
            var styleObjectOrFn = (_a = get(props.theme, scale + "." + value)) !== null && _a !== void 0 ? _a : get(values, value);
            var styleObject = runIfFn(styleObjectOrFn, props);
            return css(styleObject)(props.theme);
        },
        scale: themeKey,
        fallbackScale: values,
    };
    var config = (_a = {},
        _a[prop] = sx,
        _a);
    var parser = createParser(config);
    return parser;
}
export var textStyle = createVariant({
    themeKey: "textStyles",
    prop: "textStyle",
});
export var layerStyle = createVariant({
    themeKey: "layerStyles",
    prop: "layerStyle",
});
var sizes = function (options) {
    return createVariant({
        prop: "size",
        themeKey: "components." + options.themeKey + ".sizes",
        values: options.sizes,
    });
};
var variants = function (options) {
    return createVariant({
        prop: "variant",
        themeKey: "components." + options.themeKey + ".variants",
        values: options.variants,
    });
};
var baseStyle = function (options) { return function (props) {
    return get(props.theme, "components." + options.themeKey + ".baseStyle");
}; };
export function createComponent(options) {
    var parser = combineParsers(sizes(options), variants(options));
    return function (props) {
        var _a, _b;
        var result = {};
        var defaults = get(props.theme, "components." + options.themeKey + ".defaultProps");
        for (var _i = 0, _c = parser.propNames; _i < _c.length; _i++) {
            var prop = _c[_i];
            props[prop] = (_a = props[prop]) !== null && _a !== void 0 ? _a : defaults === null || defaults === void 0 ? void 0 : defaults[prop];
            var base = baseStyle(options)(props);
            var out = merge(base !== null && base !== void 0 ? base : {}, (_b = parser(props)) !== null && _b !== void 0 ? _b : {});
            result = merge(result, out);
        }
        return result;
    };
}
//# sourceMappingURL=variant.js.map