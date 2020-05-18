"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var transition_1 = require("@chakra-ui/transition");
var utils_1 = require("@chakra-ui/utils");
var alert_1 = tslib_1.__importDefault(require("@reach/alert"));
var rect_1 = require("@reach/rect");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Toast_utils_1 = require("./Toast.utils");
function Toast(props) {
    var _a;
    var id = props.id, message = props.message, onCloseComplete = props.onCloseComplete, onRequestRemove = props.onRequestRemove, _b = props.requestClose, requestClose = _b === void 0 ? false : _b, _c = props.position, position = _c === void 0 ? "bottom" : _c, _d = props.duration, duration = _d === void 0 ? 5000 : _d;
    var ref = react_1.useRef(null);
    var _e = react_1.useState(duration), delay = _e[0], setDelay = _e[1];
    var _f = react_1.useState(true), show = _f[0], setShow = _f[1];
    react_1.useEffect(function () {
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
    react_1.useEffect(function () {
        if (requestClose) {
            setShow(false);
        }
    }, [requestClose]);
    hooks_1.useTimeout(close, delay);
    var style = react_1.useMemo(function () { return Toast_utils_1.getToastStyle(position); }, [position]);
    var rect = rect_1.useRect(ref);
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
    return (React.createElement(transition_1.Transition, { styles: styles, 
        /**
         * We use the `easeInOutQuint` from https://easings.net/en#
         */
        transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)", in: show, onExited: onExited }, function (styles) { return (React.createElement("div", { "data-toast": "", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, style: tslib_1.__assign(tslib_1.__assign({ willChange: "transform, height, opacity" }, style), styles) },
        React.createElement("div", { ref: ref, "data-toast-inner": "", style: { pointerEvents: "auto", maxWidth: 560, minWidth: 300 } },
            React.createElement(alert_1.default, null, utils_1.isFunction(message) ? message({ id: id, onClose: close }) : message)))); }));
}
exports.Toast = Toast;
//# sourceMappingURL=Toast.js.map