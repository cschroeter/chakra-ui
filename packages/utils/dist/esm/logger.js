import { __DEV__ } from "./assertion";
export function warn(options) {
    if (options.condition && __DEV__) {
        console.warn(options.message);
    }
}
export function error(options) {
    if (options.condition && __DEV__) {
        console.error(options.message);
    }
}
//# sourceMappingURL=logger.js.map