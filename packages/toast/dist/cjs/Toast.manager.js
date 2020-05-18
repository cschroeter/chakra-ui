"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastManager = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Toast_1 = require("./Toast");
var Toast_utils_1 = require("./Toast.utils");
/**
 * Manages the creation, and removal of toasts
 * across all corners ("top", "bottom", etc.)
 */
var ToastManager = /** @class */ (function (_super) {
    tslib_1.__extends(ToastManager, _super);
    function ToastManager(props) {
        var _this = _super.call(this, props) || this;
        /**
         * State to track all the toast across all positions
         */
        _this.state = {
            top: [],
            "top-left": [],
            "top-right": [],
            "bottom-left": [],
            bottom: [],
            "bottom-right": [],
        };
        /**
         * Function to actually create a toast and add it
         * to state at the specified position
         */
        _this.notify = function (message, options) {
            var toast = _this.createToast(message, options);
            var position = toast.position, id = toast.id;
            _this.setState(function (prevToasts) {
                var _a;
                /**
                 * - If the toast is positioned at the top edges, the
                 * recent toast stacks on top of the other toasts.
                 *
                 * - If the toast is positioned at the bottom edges, the recent
                 * toast stacks below the other toasts.
                 */
                var isTop = position.includes("top");
                return tslib_1.__assign(tslib_1.__assign({}, prevToasts), (_a = {}, _a[position] = isTop
                    ? tslib_1.__spreadArrays([toast], prevToasts[position]) : tslib_1.__spreadArrays(prevToasts[position], [toast]), _a));
            });
            return id;
        };
        /**
         * Update a specific toast with new options based on the
         * passed `id`
         */
        _this.updateToast = function (id, options) {
            _this.setState(function (prevState) {
                var nextState = tslib_1.__assign({}, prevState);
                var _a = Toast_utils_1.findToast(nextState, id), position = _a.position, index = _a.index;
                if (position && index !== -1) {
                    nextState[position][index] = tslib_1.__assign(tslib_1.__assign({}, nextState[position][index]), options);
                }
                return nextState;
            });
        };
        /**
         * Close all toasts at once
         */
        _this.closeAll = function () {
            utils_1.objectKeys(_this.state).forEach(function (position) {
                _this.state[position].forEach(function (toast) {
                    _this.closeToast(toast.id);
                });
            });
        };
        /**
         * Create properties for a new toast
         */
        _this.createToast = function (message, options) {
            var _a, _b;
            var id = (_a = options.id) !== null && _a !== void 0 ? _a : ++ToastManager.counter;
            var position = (_b = options.position) !== null && _b !== void 0 ? _b : "top";
            return {
                id: id,
                message: message,
                position: position,
                duration: options.duration,
                onCloseComplete: options.onCloseComplete,
                onRequestRemove: function () { return _this.removeToast(String(id), position); },
                status: options.status,
            };
        };
        /**
         * Requests to close a toast based on it's id and position
         */
        _this.closeToast = function (id) {
            _this.setState(function (prevState) {
                var _a;
                var position = Toast_utils_1.getToastPosition(prevState, id);
                if (!position)
                    return prevState;
                return tslib_1.__assign(tslib_1.__assign({}, prevState), (_a = {}, _a[position] = prevState[position].map(function (toast) { return (tslib_1.__assign(tslib_1.__assign({}, toast), { requestClose: toast.id == id })); }), _a));
            });
        };
        /**
         * Delete a toast record at it's position
         */
        _this.removeToast = function (id, position) {
            _this.setState(function (prevState) {
                var _a;
                return tslib_1.__assign(tslib_1.__assign({}, prevState), (_a = {}, _a[position] = prevState[position].filter(function (toast) { return toast.id != id; }), _a));
            });
        };
        _this.isVisible = function (id) {
            var position = Toast_utils_1.findToast(_this.state, id).position;
            return Boolean(position);
        };
        /**
         * Compute the style of a toast based on it's position
         */
        _this.getStyle = function (position) {
            var style = {
                position: "fixed",
                zIndex: 5500,
                pointerEvents: "none",
            };
            if (position === "top" || position === "bottom") {
                style.margin = "0 auto";
                style.textAlign = "center";
            }
            if (position.includes("top")) {
                style.top = 0;
            }
            if (position.includes("bottom")) {
                style.bottom = 0;
            }
            if (!position.includes("left")) {
                style.right = 0;
            }
            if (!position.includes("right")) {
                style.left = 0;
            }
            return style;
        };
        var methods = {
            notify: _this.notify,
            closeAll: _this.closeAll,
            close: _this.closeToast,
            update: _this.updateToast,
            isActive: _this.isVisible,
        };
        props.notify(methods);
        return _this;
    }
    ToastManager.prototype.render = function () {
        var _this = this;
        return utils_1.objectKeys(this.state).map(function (position) {
            var toasts = _this.state[position];
            return (React.createElement("span", { key: position, id: "chakra-toast-manager-" + position, style: _this.getStyle(position) }, toasts.map(function (toast) { return (React.createElement(Toast_1.Toast, tslib_1.__assign({ key: toast.id }, toast))); })));
        });
    };
    /**
     * Static id counter to create unique ids
     * for each toast
     */
    ToastManager.counter = 0;
    return ToastManager;
}(React.Component));
exports.ToastManager = ToastManager;
//# sourceMappingURL=Toast.manager.js.map