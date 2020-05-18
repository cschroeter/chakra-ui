import { __assign, __spreadArrays } from "tslib";
import * as React from "react";
import { createPopper } from "@popperjs/core";
import { getArrowStyles } from "./Popper.utils";
var isBrowser = typeof window !== "undefined";
var useSafeLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;
export function usePopper(props) {
    var _a = props.placement, initialPlacement = _a === void 0 ? "bottom" : _a, offsetProp = props.offset, _b = props.preventOverflow, preventOverflow = _b === void 0 ? true : _b, _c = props.fixed, fixed = _c === void 0 ? false : _c, _d = props.forceUpdate, forceUpdate = _d === void 0 ? true : _d, _e = props.flip, flip = _e === void 0 ? true : _e, _f = props.arrowSize, arrowSize = _f === void 0 ? 10 : _f, _g = props.gutter, gutter = _g === void 0 ? arrowSize : _g, _h = props.eventsEnabled, eventsEnabled = _h === void 0 ? true : _h, modifiers = props.modifiers;
    var popper = React.useRef(null);
    var referenceRef = React.useRef(null);
    var popoverRef = React.useRef(null);
    var arrowRef = React.useRef(null);
    var _j = React.useState(initialPlacement), originalPlacement = _j[0], place = _j[1];
    var _k = React.useState(initialPlacement), placement = _k[0], setPlacement = _k[1];
    var offset = React.useState(offsetProp || [0, gutter])[0];
    var _l = React.useState({}), popoverStyles = _l[0], setPopoverStyles = _l[1];
    var _m = React.useState({}), arrowStyles = _m[0], setArrowStyles = _m[1];
    var update = React.useCallback(function () {
        if (popper.current) {
            popper.current.forceUpdate();
            return true;
        }
        return false;
    }, []);
    var modifiersOverride = modifiers !== null && modifiers !== void 0 ? modifiers : [];
    useSafeLayoutEffect(function () {
        if (referenceRef.current && popoverRef.current) {
            popper.current = createPopper(referenceRef.current, popoverRef.current, {
                placement: originalPlacement,
                strategy: fixed ? "fixed" : "absolute",
                modifiers: __spreadArrays([
                    {
                        name: "eventListener",
                        phase: "write",
                        enabled: eventsEnabled,
                    },
                    {
                        name: "applyStyles",
                        enabled: false,
                    },
                    {
                        name: "flip",
                        enabled: flip,
                        options: { padding: 8 },
                    },
                    {
                        name: "computeStyles",
                        options: { gpuAcceleration: false, adaptive: false },
                    },
                    {
                        name: "offset",
                        options: { offset: offset },
                    },
                    {
                        name: "preventOverflow",
                        enabled: preventOverflow,
                        options: {
                            tetherOffset: function () { var _a; return ((_a = arrowRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0; },
                        },
                    },
                    {
                        name: "arrow",
                        enabled: Boolean(arrowRef.current),
                        options: { element: arrowRef.current },
                    },
                    {
                        name: "updateState",
                        phase: "write",
                        enabled: true,
                        fn: function (_a) {
                            var state = _a.state;
                            setPlacement(state.placement);
                            setPopoverStyles(state.styles.popper);
                            setArrowStyles(state.styles.arrow);
                        },
                    }
                ], modifiersOverride),
            });
        }
        return function () {
            if (popper.current) {
                popper.current.destroy();
                popper.current = null;
            }
        };
    }, [originalPlacement, fixed, forceUpdate, flip, offset, preventOverflow]);
    useSafeLayoutEffect(function () {
        requestAnimationFrame(function () {
            var _a;
            if (forceUpdate) {
                (_a = popper.current) === null || _a === void 0 ? void 0 : _a.forceUpdate();
            }
        });
    }, [forceUpdate]);
    var computedArrowStyles = __assign(__assign({}, arrowStyles), getArrowStyles(placement, arrowSize));
    return {
        popperInstance: popper.current,
        reference: {
            ref: referenceRef,
        },
        popper: {
            ref: popoverRef,
            style: popoverStyles,
        },
        arrow: {
            ref: arrowRef,
            style: computedArrowStyles,
        },
        update: update,
        placement: placement,
        place: place,
    };
}
//# sourceMappingURL=Popper.hook.js.map