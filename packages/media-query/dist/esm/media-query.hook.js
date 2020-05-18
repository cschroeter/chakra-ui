import { __assign, __rest } from "tslib";
import { useTheme } from "@chakra-ui/system";
import { isNumber, objectKeys } from "@chakra-ui/utils";
import { useCallback, useEffect, useMemo, useState } from "react";
/**
 * useBreakpoint
 *
 * React hook for getting the current responsive media breakpoint.
 *
 * @param defaultBreakpoint default breakpoint name
 * (in non-window environments like SSR)
 *
 * For SSR, you can use a package like [is-mobile](https://github.com/juliangruber/is-mobile)
 * to get the default breakpoint value from the user-agent
 */
export function useBreakpoint(defaultBreakpoint) {
    var theme = useTheme();
    var breakpoints = theme.breakpoints;
    var mediaQueries = useMemo(function () { return createMediaQueries(__assign({ base: "0px" }, breakpoints)); }, [breakpoints]);
    var _a = useState(function () {
        if (!defaultBreakpoint)
            return undefined;
        var mediaQuery = mediaQueries.find(function (query) { return query.breakpoint === defaultBreakpoint; });
        if (mediaQuery) {
            var query = mediaQuery.query, breakpoint = __rest(mediaQuery, ["query"]);
            return breakpoint;
        }
        return undefined;
    }), currentBreakpoint = _a[0], setCurrentBreakpoint = _a[1];
    var current = currentBreakpoint === null || currentBreakpoint === void 0 ? void 0 : currentBreakpoint.breakpoint;
    var update = useCallback(function (query, breakpoint) {
        if (query.matches && current !== breakpoint.breakpoint) {
            setCurrentBreakpoint(breakpoint);
        }
    }, [current]);
    useEffect(function () {
        var listeners = [];
        mediaQueries.forEach(function (_a) {
            var query = _a.query, breakpoint = __rest(_a, ["query"]);
            var mediaQuery = window.matchMedia(query);
            // trigger an initial update to determine media query
            update(mediaQuery, breakpoint);
            var handleChange = function () {
                update(mediaQuery, breakpoint);
            };
            // add media query-listender
            mediaQuery.addListener(handleChange);
            // push the media query list handleChange
            // so we can use it to remove Listener
            listeners.push({ mediaQuery: mediaQuery, handleChange: handleChange });
            return function () {
                // clean up 1
                mediaQuery.removeListener(handleChange);
            };
        });
        return function () {
            // clean up 2: for safety
            listeners.forEach(function (_a) {
                var mediaQuery = _a.mediaQuery, handleChange = _a.handleChange;
                mediaQuery.removeListener(handleChange);
            });
        };
    }, [mediaQueries, breakpoints, update]);
    return currentBreakpoint === null || currentBreakpoint === void 0 ? void 0 : currentBreakpoint.breakpoint;
}
var toMediaString = function (val) { return (isNumber(val) ? val + "px" : val); };
/**
 * Create a media query string from the breakpoints,
 * using a combination of `min-width` and `max-width`.
 *
 * @param breakpoints the breakpoint object in theme
 */
var createMediaQueries = function (breakpoints) {
    // sort the breakpoints in descending order
    var sorted = objectKeys(breakpoints).sort(function (a, b) { return parseInt(breakpoints[b]) - parseInt(breakpoints[a]); });
    // create a min-max media query string
    return sorted.map(function (breakpoint, index) {
        var minWidth = breakpoints[breakpoint];
        var next = sorted[index - 1];
        var maxWidth = next ? breakpoints[next] : undefined;
        var query = "";
        if (parseInt(minWidth) >= 0) {
            query = "(min-width: " + toMediaString(minWidth) + ")";
        }
        if (maxWidth) {
            if (query)
                query += " and ";
            query += "(max-width: " + toMediaString(maxWidth) + ")";
        }
        var mediaQuery = {
            breakpoint: breakpoint,
            maxWidth: maxWidth,
            minWidth: minWidth,
            query: query,
        };
        return mediaQuery;
    });
};
//# sourceMappingURL=media-query.hook.js.map