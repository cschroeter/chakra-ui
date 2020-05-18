"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModalManager = exports.manager = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/**
 * Proper state management for nested modals.
 * Simplified, but inspired by material-ui's ModalManager class.
 */
var ModalManager = /** @class */ (function () {
    function ModalManager() {
        this.modals = [];
    }
    ModalManager.prototype.add = function (modal) {
        this.modals.push(modal);
    };
    ModalManager.prototype.remove = function (modal) {
        this.modals = this.modals.filter(function (_modal) { return _modal !== modal; });
    };
    ModalManager.prototype.isTopModal = function (modal) {
        var topmostModal = this.modals[this.modals.length - 1];
        return topmostModal === modal;
    };
    return ModalManager;
}());
exports.manager = new ModalManager();
function useModalManager(ref, isOpen) {
    React.useEffect(function () {
        isOpen && exports.manager.add(ref);
        return function () {
            exports.manager.remove(ref);
        };
    }, [isOpen, ref]);
}
exports.useModalManager = useModalManager;
//# sourceMappingURL=Modal.manager.js.map