import { useState } from "react";
import { isBrowser } from "@chakra-ui/utils";
import { useSafeLayoutEffect } from "./useSafeLayoutEffect";
var isSupported = function (api) { return isBrowser && api in window; };
/**
 * React hook that tracks state of a CSS media query
 *
 * @param query the media query to match
 */
export function useMediaQuery(query) {
    var _a = useState(function () {
        if (!isSupported("matchMedia"))
            return false;
        return !!window.matchMedia(query).matches;
    }), matches = _a[0], setMatches = _a[1];
    useSafeLayoutEffect(function () {
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
//# sourceMappingURL=useMediaQuery.js.map