"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBreakpoint = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var react_1 = require("react");
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
function useBreakpoint(defaultBreakpoint) {
    var theme = system_1.useTheme();
    var breakpoints = theme.breakpoints;
    var mediaQueries = react_1.useMemo(function () { return createMediaQueries(tslib_1.__assign({ base: "0px" }, breakpoints)); }, [breakpoints]);
    var _a = react_1.useState(function () {
        if (!defaultBreakpoint)
            return undefined;
        var mediaQuery = mediaQueries.find(function (query) { return query.breakpoint === defaultBreakpoint; });
        if (mediaQuery) {
            var query = mediaQuery.query, breakpoint = tslib_1.__rest(mediaQuery, ["query"]);
            return breakpoint;
        }
        return undefined;
    }), currentBreakpoint = _a[0], setCurrentBreakpoint = _a[1];
    var current = currentBreakpoint === null || currentBreakpoint === void 0 ? void 0 : currentBreakpoint.breakpoint;
    var update = react_1.useCallback(function (query, breakpoint) {
        if (query.matches && current !== breakpoint.breakpoint) {
            setCurrentBreakpoint(breakpoint);
        }
    }, [current]);
    react_1.useEffect(function () {
        var listeners = [];
        mediaQueries.forEach(function (_a) {
            var query = _a.query, breakpoint = tslib_1.__rest(_a, ["query"]);
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
exports.useBreakpoint = useBreakpoint;
var toMediaString = function (val) { return (utils_1.isNumber(val) ? val + "px" : val); };
/**
 * Create a media query string from the breakpoints,
 * using a combination of `min-width` and `max-width`.
 *
 * @param breakpoints the breakpoint object in theme
 */
var createMediaQueries = function (breakpoints) {
    // sort the breakpoints in descending order
    var sorted = utils_1.objectKeys(breakpoints).sort(function (a, b) { return parseInt(breakpoints[b]) - parseInt(breakpoints[a]); });
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