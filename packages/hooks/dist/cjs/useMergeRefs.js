"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMergeRefs = exports.assignRef = void 0;
var tslib_1 = require("tslib");
/* eslint-disable react-hooks/exhaustive-deps */
var React = tslib_1.__importStar(require("react"));
function assignRef(ref, value) {
    if (ref == null)
        return;
    if (typeof ref === "function") {
        ref(value);
    }
    else {
        try {
            ;
            ref.current = value;
        }
        catch (error) {
            throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
        }
    }
}
exports.assignRef = assignRef;
/**
 * React hook that merges react refs into a single memoized function
 *
 * @example
 * import React from "react";
 * import { useMergeRefs } from `@chakra-ui/hooks`;
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useMergeRefs(internalRef, ref)} />;
 * });
 */
function useMergeRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return React.useMemo(function () {
        if (refs.every(function (ref) { return ref == null; })) {
            return null;
        }
        return function (node) {
            refs.forEach(function (ref) {
                if (ref)
                    assignRef(ref, node);
            });
        };
    }, refs);
}
exports.useMergeRefs = useMergeRefs;
//# sourceMappingURL=useMergeRefs.js.map