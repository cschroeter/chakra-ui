import { chakra } from "@chakra-ui/system";
/**
 * Styles to visually hide an element
 * but make it accessible to screen-readers
 */
export var visuallyHiddenStyle = {
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
export var VisuallyHidden = chakra("span", {
    attrs: { style: visuallyHiddenStyle },
});
/**
 * Visually hidden input component for designing
 * custom input components using the html `input`
 * as a proxy
 */
export var VisuallyHiddenInput = chakra("input", {
    attrs: { style: visuallyHiddenStyle },
});
export default VisuallyHidden;
//# sourceMappingURL=VisuallyHidden.js.map