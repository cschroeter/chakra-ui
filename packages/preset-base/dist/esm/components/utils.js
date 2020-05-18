export function mode(light, dark) {
    return function (props) { return (props.colorMode === "light" ? light : dark); };
}
export function orientation(horizontal, vertical) {
    return function (props) {
        return props.orientation === "horizontal" ? horizontal : vertical;
    };
}
export function getOrientationStyle(options) {
    var orientation = options.orientation, vertical = options.vertical, horizontal = options.horizontal;
    if (!orientation)
        return {};
    return orientation === "vertical" ? vertical : horizontal;
}
/**
 * Copies the styles from a component sizes or variants to another component
 * under a speicifed key.
 *
 * @param source The component theme object to copy
 * @param component The component string to copy to
 */
export function copy(source, component) {
    var result = {};
    var _loop_1 = function (k) {
        var _a;
        var value = source[k];
        if (typeof value === "function") {
            result[k] = function (props) {
                var _a;
                return (_a = {}, _a[component] = value(props), _a);
            };
        }
        else {
            result[k] = (_a = {}, _a[component] = value, _a);
        }
    };
    for (var k in source) {
        _loop_1(k);
    }
    return result;
}
//# sourceMappingURL=utils.js.map