import { get, getWithDefault, isObject } from "@chakra-ui/utils";
export function hasTheme(props) {
    return Boolean(isObject(props) && props.theme);
}
export var determineTheme = function (props) {
    return hasTheme(props) ? props.theme : props;
};
export function transformWithConfig(theme, value, config) {
    if (!config)
        return value;
    var scale = get(theme, config.scale, config.fallbackScale);
    if (config.transform) {
        return config.transform(value, scale);
    }
    return getWithDefault(value, scale);
}
//# sourceMappingURL=css.utils.js.map