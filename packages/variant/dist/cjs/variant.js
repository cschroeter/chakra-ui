"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = exports.layerStyle = exports.textStyle = exports.createVariant = void 0;
var css_1 = require("@chakra-ui/css");
var utils_1 = require("@chakra-ui/utils");
var parser_1 = require("@chakra-ui/parser");
function createVariant(options) {
    var _a;
    var _b = options.values, values = _b === void 0 ? {} : _b, prop = options.prop, themeKey = options.themeKey;
    var sx = {
        transform: function (value, scale, props) {
            var _a;
            var styleObjectOrFn = (_a = utils_1.get(props.theme, scale + "." + value)) !== null && _a !== void 0 ? _a : utils_1.get(values, value);
            var styleObject = utils_1.runIfFn(styleObjectOrFn, props);
            return css_1.css(styleObject)(props.theme);
        },
        scale: themeKey,
        fallbackScale: values,
    };
    var config = (_a = {},
        _a[prop] = sx,
        _a);
    var parser = parser_1.createParser(config);
    return parser;
}
exports.createVariant = createVariant;
exports.textStyle = createVariant({
    themeKey: "textStyles",
    prop: "textStyle",
});
exports.layerStyle = createVariant({
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
    return utils_1.get(props.theme, "components." + options.themeKey + ".baseStyle");
}; };
function createComponent(options) {
    var parser = parser_1.combineParsers(sizes(options), variants(options));
    return function (props) {
        var _a, _b;
        var result = {};
        var defaults = utils_1.get(props.theme, "components." + options.themeKey + ".defaultProps");
        for (var _i = 0, _c = parser.propNames; _i < _c.length; _i++) {
            var prop = _c[_i];
            props[prop] = (_a = props[prop]) !== null && _a !== void 0 ? _a : defaults === null || defaults === void 0 ? void 0 : defaults[prop];
            var base = baseStyle(options)(props);
            var out = utils_1.merge(base !== null && base !== void 0 ? base : {}, (_b = parser(props)) !== null && _b !== void 0 ? _b : {});
            result = utils_1.merge(result, out);
        }
        return result;
    };
}
exports.createComponent = createComponent;
//# sourceMappingURL=variant.js.map