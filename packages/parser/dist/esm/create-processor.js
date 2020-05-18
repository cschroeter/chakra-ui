import { isNull, isArray, isObject, merge, getWithDefault, } from "@chakra-ui/utils";
import { sort, assignArray, assignObject, getMediaQuery } from "./utils";
/**
 * The engine that transforms a style props to
 * actual CSS style objects.
 *
 * @param breakpoints - the breakpoint object from theme
 */
export function createProcessor(breakpoints) {
    var styles = {};
    var queries = getMediaQuery(breakpoints);
    return {
        apply: function (options) {
            var property = options.property, _a = options.transform, transform = _a === void 0 ? getWithDefault : _a, value = options.value, scale = options.scale, props = options.props;
            var assign = function (objectOrArray) {
                return transform(objectOrArray, scale, props);
            };
            if (isNull(value))
                return;
            if (isArray(value)) {
                var style = assignArray({
                    values: value,
                    prop: property,
                    transform: assign,
                    mediaQueries: queries.asArray,
                });
                styles = merge(styles, style);
                return;
            }
            if (isObject(value)) {
                var style = assignObject({
                    values: value,
                    prop: property,
                    transform: assign,
                    mediaQueries: queries.asObject,
                });
                styles = merge(styles, style);
                return;
            }
            if (property) {
                styles[property] = assign(value);
                return;
            }
            styles = merge(styles, assign(value));
        },
        value: function () { return sort(styles); },
    };
}
//# sourceMappingURL=create-processor.js.map