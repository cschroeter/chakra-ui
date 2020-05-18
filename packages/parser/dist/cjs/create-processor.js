"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProcessor = void 0;
var utils_1 = require("@chakra-ui/utils");
var utils_2 = require("./utils");
/**
 * The engine that transforms a style props to
 * actual CSS style objects.
 *
 * @param breakpoints - the breakpoint object from theme
 */
function createProcessor(breakpoints) {
    var styles = {};
    var queries = utils_2.getMediaQuery(breakpoints);
    return {
        apply: function (options) {
            var property = options.property, _a = options.transform, transform = _a === void 0 ? utils_1.getWithDefault : _a, value = options.value, scale = options.scale, props = options.props;
            var assign = function (objectOrArray) {
                return transform(objectOrArray, scale, props);
            };
            if (utils_1.isNull(value))
                return;
            if (utils_1.isArray(value)) {
                var style = utils_2.assignArray({
                    values: value,
                    prop: property,
                    transform: assign,
                    mediaQueries: queries.asArray,
                });
                styles = utils_1.merge(styles, style);
                return;
            }
            if (utils_1.isObject(value)) {
                var style = utils_2.assignObject({
                    values: value,
                    prop: property,
                    transform: assign,
                    mediaQueries: queries.asObject,
                });
                styles = utils_1.merge(styles, style);
                return;
            }
            if (property) {
                styles[property] = assign(value);
                return;
            }
            styles = utils_1.merge(styles, assign(value));
        },
        value: function () { return utils_2.sort(styles); },
    };
}
exports.createProcessor = createProcessor;
//# sourceMappingURL=create-processor.js.map