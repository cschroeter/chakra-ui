import { objectKeys } from "@chakra-ui/utils";
export function sort(obj) {
    var next = {};
    objectKeys(obj)
        .sort(function (a, b) {
        return a.localeCompare(b, undefined, {
            numeric: true,
            sensitivity: "base",
        });
    })
        .forEach(function (key) {
        next[key] = obj[key];
    });
    return next;
}
//# sourceMappingURL=sort-styles.js.map