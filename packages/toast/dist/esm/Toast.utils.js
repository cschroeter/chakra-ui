import { objectKeys } from "@chakra-ui/utils";
/**
 * Given an array of toasts for a specific position.
 * It returns the toast that matches the `id` passed
 */
export function findById(arr, id) {
    return arr.find(function (toast) { return toast.id === id; });
}
/**
 * Given the toast manager state, finds the toast that matches
 * the id and return it's position and index
 */
export function findToast(toasts, id) {
    var position = getToastPosition(toasts, id);
    var index = position
        ? toasts[position].findIndex(function (toast) { return toast.id == id; })
        : -1;
    return {
        position: position,
        index: index,
    };
}
/**
 * Given the toast manager state, finds the position of the toast that
 * matches the `id`
 */
export function getToastPosition(toasts, id) {
    var position;
    objectKeys(toasts).forEach(function (pos) {
        var found = findById(toasts[pos], id);
        if (found)
            position = pos;
    });
    return position;
}
/**
 * Given the toast manager state, checks if a specific toast is
 * still in the state, which means it's still visible on screen.
 */
export function isVisible(toasts, id) {
    var found;
    Object.values(toasts).forEach(function (toasts) {
        found = toasts.find(function (toast) { return toast.id === id; });
    });
    return !!found;
}
/**
 * Get's the styles to be applied to a toast's container
 * based on it's position in the manager
 */
export function getToastStyle(position) {
    var style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };
    if (position.includes("right")) {
        style.alignItems = "flex-end";
    }
    else if (position.includes("left")) {
        style.alignItems = "flex-start";
    }
    return style;
}
//# sourceMappingURL=Toast.utils.js.map