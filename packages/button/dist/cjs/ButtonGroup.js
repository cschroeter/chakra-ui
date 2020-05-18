"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = exports.useButtonGroup = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var _a = utils_1.createContext({
    strict: false,
    name: "ButtonGroupContext",
}), ButtonGroupCtxProvider = _a[0], useButtonGroup = _a[1];
exports.useButtonGroup = useButtonGroup;
exports.ButtonGroup = react_1.forwardRef(function (props, ref) {
    var size = props.size, colorScheme = props.colorScheme, variant = props.variant, className = props.className, rest = tslib_1.__rest(props, ["size", "colorScheme", "variant", "className"]);
    var css = {
        "> *:first-of-type:not(:last-of-type)": { borderRightRadius: 0 },
        "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
        "> *:not(:first-of-type):last-of-type": { borderLeftRadius: 0 },
    };
    var _className = utils_1.cx("chakra-button__group", className);
    return (React.createElement(ButtonGroupCtxProvider, { value: { size: size, colorScheme: colorScheme, variant: variant } },
        React.createElement(system_1.chakra.div, tslib_1.__assign({ ref: ref, display: "flex", role: "group", whiteSpace: "nowrap", sx: css, className: _className }, rest))));
});
if (utils_1.__DEV__) {
    exports.ButtonGroup.displayName = "ButtonGroup";
}
//# sourceMappingURL=ButtonGroup.js.map