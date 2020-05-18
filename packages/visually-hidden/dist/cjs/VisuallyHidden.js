"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisuallyHiddenInput = exports.VisuallyHidden = exports.visuallyHiddenStyle = void 0;
var system_1 = require("@chakra-ui/system");
/**
 * Styles to visually hide an element
 * but make it accessible to screen-readers
 */
exports.visuallyHiddenStyle = {
    border: "0px",
    clip: "rect(0px, 0px, 0px, 0px)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
};
/**
 * Visually hidden component used to hide
 * elements on screen
 */
exports.VisuallyHidden = system_1.chakra("span", {
    attrs: { style: exports.visuallyHiddenStyle },
});
/**
 * Visually hidden input component for designing
 * custom input components using the html `input`
 * as a proxy
 */
exports.VisuallyHiddenInput = system_1.chakra("input", {
    attrs: { style: exports.visuallyHiddenStyle },
});
exports.default = exports.VisuallyHidden;
//# sourceMappingURL=VisuallyHidden.js.map