"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = void 0;
var react_1 = require("react");
var utils_1 = require("@chakra-ui/utils");
var useSafeLayoutEffect_1 = require("./useSafeLayoutEffect");
var isSupported = function (api) { return utils_1.isBrowser && api in window; };
/**
 * React hook that tracks state of a CSS media query
 *
 * @param query the media query to match
 */
function useMediaQuery(query) {
    var _a = react_1.useState(function () {
        if (!isSupported("matchMedia"))
            return false;
        return !!window.matchMedia(query).matches;
    }), matches = _a[0], setMatches = _a[1];
    useSafeLayoutEffect_1.useSafeLayoutEffect(function () {
        if (!isSupported("matchMedia"))
            return;
        var mediaQueryList = window.matchMedia(query);
        var listener = function () { return setMatches(!!mediaQueryList.matches); };
        mediaQueryList.addListener(listener);
        listener();
        return function () {
            mediaQueryList.removeListener(listener);
        };
    }, [query]);
    return [matches, setMatches];
}
exports.useMediaQuery = useMediaQuery;
//# sourceMappingURL=useMediaQuery.js.map