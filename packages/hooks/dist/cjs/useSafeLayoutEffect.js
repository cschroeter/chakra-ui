"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSafeLayoutEffect = void 0;
var react_1 = require("react");
var utils_1 = require("@chakra-ui/utils");
/**
 * useSafeLayoutEffect enables us to safely call `useLayoutEffect` on the browser
 * (for SSR reasons)
 *
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser.
 *
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 */
exports.useSafeLayoutEffect = utils_1.isBrowser ? react_1.useLayoutEffect : react_1.useEffect;
//# sourceMappingURL=useSafeLayoutEffect.js.map