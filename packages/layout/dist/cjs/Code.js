"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * React component to render inline code snippets.
 *
 * @see Docs https://chakra-ui.com/code
 */
exports.Code = system_1.chakra("code", {
    themeKey: "Code",
    baseStyle: {
        display: "inline-block",
    },
    attrs: function (props) { return ({
        className: utils_1.cx("chakra-code", props.className),
    }); },
});
if (utils_1.__DEV__) {
    exports.Code.displayName = "Code";
}
//# sourceMappingURL=Code.js.map