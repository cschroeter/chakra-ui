import { __assign, __rest } from "tslib";
import { useFormControl } from "@chakra-ui/form-control";
import { chakra } from "@chakra-ui/system";
import * as React from "react";
import { forwardRef } from "react";
import { __DEV__, cx } from "@chakra-ui/utils";
/**
 * Textarea - Theming
 *
 * To style the textarea component globally, change the styles in
 * `theme.components.Textarea`
 */
var StyledTextarea = chakra("textarea", {
    themeKey: "Textarea",
    shouldForwardProp: function (prop) {
        return !["focusBorderColor", "errorBorderColor"].includes(prop);
    },
});
/**
 * Textarea
 *
 * React component used to enter an amount of text that's longer than a single line
 *
 * @see Docs https://chakra-ui.com/textarea
 */
export var Textarea = forwardRef(function (props, ref) {
    var className = props.className, htmlProps = __rest(props, ["className"]);
    var fieldProps = useFormControl(htmlProps);
    var _className = cx("chakra-textarea", className);
    return React.createElement(StyledTextarea, __assign({ className: _className, ref: ref }, fieldProps));
});
if (__DEV__) {
    Textarea.displayName = "Textarea";
}
//# sourceMappingURL=Textarea.js.map