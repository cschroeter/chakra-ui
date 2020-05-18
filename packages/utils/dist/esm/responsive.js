import { isArray, isObject } from "./assertion";
import { objectKeys } from "./object";
export function mapResponsive(prop, mapper) {
    if (isArray(prop)) {
        return prop.map(mapper);
    }
    if (isObject(prop)) {
        return objectKeys(prop).reduce(function (result, key) {
            result[key] = mapper(prop[key]);
            return result;
        }, {});
    }
    if (prop != null) {
        return mapper(prop);
    }
    return null;
}
//# sourceMappingURL=responsive.js.map