"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParser = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var create_processor_1 = require("./create-processor");
var utils_2 = require("./utils");
var fallbackBreakpoints = { sm: 400, md: 700, lg: 1000 };
function createParser(styleConfig) {
    var cache = {};
    var parser = function (props) {
        var _a;
        /**
         * Get the breakpoints from theme or cache
         */
        cache.breakpoints = (_a = cache.breakpoints) !== null && _a !== void 0 ? _a : utils_1.get(props.theme, "breakpoints", fallbackBreakpoints);
        /**
         * Create a style processor based on the breakpoints
         */
        var processor = create_processor_1.createProcessor(cache.breakpoints);
        var _config = utils_2.transformConfig(styleConfig, props.theme);
        var _loop_1 = function (prop) {
            /**
             * No need to process if prop is `theme`, or there's no config for prop
             */
            if (prop === "theme" || styleConfig[prop] == null)
                return "continue";
            var valueOrFn = props[prop];
            var value = utils_1.runIfFn(valueOrFn, props.theme);
            /**
             * Get the config for the style prop
             */
            var config = _config[prop];
            /**
             * Apply each prop's config to get the generate style object.
             *
             * If it's an array config:
             *
             * @example
             * marginX = ["marginLeft", "marginRight"]
             *
             * We'll expand it to `marginLeft` and `marginRight`
             */
            if (utils_1.isArray(config)) {
                config.forEach(function (opt) {
                    processor.apply(tslib_1.__assign(tslib_1.__assign({}, opt), { value: value, props: props }));
                });
            }
            else {
                var options = tslib_1.__assign(tslib_1.__assign({}, config), { value: value, props: props });
                processor.apply(options);
            }
        };
        for (var prop in props) {
            _loop_1(prop);
        }
        return processor.value();
    };
    parser.config = styleConfig;
    parser.propNames = Object.keys(styleConfig);
    return parser;
}
exports.createParser = createParser;
//# sourceMappingURL=create-parser.js.map