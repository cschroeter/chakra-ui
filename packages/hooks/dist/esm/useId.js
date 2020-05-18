import { useId as useUID } from "@reach/auto-id";
function generatePrefix(prefix, id) {
    return prefix + "-" + id;
}
/**
 * Reack hook to generate unique id
 *
 * @param idProp the external id passed from the user
 * @param prefix prefix to append before the id
 */
export function useId(idProp, prefix) {
    var uuid = useUID();
    var id = idProp !== null && idProp !== void 0 ? idProp : uuid;
    var result = prefix ? generatePrefix(prefix, id) : id;
    return result;
}
/**
 * Reack hook to generate ids for use in compound components
 *
 * @param idProp the external id passed from the user
 * @param prefixes array of prefixes to use
 *
 * @example
 *
 * ```js
 * const [buttonId, menuId] = useIds("52", "button", "menu")
 *
 * // buttonId will be `button-52`
 * // menuId will be `menu-52`
 * ```
 */
export function useIds(idProp) {
    var prefixes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        prefixes[_i - 1] = arguments[_i];
    }
    var id = useId(idProp);
    var ids = prefixes.map(function (prefix) { return generatePrefix(prefix, id); });
    return ids;
}
//# sourceMappingURL=useId.js.map