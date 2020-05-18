import { useState, useCallback } from "react";
import { useControllableProp } from "./useControllable";
import { usePrevious } from "./usePrevious";
export function useDisclosure(props) {
    if (props === void 0) { props = {}; }
    var onCloseProp = props.onClose, onOpenProp = props.onOpen;
    var _a = useState(props.defaultIsOpen || false), isOpenState = _a[0], setIsOpen = _a[1];
    var _b = useControllableProp(props.isOpen, isOpenState), isControlled = _b[0], isOpen = _b[1];
    var prevIsOpen = usePrevious(isOpen);
    var onClose = useCallback(function () {
        if (!isControlled) {
            setIsOpen(false);
        }
        onCloseProp === null || onCloseProp === void 0 ? void 0 : onCloseProp();
    }, [isControlled, onCloseProp]);
    var onOpen = useCallback(function () {
        if (!isControlled) {
            setIsOpen(true);
        }
        onOpenProp === null || onOpenProp === void 0 ? void 0 : onOpenProp();
    }, [isControlled, onOpenProp]);
    var onToggle = useCallback(function () {
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
//# sourceMappingURL=useDisclosure.js.map