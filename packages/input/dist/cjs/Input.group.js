"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGroup = exports.useInputGroup = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var _a = utils_1.createContext({
    strict: false,
    name: "InputGroupContext",
}), InputGroupProvider = _a[0], useInputGroup = _a[1];
exports.useInputGroup = useInputGroup;
exports.InputGroup = react_1.forwardRef(function (props, ref) {
    var className = props.className, rest = tslib_1.__rest(props, ["className"]);
    var _a = useProvider(rest), htmlProps = _a.htmlProps, context = tslib_1.__rest(_a, ["htmlProps"]);
    var _className = utils_1.cx("chakra-input__group", className);
    return (React.createElement(system_1.chakra.div, tslib_1.__assign({ className: _className, ref: ref, width: "100%", display: "flex", position: "relative" }, htmlProps),
        React.createElement(InputGroupProvider, { value: context, children: props.children })));
});
if (utils_1.__DEV__) {
    exports.InputGroup.displayName = "InputGroup";
}
function useMounted() {
    var _a = react_1.useState(false), isMounted = _a[0], setMounted = _a[1];
    var mount = function () { return setMounted(true); };
    var unmount = function () { return setMounted(false); };
    return { isMounted: isMounted, mount: mount, unmount: unmount };
}
function useProvider(props) {
    var defaults = system_1.useThemeDefaultProps("Input");
    var children = props.children, _a = props.size, size = _a === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.size : _a, _b = props.variant, variant = _b === void 0 ? defaults === null || defaults === void 0 ? void 0 : defaults.variant : _b, htmlProps = tslib_1.__rest(props, ["children", "size", "variant"]);
    var leftElement = useMounted();
    var rightElement = useMounted();
    var leftAddon = useMounted();
    var rightAddon = useMounted();
    return {
        leftElement: leftElement,
        rightElement: rightElement,
        leftAddon: leftAddon,
        rightAddon: rightAddon,
        htmlProps: htmlProps,
        size: size,
        variant: variant,
    };
}
//# sourceMappingURL=Input.group.js.map