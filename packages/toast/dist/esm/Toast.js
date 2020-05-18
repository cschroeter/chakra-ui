import { __assign } from "tslib";
import { useTimeout } from "@chakra-ui/hooks";
import { Transition } from "@chakra-ui/transition";
import { isFunction } from "@chakra-ui/utils";
import ReachAlert from "@reach/alert";
import { useRect } from "@reach/rect";
import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { getToastStyle } from "./Toast.utils";
export function Toast(props) {
    var _a;
    var id = props.id, message = props.message, onCloseComplete = props.onCloseComplete, onRequestRemove = props.onRequestRemove, _b = props.requestClose, requestClose = _b === void 0 ? false : _b, _c = props.position, position = _c === void 0 ? "bottom" : _c, _d = props.duration, duration = _d === void 0 ? 5000 : _d;
    var ref = useRef(null);
    var _e = useState(duration), delay = _e[0], setDelay = _e[1];
    var _f = useState(true), show = _f[0], setShow = _f[1];
    useEffect(function () {
        setDelay(duration);
    }, [duration]);
    var onMouseEnter = function () {
        setDelay(null);
    };
    var onMouseLeave = function () {
        setDelay(duration);
    };
    var onExited = function () {
        if (!show) {
            onRequestRemove();
        }
        onCloseComplete === null || onCloseComplete === void 0 ? void 0 : onCloseComplete();
    };
    var close = function () {
        setShow(false);
    };
    useEffect(function () {
        if (requestClose) {
            setShow(false);
        }
    }, [requestClose]);
    useTimeout(close, delay);
    var style = useMemo(function () { return getToastStyle(position); }, [position]);
    var rect = useRect(ref);
    var height = (_a = rect === null || rect === void 0 ? void 0 : rect.height) !== null && _a !== void 0 ? _a : 0;
    var isTop = position.includes("top");
    /**
     * @todo
     *
     * Make it possible to configure this toast transition
     * from `theme.transitions.toast`
     */
    var y = isTop ? "-" + height + "px" : 0;
    var styles = {
        init: {
            opacity: 0,
            height: 0,
            transform: "translateY(" + y + ") scale(1)",
        },
        entered: {
            opacity: 1,
            height: height,
            transform: "translateY(0) scale(1)",
        },
        exiting: {
            opacity: 0,
            height: 0,
            transform: "translateY(0) scale(0.9)",
        },
    };
    return (React.createElement(Transition, { styles: styles, 
        /**
         * We use the `easeInOutQuint` from https://easings.net/en#
         */
        transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)", in: show, onExited: onExited }, function (styles) { return (React.createElement("div", { "data-toast": "", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, style: __assign(__assign({ willChange: "transform, height, opacity" }, style), styles) },
        React.createElement("div", { ref: ref, "data-toast-inner": "", style: { pointerEvents: "auto", maxWidth: 560, minWidth: 300 } },
            React.createElement(ReachAlert, null, isFunction(message) ? message({ id: id, onClose: close }) : message)))); }));
}
//# sourceMappingURL=Toast.js.map