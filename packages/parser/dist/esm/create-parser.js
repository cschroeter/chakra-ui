import { __assign } from "tslib";
import { isArray, runIfFn, get } from "@chakra-ui/utils";
import { createProcessor } from "./create-processor";
import { transformConfig } from "./utils";
var fallbackBreakpoints = { sm: 400, md: 700, lg: 1000 };
export function createParser(styleConfig) {
    var cache = {};
    var parser = function (props) {
        var _a;
        /**
         * Get the breakpoints from theme or cache
         */
        cache.breakpoints = (_a = cache.breakpoints) !== null && _a !== void 0 ? _a : get(props.theme, "breakpoints", fallbackBreakpoints);
        /**
         * Create a style processor based on the breakpoints
         */
        var processor = createProcessor(cache.breakpoints);
        var _config = transformConfig(styleConfig, props.theme);
        var _loop_1 = function (prop) {
            /**
             * No need to process if prop is `theme`, or there's no config for prop
             */
            if (prop === "theme" || styleConfig[prop] == null)
                return "continue";
            var valueOrFn = props[prop];
            var value = runIfFn(valueOrFn, props.theme);
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
            if (isArray(config)) {
                config.forEach(function (opt) {
                    processor.apply(__assign(__assign({}, opt), { value: value, props: props }));
                });
            }
            else {
                var options = __assign(__assign({}, config), { value: value, props: props });
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
//# sourceMappingURL=create-parser.js.map