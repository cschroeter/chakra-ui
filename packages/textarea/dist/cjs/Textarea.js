"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
var tslib_1 = require("tslib");
var form_control_1 = require("@chakra-ui/form-control");
var system_1 = require("@chakra-ui/system");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var utils_1 = require("@chakra-ui/utils");
/**
 * Textarea - Theming
 *
 * To style the textarea component globally, change the styles in
 * `theme.components.Textarea`
 */
var StyledTextarea = system_1.chakra("textarea", {
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
exports.Textarea = react_1.forwardRef(function (props, ref) {
    var className = props.className, htmlProps = tslib_1.__rest(props, ["className"]);
    var fieldProps = form_control_1.useFormControl(htmlProps);
    var _className = utils_1.cx("chakra-textarea", className);
    return React.createElement(StyledTextarea, tslib_1.__assign({ className: _className, ref: ref }, fieldProps));
});
if (utils_1.__DEV__) {
    exports.Textarea.displayName = "Textarea";
}
//# sourceMappingURL=Textarea.js.map