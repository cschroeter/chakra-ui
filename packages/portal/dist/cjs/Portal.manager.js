"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalManager = exports.usePortalManager = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("@chakra-ui/utils");
var hooks_1 = require("@chakra-ui/hooks");
var _a = utils_1.createContext({
    strict: false,
}), PortalManagerCtxProvider = _a[0], usePortalManager = _a[1];
exports.usePortalManager = usePortalManager;
/**
 * PortalManager
 *
 * Used to manage multiple portals within an application.
 * It must be render only once, at the root of your application.
 *
 * Inspired by BaseWeb's LayerManager component
 */
function PortalManager(props) {
    var children = props.children, zIndex = props.zIndex;
    /**
     * The element that wraps the stacked layers
     */
    var ref = React.useRef(null);
    var forceUpdate = hooks_1.useForceUpdate();
    /**
     * force an update on mount so the Provider works correctly
     */
    hooks_1.useSafeLayoutEffect(function () {
        forceUpdate();
    }, []);
    /**
     * let's detect if use has mutiple instances of this component
     */
    var parentManager = usePortalManager();
    var context = {
        node: (parentManager === null || parentManager === void 0 ? void 0 : parentManager.node) || ref.current,
        zIndex: zIndex,
    };
    return (React.createElement(PortalManagerCtxProvider, { value: context },
        children,
        React.createElement("div", { className: "chakra-portal-manager", ref: ref })));
}
exports.PortalManager = PortalManager;
if (utils_1.__DEV__) {
    PortalManager.displayName = "PortalManager";
}
//# sourceMappingURL=Portal.manager.js.map