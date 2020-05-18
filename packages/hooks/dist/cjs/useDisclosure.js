"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDisclosure = void 0;
var react_1 = require("react");
var useControllable_1 = require("./useControllable");
var usePrevious_1 = require("./usePrevious");
function useDisclosure(props) {
    if (props === void 0) { props = {}; }
    var onCloseProp = props.onClose, onOpenProp = props.onOpen;
    var _a = react_1.useState(props.defaultIsOpen || false), isOpenState = _a[0], setIsOpen = _a[1];
    var _b = useControllable_1.useControllableProp(props.isOpen, isOpenState), isControlled = _b[0], isOpen = _b[1];
    var prevIsOpen = usePrevious_1.usePrevious(isOpen);
    var onClose = react_1.useCallback(function () {
        if (!isControlled) {
            setIsOpen(false);
        }
        onCloseProp === null || onCloseProp === void 0 ? void 0 : onCloseProp();
    }, [isControlled, onCloseProp]);
    var onOpen = react_1.useCallback(function () {
        if (!isControlled) {
            setIsOpen(true);
        }
        onOpenProp === null || onOpenProp === void 0 ? void 0 : onOpenProp();
    }, [isControlled, onOpenProp]);
    var onToggle = react_1.useCallback(function () {
        var action = isOpen ? onClose : onOpen;
        action();
    }, [isOpen, onOpen, onClose]);
    return {
        isOpen: !!isOpen,
        prevIsOpen: !!prevIsOpen,
        onOpen: onOpen,
        onClose: onClose,
        onToggle: onToggle,
        isControlled: isControlled,
    };
}
exports.useDisclosure = useDisclosure;
//# sourceMappingURL=useDisclosure.js.map