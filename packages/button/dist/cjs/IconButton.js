"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var Button_1 = require("./Button");
var react_1 = require("react");
exports.IconButton = react_1.forwardRef(function (props, ref) {
    var icon = props.icon, children = props.children, isRound = props.isRound, ariaLabel = props["aria-label"], rest = tslib_1.__rest(props
    /**
     * Passing the icon as prop or children should work
     */
    , ["icon", "children", "isRound", "aria-label"]);
    /**
     * Passing the icon as prop or children should work
     */
    var btnIcon = icon || children;
    var a11yProps = {
        "aria-hidden": true,
        focusable: false,
    };
    return (React.createElement(Button_1.Button, tslib_1.__assign({ padding: "0", borderRadius: isRound ? "full" : "md", ref: ref, "aria-label": ariaLabel }, rest), react_1.isValidElement(btnIcon) ? react_1.cloneElement(btnIcon, a11yProps) : null));
});
if (utils_1.__DEV__) {
    exports.IconButton.displayName = "IconButton";
}
//# sourceMappingURL=IconButton.js.map