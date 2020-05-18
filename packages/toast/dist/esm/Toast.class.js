import { isBrowser } from "@chakra-ui/utils";
import * as React from "react";
import { render } from "react-dom";
import { ToastManager } from "./Toast.manager";
// Toast's portal id
var portalId = "chakra-toast-portal";
var Toaster = /** @class */ (function () {
    /**
     * Initialize the manager and mount it in the DOM
     * inside the portal node
     */
    function Toaster() {
        var _this = this;
        var _a;
        this.bindFunctions = function (methods) {
            _this.createToast = methods.notify;
            _this.removeAll = methods.closeAll;
            _this.closeToast = methods.close;
            _this.updateToast = methods.update;
            _this.isToastActive = methods.isActive;
        };
        this.notify = function (message, options) {
            var _a;
            if (options === void 0) { options = {}; }
            return (_a = _this.createToast) === null || _a === void 0 ? void 0 : _a.call(_this, message, options);
        };
        this.close = function (id) {
            var _a;
            (_a = _this.closeToast) === null || _a === void 0 ? void 0 : _a.call(_this, id);
        };
        this.closeAll = function () {
            var _a;
            (_a = _this.removeAll) === null || _a === void 0 ? void 0 : _a.call(_this);
        };
        this.update = function (id, options) {
            var _a;
            if (options === void 0) { options = {}; }
            (_a = _this.updateToast) === null || _a === void 0 ? void 0 : _a.call(_this, id, options);
            window.scrollBy({ top: 10 });
            window.scrollBy({ top: -10 });
        };
        this.isActive = function (id) {
            var _a;
            return (_a = _this.isToastActive) === null || _a === void 0 ? void 0 : _a.call(_this, id);
        };
        if (!isBrowser)
            return;
        var portal;
        var existingPortal = document.getElementById(portalId);
        if (existingPortal) {
            portal = existingPortal;
        }
        else {
            var div = document.createElement("div");
            div.id = portalId;
            (_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(div);
            portal = div;
        }
        render(React.createElement(ToastManager, { notify: this.bindFunctions }), portal);
    }
    return Toaster;
}());
export var toast = new Toaster();
//# sourceMappingURL=Toast.class.js.map