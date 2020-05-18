import * as React from "react";
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
export var manager = new ModalManager();
export function useModalManager(ref, isOpen) {
    React.useEffect(function () {
        isOpen && manager.add(ref);
        return function () {
            manager.remove(ref);
        };
    }, [isOpen, ref]);
}
//# sourceMappingURL=Modal.manager.js.map