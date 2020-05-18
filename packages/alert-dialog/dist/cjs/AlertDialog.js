"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertDialogContent = exports.AlertDialog = void 0;
var tslib_1 = require("tslib");
var modal_1 = require("@chakra-ui/modal");
var React = tslib_1.__importStar(require("react"));
function AlertDialog(props) {
    var leastDestructiveRef = props.leastDestructiveRef, rest = tslib_1.__rest(props, ["leastDestructiveRef"]);
    return React.createElement(modal_1.Modal, tslib_1.__assign({}, rest, { initialFocusRef: leastDestructiveRef }));
}
exports.AlertDialog = AlertDialog;
exports.AlertDialogContent = React.forwardRef(function (props, ref) { return (React.createElement(modal_1.ModalContent, tslib_1.__assign({ ref: ref, role: "alertdialog" }, props))); });
var modal_2 = require("@chakra-ui/modal");
Object.defineProperty(exports, "AlertDialogBody", { enumerable: true, get: function () { return modal_2.ModalBody; } });
Object.defineProperty(exports, "AlertDialogCloseButton", { enumerable: true, get: function () { return modal_2.ModalCloseButton; } });
Object.defineProperty(exports, "AlertDialogFooter", { enumerable: true, get: function () { return modal_2.ModalFooter; } });
Object.defineProperty(exports, "AlertDialogHeader", { enumerable: true, get: function () { return modal_2.ModalHeader; } });
Object.defineProperty(exports, "AlertDialogOverlay", { enumerable: true, get: function () { return modal_2.ModalOverlay; } });
//# sourceMappingURL=AlertDialog.js.map