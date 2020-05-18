import { __assign, __rest } from "tslib";
import { Modal, ModalContent, } from "@chakra-ui/modal";
import * as React from "react";
export function AlertDialog(props) {
    var leastDestructiveRef = props.leastDestructiveRef, rest = __rest(props, ["leastDestructiveRef"]);
    return React.createElement(Modal, __assign({}, rest, { initialFocusRef: leastDestructiveRef }));
}
export var AlertDialogContent = React.forwardRef(function (props, ref) { return (React.createElement(ModalContent, __assign({ ref: ref, role: "alertdialog" }, props))); });
export { ModalBody as AlertDialogBody, ModalCloseButton as AlertDialogCloseButton, ModalFooter as AlertDialogFooter, ModalHeader as AlertDialogHeader, ModalOverlay as AlertDialogOverlay, } from "@chakra-ui/modal";
//# sourceMappingURL=AlertDialog.js.map